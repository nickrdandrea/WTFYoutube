function callback(mutationList, observer) {
  mutationList.forEach((mutation) => {
    if (mutation.target.nodeName == 'YTD-SHELF-RENDERER') {
      mutation.target.setAttribute('hidden', '');
    }
  });
}

const targetNode = document.querySelector('ytd-page-manager');

const observerOptions = {
  childList: true,
  subtree: true,
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, observerOptions);
