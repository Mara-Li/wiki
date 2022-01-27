function UrlExists(url) {
    ref = url.href
    var http = new XMLHttpRequest();
    http.open('GET', ref, true);
    http.onload=function(e) {
        if (http.status == '404') {
            const newItem = document.createElement('div');
            newItem.innerHTML = url.innerHTML;
            newItem.classList.add('not_found');
            url.parentNode.replaceChild(newItem, url);
        }
        else {
            return true;
        }
    }
    http.send()
}


var p_search = /\.{2}\//gi
not_found = []
var ht = document.querySelectorAll('a');
for (var i = 0; i < ht.length; i++) {
    var link = UrlExists(ht[i]);

}


var ht = document.querySelectorAll('article.md-content__inner.md-typeset > *:not(.highlight)');
var scr=/\^(.*)/gi;
for (var i = 0; i <ht.length;i++){
    const fp=ht[i].innerHTML.match(scr)
	if (fp) {
        ht[i].innerHTML=ht[i].innerHTML.replace(fp, '')
    }
}
document.innerHTML = ht;
