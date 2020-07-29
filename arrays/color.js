document.querySelector('body'); 

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setTimeout(() => {
  document.querySelector('body').style.background = getRandomColor();
}, 100);


document.querySelector('body');

setTimeout(() => { 
  console.log('Hello Easy Auto Refresh!')
}, 1000);