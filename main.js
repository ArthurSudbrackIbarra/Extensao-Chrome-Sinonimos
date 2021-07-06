findSynonyms = function(word){
    var word = word.selectionText;
    chrome.tabs.create({ url: `https://www.sinonimos.com.br/${word}/` });
};

chrome.contextMenus.create({
    title: "Ver sinônimos",
    contexts:["selection"],  // ContextType.
    onclick: findSynonyms // A callback function.
});