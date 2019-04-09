// (function() {
//   console.log('test');
//   let tab = document.getElementsByTagName('tbody');
//   console.log(tab);
//   for (let i = 0; i < tab.length; i++) {
//     if (
//       tab[i]
//         .getElementsByTagName('tr')[0]
//         .getElementsByTagName('td')[0]
//         .getElementsByTagName('span')[0].innerText != 0
//     ) {
//       tab[i].scrollIntoView();
//       break;
//     }
//   }
// })();
// chrome.browserAction.onClicked.addListener(function(tab) {
//   console.log('test');
//   let tab = document.getElementsByTagName('tbody');
//   for (let i = 0; i < tab.length; i++) {
//     if (
//       tab[i]
//         .getElementsByTagName('tr')[0]
//         .getElementsByTagName('td')[0]
//         .getElementsByTagName('span')[0].innerText != 0
//     ) {
//       tab[i].scrollIntoView();
//       break;
//     }
//   }
// });

// let idx = 0;
// chrome.browserAction.onClicked.addListener(function() {
//   console.log(document);
//   let table = document.getElementsByTagName('tbody');
//   console.log(table);
//   for (let i = idx; i < table.length; i++) {
//     if (
//       table[i]
//         .getElementsByTagName('tr')[0]
//         .getElementsByTagName('td')[0]
//         .getElementsByTagName('span')[0].innerText != 0
//     ) {
//       idx++;
//       console.log(idx);
//       break;
//     }
//   }
//   console.log(table);
//   console.log(idx);
//   //table[idx].scrollIntoView();
// });
/*
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});
*/
// chrome.browserAction.onClicked.addListener(function() {
//   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     chrome.tabs.sendMessage({ Clicked: 'true' });
//   });
// });

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      scroll: true
    });
  });
});
