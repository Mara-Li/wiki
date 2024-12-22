//apply code font on numbers for wiki table admonition

const admonition = document.querySelectorAll(".admonition.wiki table td");
admonition.forEach((item) => {
	if (item.textContent.match(/^\d+$/)) {
		item.style.fontFamily = "var(--md-code-font)";
	}
});

/**
 * @file Comments
 * @see https://chirpy.dev/
 * @description Comments adapted to Mkdocs Material theme
 * Allow to switch light/dark theme while using Mkdocs Material theme button
 */

const mkDocsChirpyTranslator = {
	default: "light",
	slate: "dark",
  };
  
  const mkDocs = document.querySelector("[data-md-color-scheme]");
  const chirpy = document.querySelector("[data-chirpy-theme]");
  
  if (chirpy) {
	//if mkdocs attribute at the first chargement is light, switch to light directly
	if (mkDocs.getAttribute("data-md-color-scheme") === "default") {
	  chirpy.setAttribute("data-chirpy-theme", "light");
	}
  
	// create mutation observer to change chirpyTheme when mkDocs theme changes
	const observer = new MutationObserver((mutations) => {
	  mutations.forEach((mutation) => {
		if (mutation.type === "attributes") {
		  chirpy.setAttribute(
			"data-chirpy-theme",
			mkDocsChirpyTranslator[mkDocs.dataset.mdColorScheme]
		  );
		}
	  });
	});
  
	// observe mkDocs theme change
	observer.observe(mkDocs, {
	  attributes: true,
	  attributeFilter: ["data-md-color-scheme"],
	});
  }

/**
 * @file MathJax
 * @see Material for MkDocs: https://squidfunk.github.io/mkdocs-material/
 * @description Must be loaded BEFORE polyfills.js scripts
 */

window.MathJax = {
	tex: {
	  inlineMath: [["\\(", "\\)"]],
	  displayMath: [["\\[", "\\]"]],
	  processEscapes: true,
	  processEnvironments: true,
	},
	options: {
	  ignoreHtmlClass: ".*|",
	  processHtmlClass: "arithmatex",
	},
  };
  
  document$.subscribe(() => {
	MathJax.typesetPromise();
  });

  /**
 * @file URLEXIST
 * @overview Check if the url exists
 * @description Create a special class & remove link if the url does not exist
 */

/**
 * Correct some bug in mkdocs creation for links
 * @param {URL} url
 * @param {number} typeURL
 * @returns
 */
function parseURL(url, typeURL) {
	let ref = "";
	let title = "";
	if (typeURL === 0) {
		ref = url.href;
		title = url.title;
	} else if (typeURL === 1) {
		ref = url.src;
		title = url.alt;
	}
	if (ref.match(/index$/)) {
		ref = ref.replace(/index$/, "");
	}
	if (ref.includes("%5C")) {
		ref = ref.replace(/%5C/g, "/");
	}
	if (ref.match(/\.md\/$/)) {
		ref = ref.replace(/\.md\/$/, "/");
	}
	ref = decodeURI(ref);
	if (typeURL === 0) {
		url.href = ref;
		url.title = title;
		if (title.length === 0) {
			title = url.innerText;
			url.title = title;
		}
	} else if (typeURL === 1) {
		url.src = ref;
		url.alt = title;
	}
	return {
		title,
		ref,
		url,
	};
} 

/**
 * Use search/all_files.json to check if the url exists
 * @param {URL} url
 * @param {string} ref
 * @param {string} title
 * @param {string[]} history
 * @returns {string[]} history
 */
