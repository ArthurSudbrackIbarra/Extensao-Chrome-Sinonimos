// This function will open the synonyms site url in a new tab,
// passing the selected word as a selectionTexteter.

findSynonyms = function(word) {

    let selectionText = word.selectionText;
    let url;

    if (selectionText) {

        selectionText = selectionText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");  

        if(selectionText.includes(" ")) {
            selectionText = selectionText.replace(" ", "+");
            url = `https://www.sinonimos.com.br/busca.php?q=${selectionText}`;
        } else {
            url = `https://www.sinonimos.com.br/${selectionText}/`;
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