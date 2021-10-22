// This is the file that will execute the script
// on the active tab.


// First, we select all elements that might contain text:
let textstrings = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, ol, caption, span, a')

// This function replaces the text.
function runreplace(node) {
    var inside = node.innerHTML
     inside = inside.replaceAll('CROWN LAND', 'STOLEN LAND')
        .replaceAll('crown land', 'Stolen Land')
        .replaceAll('Crown land', 'Stolen Land')
        .replaceAll('Crown Land', 'Stolen Land')
    node.innerHTML = inside
}

for(let i=0; i < textstrings.length; i++){
    runreplace(textstrings[i]);
}


// Now set up the mutation observer:

// Options for the observer (which mutations to observe)
const config = {
    characterData: true,
    attributes: false,
    childList: true,
    subtree: false
};

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
    mutationsList.forEach((mutation) => {
        //alert(mutation.type);
        let pullstrings = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, ul, td, ol, caption, span, a')

        for(let i=0; i < pullstrings.length; i++){
            pullstrings[i] = runreplace(pullstrings[i]);
        }
    });
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

let observeText = document.querySelector('body')

observer.observe(observeText, config);