function checkIfInternalLinksExists(ref, title, url, history) {
	//return if the url is not internal
	//verify by checking if the url starts with the blog url
	let cleanURL = url.href
		.replace(url.host, "")
		.replace(/http(s)?:(\/){1,3}/gi, "")
		.replace(/^\//, "");
	cleanURL =
    cleanURL.trim().length === 0 ? "./" : decodeURI(cleanURL).toLowerCase();
	const blogURL = document.querySelector("meta[name=\"site_url\"]").content;
	const part = `${blogURL
		.split("/")
		.filter((part) => part.length > 0)
		.pop()}/`
		.toLowerCase();

	/** get last part of the url, like wiki in 127.0.0.1:8000/wiki/ */
	cleanURL = cleanURL.replace(part.replace(/^\//i, ""), "").toLowerCase().replace(/\/$/, "");
	if (cleanURL.length === 0) {
		cleanURL = "./";
	}

	if (!history.includes(cleanURL.replace(/\/$/, "")) && cleanURL !== "./") {
		fetch(`${blogURL}/search/all_files.json`)
			.then((response) => response.json())
			.then((json) => {
				json.forEach((doc) => {
					const docURL = decodeURI(doc.url).toLowerCase().replace(/\/$/, "");
					if (docURL === cleanURL.replace(".md", "")) {
						history.push(cleanURL.replace(/\/$/, ""));
					}
				});
				history = [...new Set(history)];
				if (
					!history.includes(cleanURL.replace(/\/$/, "")) &&
					cleanURL !== "./"
				) {
					const newItem = document.createElement("div");
					newItem.innerHTML = title;
					newItem.classList.add("not_found");
					newItem.setAttribute("href", ref);
					console.warn("Link not found:", {
						ref,
						title,
						url,
					});
					try {
						url.parentNode.replaceChild(newItem, url);
					} catch (error) {
						console.error(error);
					}
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}
	return history;
}

let history = [];
const ht = document.querySelectorAll(
	"article:not(.md-post) a:not(img, .headerlink)"
);
for (const anchor of ht) {
	if (
		!anchor.getElementsByTagName("img").length > 0 &&
    !anchor.getElementsByTagName("svg").length > 0 &&
    !anchor.href.includes("#") &&
    anchor.hostname === window.location.hostname
	) {
		const linkNotImage = parseURL(anchor, 0);
		history = checkIfInternalLinksExists(linkNotImage.ref, linkNotImage.title, anchor, history);
	}
}

for (const image of document.querySelectorAll("img")) {
	if (image.hostname === window.location.hostname) {
		const linkImage = parseURL(image, 1);
		history = checkIfInternalLinksExists(linkImage.ref, linkImage.title, image, history);
	}
}

/**
 * @file Misc
 * @description Various file links and patch I was to lazy to do in mkdocs
 */

//patch a href attributes
const header_links = document.querySelectorAll("a[href*=\"#\"]");
if (header_links) {
	for (var i = 0; i < header_links.length; i++) {
		const header = header_links[i].getAttribute("href").replace("^.*#", "");
		//replace " " with "-"
		let header_fix = header.replace(/\s/g, "-");
		//replace any accent with the corresponding letter
		header_fix = header.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		header_links[i].setAttribute(
			"href",
			header_links[i].getAttribute("href").replace(header, header_fix)
		);
	}
}


for (const i of document.querySelectorAll("img")) {
	const resize = /^(?<alt>(?!^\d*x?\d*$).*?)?(\|?\s*?(?<width>\d+)(x(?<height>\d+))?)?$/gi;
	if (i.alt.match(resize)) {
		const match = resize.exec(i.alt ?? "");
		i.width = match.groups.width ?? i.width;
		i.height = match.groups.height ?? i.height;
		i.alt = match.groups.alt ?? i.alt;
		
	}
}

//remove ^id from contents ;
// Only work in the form of "content ^id" (and ^id must end the lines)
const article = document.querySelectorAll(
	"article.md-content__inner.md-typeset > *:not(.highlight)"
);
const embed_id_regex = /\^\w+\s*$/gi;
for (const element of article) {
	const embed_id = element.innerText.match(embed_id_regex);
	if (embed_id) {
		element.innerHTML = element.innerText.replace(embed_id, "");
	}
}
document.innerText = article;

const cite = document.querySelectorAll(".citation");
if (cite) {
	for (const elem of cite) {
		const img_cite = elem.innerHTML.match(/!?(\[{2}|\[).*(\]{2}|\))/gi);
		if (img_cite) {
			for (const element of img_cite) {
				elem.innerHTML = elem.innerHTML.replace(element, "");
			}
			if (elem.innerText.trim().length < 2) {
				elem.style.display = "none";
			}
		}
	}
}

window.onload = function () {
	const frameElement = document.querySelector("iframe");
	if (!frameElement) {
		return;
	}
	/** get all file in assets/stylesheets */
	const fileInStylesheets = [];
	const files = document.querySelectorAll("link");
	files.forEach((file) => {
		if (file.href.endsWith(".css")) {
			fileInStylesheets.push(file.href);
		}
	});
	const doc = frameElement.contentDocument || frameElement.contentWindow.document;
	fileInStylesheets.forEach((file) => {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = file;
		link.type = "text/css";
		doc.head.appendChild(link);
	});
	const theme = document.querySelector("[data-md-color-scheme]");
	/** get slate bg */

	if (theme.getAttribute("data-md-color-scheme") === "default") {
		doc.body.setAttribute("class", "light");
	} else {
		doc.body.setAttribute("class", "dark");
		const bgColor = getComputedStyle(theme).getPropertyValue("--md-default-bg-color");
		doc.body.style.setProperty("--md-default-bg-color", bgColor);
	}
	doc.body.classList.add("graph-view");
};

const paletteSwitcher1 = document.getElementById("__palette_1");
const paletteSwitcher2 = document.getElementById("__palette_2");

const isMermaidPage = document.querySelector(".mermaid");
if (isMermaidPage) {
	paletteSwitcher1.addEventListener("change", () => {
		location.reload();
	});

	paletteSwitcher2.addEventListener("change", () => {
		location.reload();
	});
}