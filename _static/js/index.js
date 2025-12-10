let mkDocsChirpyTranslator = { default: "light", slate: "dark" },
	mkDocs = document.querySelector("[data-md-color-scheme]"),
	chirpy = document.querySelector("[data-chirpy-theme]");
if (chirpy) {
	"default" === mkDocs.getAttribute("data-md-color-scheme") &&
		chirpy.setAttribute("data-chirpy-theme", "light");
	let t = new MutationObserver((t) => {
		t.forEach((t) => {
			"attributes" === t.type &&
				chirpy.setAttribute(
					"data-chirpy-theme",
					mkDocsChirpyTranslator[mkDocs.dataset.mdColorScheme],
				);
		});
	});
	t.observe(mkDocs, {
		attributes: !0,
		attributeFilter: ["data-md-color-scheme"],
	});
}

let paletteSwitcher1 = document.getElementById("__palette_1"),
	paletteSwitcher2 = document.getElementById("__palette_2"),
	isMermaidPage = document.querySelector(".mermaid");
isMermaidPage &&
	(paletteSwitcher1.addEventListener("change", () => {
		location.reload();
	}),
		paletteSwitcher2.addEventListener("change", () => {
			location.reload();
		}));
let header_links = document.querySelectorAll('a[href*="#"]');
if (header_links)
	for (var i = 0; i < header_links.length; i++) {
		let e = header_links[i].getAttribute("href").replace("^.*#", ""),
			t = e.replace(/\s/g, "-");
		(t = e.normalize("NFD").replace(/[\u0300-\u036f]/g, "")),
			header_links[i].setAttribute(
				"href",
				header_links[i].getAttribute("href").replace(e, t),
			);
	}
for (let i of document.querySelectorAll("img")) {
	let t =
		/^(?<alt>(?!^\d*x?\d*$).*?)?(\|?\s*?(?<width>\d+)(x(?<height>\d+))?)?$/gi;
	if (i.alt.match(t)) {
		let e = t.exec(i.alt ?? "");
		(i.width = e.groups.width ?? i.width),
			(i.height = e.groups.height ?? i.height),
			(i.alt = e.groups.alt ?? i.alt);
	}
}
let article = document.querySelectorAll(
	"article.md-content__inner.md-typeset > *:not(.highlight)",
),
	embed_id_regex = /\^\w+\s*$/gi;
for (let t of article) {
	let e = t.innerText.match(embed_id_regex);
	e && (t.innerHTML = t.innerText.replace(e, ""));
}
document.innerText = article;
let cite = document.querySelectorAll(".citation");
if (cite)
	for (let i of cite) {
		let t = i.innerHTML.match(/!?(\[{2}|\[).*(\]{2}|\))/gi);
		if (t) {
			for (let e of t) i.innerHTML = i.innerHTML.replace(e, "");
			i.innerText.trim().length < 2 && (i.style.display = "none");
		}
	}
let blogURL = document.querySelector('meta[name="site_url"]')
	? document.querySelector('meta[name="site_url"]').content
	: location.origin,
	position = ["top", "right", "bottom", "left"];
function brokenImage(e) {
	var t = e?.querySelectorAll("img");
	if (t)
		for (let e = 0; e < t.length; e++) {
			var r = t[e];
			(r.src = decodeURI(decodeURI(r.src))),
				(r.src = r.src.replace(location.origin, blogURL));
		}
	return e;
}
function cleanText(e) {
	return (e.innerText = e.innerText.replaceAll("↩", "").replaceAll("¶", "")), e;
}
function calculateHeight(e) {
	(e = e ? e.innerText || e : ""), (e = Math.floor(e.split(" ").length / 100));
	return e < 2 ? "auto" : 5 <= e ? "20rem" : e + "rem";
}
try {
	let e = Array.from(
		document.querySelectorAll(
			`a.footnote-ref`,
		),
	).filter(
		(e) =>
			!e.classList.contains("link_citation") &&
			!e.classList.contains("post-link"),
	);
	tippy(e, {
		content: "",
		allowHTML: !0,
		animation: "scale-subtle",
		theme: "translucent",
		followCursor: !0,
		arrow: !1,
		touch: "hold",
		inlinePositioning: !0,
		placement: position[Math.floor(Math.random() * position.length - 1)],
		onShow(i) {
			fetch(i.reference.href)
				.then((e) => e.text())
				.then((e) => new DOMParser().parseFromString(e, "text/html"))
				.then(
					(l) => (
						l.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(function (t) {
							var r =
								t.id ||
								t.innerText.split("\n")[0].toLowerCase().replaceAll(" ", "-");
							if (0 < r.length) {
								var n = l.createElement("div");
								n.classList.add(r);
								let e = t.nextElementSibling;
								for (; e && !e.matches("h1, h2, h3, h4, h5, h6");)
									n.appendChild(e), (e = e.nextElementSibling);
								t.parentNode.insertBefore(n, t.nextSibling);
							}
						}),
						l
					),
				)
				.then((r) => {
					if (location.href.replace(location.hash, "") === i.reference.href)
						i.hide(), i.destroy();
					else {
						let e = r.querySelector("article");
						var n,
							l = r.querySelector("h1"),
							l =
								(l &&
									"Index" === l.innerText &&
									((o = decodeURI(r.querySelector('link[rel="canonical"]').href)
										.split("/")
										.filter((e) => e)
										.pop()),
										(l.innerText = o)),
									(e = brokenImage(e)),
									document.querySelector('[id^="tippy"]')),
							o =
								(l && l.classList.add("tippy"),
									i.reference.href.replace(/.*#/, "#"));
						let t = e;
						o.startsWith("#")
							? ((e = r.querySelector(`[id="${o.replace("#", "")}"]`)) &&
								"LI" === e.tagName
								? ((t = document.createElement("div")).innerHTML = e.innerHTML
									.trim()
									.replaceAll("↩", "")
									.replaceAll("¶", ""))
								: e && e.tagName.includes("H")
									? ((l = document.createElement("article")).classList.add(
										"md-content__inner",
										"md-typeset",
									),
										(n = r.querySelector("div." + o.replace("#", ""))) &&
										l.appendChild(n),
										(t = l),
										(e = t))
									: e && 0 === e.innerText.replace(o).length
										? ((e = r.querySelector("div.citation")), (t = e))
										: e &&
										((n = e.querySelector("ul, ol, p")),
											(t = n || cleanText(e))),
								(i.popper.style.height = "auto"))
							: (i.popper.style.height = calculateHeight(e)),
							(i.popper.placement =
								position[Math.floor(Math.random() * position.length)]),
							e && 0 < e.innerText.length
								? (i.setContent(() => {
									var e = document.createElement("div");
									return (e.innerHTML = t ? t.outerHTML : ""), e;
								}),
									(i.popper.style.height = calculateHeight(t)))
								: ((e = r.querySelector("article")),
									i.reference.href.replace(/.*#/, "#"),
									(i.popper.style.height = calculateHeight(e)));
					}
				})
				.catch((e) => {
					console.log(e), i.hide(), i.destroy();
				});
		},
	});
} catch {
	console.log("tippy error, ignore it");
}
