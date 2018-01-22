'use strict';

const removeCharacters = text => {
  let newText = text.replace(/ /g,'').replace(/\./g, '').toLowerCase();
  return newText;
};

const findNumber = (input, obj) => {
  input = removeCharacters($('#input-quote').val());
  obj = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
}
  for (let key in obj) {
    if (input.includes(obj[key])) {
      return key;
    }
  }
}

const appendResult = (what, where) => {
  $(where).append(`<span> ${what} </span>`);
}

const convertImg = (element, where) => {
  html2canvas($(element).get(0)).then(function(canvas) {
    $(where).append(canvas);
  });
}



// const convertImg = (element, where) => {
//   let getCanvas;
//   html2canvas(element, {
//     onrendered: function(canvas) {
//       $(where).append(canvas);
//       getCanvas = canvas;
//     }
//   });
// }
// const html2canvas = (element, {
//   onrendered: function(canvas) {
//     $(where)
//   }
// })

// const findNumber = (input, numbersArr) => {
//   input = removeCharacters($('#input-quote').val());
//   numbersArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

//   for (let i = 0; i < numbersArr.length; i++) {
//     if (input.includes(numbersArr[i])) {
//       return numbersArr[i];
//     }
//   }
// }