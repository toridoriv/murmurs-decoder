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
  $('#btn-submit-chars').click(function() {
    event.preventDefault();
    decipherMurmurs();
    //$('#results').append(`<p>`+decipherMurmurs()+`</p>`);
    $('#input-chars').val('');
    $('#input-code').val('');
  })
  $('#btn-step2').click(function() {
    $('#instructions-step1').fadeOut();
    $('#instructions-step2').fadeIn();
    $('#form-step1').fadeOut();
    $('#form-step2').fadeIn();
    $('#btn-step1').fadeIn();
    $('#content-results').fadeOut();
    $(this).fadeOut();
  });
  $('#btn-step1').click(function() {
    $('#instructions-step1').fadeIn();
    $('#instructions-step2').fadeOut();
    $('#form-step1').fadeIn();
    $('#form-step2').fadeOut();
    $('#btn-step2').fadeIn();
    $('#content-results').fadeIn();
    $(this).fadeOut();
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