chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'update') {
    sendResponse({message: '안녕하세요!'});
  }
});
