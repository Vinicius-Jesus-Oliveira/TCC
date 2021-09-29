chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tab = tabs[0]
    var url = new URL(tab.url)
    var pagina = url.hostname
    document.getElementById('url').innerText = pagina

});