// This function will open the synonyms site url in a new tab,
// passing the selected word as a parameter.

findSynonyms = function(word) {

    let param = word.selectionText;
    let url;

    if (param) {

        param = param.normalize("NFD").replace(/[\u0300-\u036f]/g, "");  

        if(param.includes(" ")) {
            param = param.replace(" ", "+");
            url = `https://www.sinonimos.com.br/busca.php?q=${param}`;
        } else {
            url = `https://www.sinonimos.com.br/${param}/`;
        }
        
    }

    chrome.tabs.create({ url: encodeURI(url) });

};

// The code below creates a room for our extension
// in Chrome's context menu.

chrome.contextMenus.create({
    title: "Ver sinônimos",
    contexts:["selection"],  // ContextType.
    onclick: findSynonyms // A callback function.
});