$(document).ready(function() {
  $('#btn-submit').click(function() {
    event.preventDefault();
    appendResult(findNumber(), '#content-results');
    $('#input-quote').val('');
    $('.btn-coder').fadeIn();
  });
  $('#btn-to-img').click(function() {
    event.preventDefault();
    convertImg('#content-results', '#image-display');
  });
});

/*
let myString = `My string is ${true}`;
undefined
myString
"My string is true"
Service Worker termination by a timeout timer was canceled because DevTools is attached.
myString = `My string is ${myString}`
"My string is My string is true"
myString = `My string is ${myString}`
"My string is My string is My string is true"
myString = `My string is ${myString}`
"My string is My string is My string is My string is true"
myString = `My string is ${myString}`
"My string is My string is My string is My string is My string is true"
 */