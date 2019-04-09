(function() {
  var aa = document.querySelectorAll('input[id^="retain_customfield_"]');
  for (var i = 0; i < aa.length; i++) {
    aa[i].checked = true;
  }
  document.getElementById('nextButton').scrollIntoView();
})();
