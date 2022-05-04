const canvas = document.getElementById('shapes');
const ctx = canvas.getContext('2d');

const html = {
    x: 550,
    y: 500,
    width: 100,
    height: 100,
}

const javascript = {
    x: 700,
    y: 500,
    width: 100,
    height: 100,
}

const css = {
    x: 850,
    y: 500,
    width: 100,
    height: 100,
}

const pumes = [
    {
        x: 150,
        y: 500,
        width: 100,
        height: 100,
    },
    {
        x: 300,
        y: 500,
        width: 100,
        height: 100,
    }
]



const pumeImg = new Image();
pumeImg.src = './img/pume.png';

const jsImg = new Image();
jsImg.src = './img/javascript.png'

const htmlImg = new Image();
htmlImg.src = './img/html.png';

const cssImg = new Image();
cssImg.src = './img/css.png';
ctx.clearRect(0, 0, 1000, 600);

window.onload = function () {
    ctx.drawImage(htmlImg, html.x, html.y, html.width, html.height);
    ctx.drawImage(jsImg, javascript.x, javascript.y, javascript.width, javascript.height);
    ctx.drawImage(cssImg, css.x, css.y, css.width, css.height);
    pumes.forEach(elem => {
        ctx.drawImage(pumeImg, elem.x, elem.y, elem.width, elem.height);
      })
}

function movePumes () {
    ctx.clearRect(0, 0, 1000, 600);
    pumes[1].x = pumes[1].x + 10;
    pumes[0].x = pumes[0].x + 10;
    if (pumes[1].x > 1000) {
      pumes[1].x = -50;
    }
    if (pumes[0].x > 1000) {
        pumes[0].x = -50;
    }
    ctx.drawImage(htmlImg, html.x, html.y, html.width, html.height);
    ctx.drawImage(jsImg, javascript.x, javascript.y, javascript.width, javascript.height);
    ctx.drawImage(cssImg, css.x, css.y, css.width, css.height);
    pumes.forEach(elem => {
        ctx.drawImage(pumeImg, elem.x, elem.y, elem.width, elem.height);
      })
  }

  setTimeout(function () {
    let interval = setInterval(movePumes, 100);
  }, 1000)



