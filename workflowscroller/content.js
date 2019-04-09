let non_zero_issuetypes = [];
(function() {
  let table = document.getElementsByTagName('tbody');
  for (let i = 0; i < table.length; i++) {
    if (
      table[i]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('td')[0]
        .getElementsByTagName('span')[0].innerText != 0
    ) {
      non_zero_issuetypes.push(table[i]);
    }
  }
  console.log(non_zero_issuetypes);
})();

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.scroll) {
    next = non_zero_issuetypes.shift();
    next.scrollIntoView();
  }
});
