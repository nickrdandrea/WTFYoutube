function callback() {
    let shelves = document.querySelectorAll("ytd-shelf-renderer");
    if (shelves) {
        for (i = 0; i < shelves.length; i++) {
            shelves[i].setAttribute("hidden", "");
        }
    }
}

const targetNodeList = document.querySelectorAll('ytd-page-manager');
const targetNode = targetNodeList[0]

const observerOptions = {
    childList: true,
    subtree: true
}

const observer = new MutationObserver(callback);

observer.observe(targetNode, observerOptions);



