// This function will open the synonyms site url in a new tab,
// passing the selected word as a parameter.

findSynonyms = function(word){
    var word = word.selectionText;
    chrome.tabs.create({ url: `https://www.sinonimos.com.br/${word}/` });
};

// The code below creates a room for our extension
// in Chrome's context menu.

chrome.contextMenus.create({
    title: "Ver sinônimos",
    contexts:["selection"],  // ContextType.
    onclick: findSynonyms // A callback function.
});