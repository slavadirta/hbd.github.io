<script>
var musik;
function htmlscript(_0x27bf85) {
  var _0x47dcbb = document.querySelector(".open");
  var _0x5ec9d8 = document.querySelector(".left");
  var _0x193693 = document.querySelector(".right");
  var _0x3ca16a = document.querySelector(".lock");
  var _0x3217d4 = document.querySelector(".text");
  
  if ('' != _0x27bf85) {
    musiku = new Audio(_0x27bf85);
    musiku.autoplay = true;
    musiku.loop = true;
  }

  function _0x4d53b7() {
    _0x5ec9d8.style = "transition: .4s ease-out; opacity: 0; width: 0";
    _0x193693.style = "transition: .4s ease-out; opacity: 0; width: 0";
  }

  console.log('%cSlava', 'color: white; font-size: 2.5em; font-weight: 800; text-shadow: 2px 1.5px 0 red, -2px -1.5px 0 blue;');

  _0x3ca16a.addEventListener("click", () => {
    if ('' != _0x27bf85) musiku.play();
    _0x3ca16a.style = "transition: .2s ease-out all; scale: 1.2";
    setTimeout(() => { _0x3ca16a.style = "transition: .3s ease-out all; scale: 0"; }, 300);
    setTimeout(() => {
      _0x5ec9d8.style = "transition: .8s ease-out; width: 0";
      _0x193693.style = "transition: .8s ease-out; width: 0";
      _0x3217d4.style = "transition: .5s ease all; transform: translateY(50px); opacity: 0";
    }, 500);
    setTimeout(_0x4d53b7, 900);
    setTimeout(() => { _0x47dcbb.style = "display: none;"; }, 1300);
  });

  if (tampil) {
    var _0x249bd2 = document.createElement('div');
    _0x249bd2.setAttribute("class", 'help');
    var _0x1b773d = document.createElement("div");
    _0x1b773d.setAttribute('class', "desc");
    var _0x3a05c5 = document.createElement('a');
    _0x3a05c5.setAttribute("href", "https://wa.me/6285213085494");
    _0x3a05c5.textContent = "Slava";

    var _0x1f866b = document.createElement("input");
    _0x1f866b.setAttribute("hidden", '');
    _0x1f866b.setAttribute("type", "checkbox");
    _0x1f866b.setAttribute("id", "menu");

    var _0x1120cf = document.createElement("label");
    _0x1120cf.setAttribute('for', "menu");

    var _0x3cf549 = document.createElement("div");
    _0x3cf549.setAttribute("class", "icon");

    var _0xfeaf6a = document.createElement('div');
    _0xfeaf6a.setAttribute('class', 'line');

    var _0x419ea2 = document.createElement("div");
    _0x419ea2.setAttribute("class", 'close');

    var _0x3bdb35 = document.createElement('div');
    var _0x21b528 = document.createElement("div");
    var _0x936bf2 = document.createElement("div");
    var _0x1a32b1 = document.createElement('div');
    var _0x3d5c17 = document.createElement("div");

    _0x249bd2.appendChild(_0x1b773d);
    _0x1b773d.appendChild(_0x3a05c5);
    _0x249bd2.appendChild(_0x1f866b);
    _0x249bd2.appendChild(_0x1120cf);
    _0x1120cf.appendChild(_0x3cf549);
    _0x3cf549.appendChild(_0xfeaf6a);
    _0xfeaf6a.appendChild(_0x3bdb35);
    _0xfeaf6a.appendChild(_0x21b528);
    _0xfeaf6a.appendChild(_0x936bf2);
    _0x3cf549.appendChild(_0x419ea2);
    _0x419ea2.appendChild(_0x1a32b1);
    _0x419ea2.appendChild(_0x3d5c17);
    _0x47dcbb.after(_0x249bd2);

    var _0xedf497 = document.querySelector("#menu");
    var _0x44d224 = document.querySelector(".icon");
    var _0x5dd6ea = document.querySelector(".line");
    var _0x35843c = document.querySelector(".close");
    var _0x48e0c6 = document.querySelector(".desc");

    _0xedf497.addEventListener("change", e => {
      if (e.currentTarget.checked) {
        _0x44d224.style = "transition: .2s ease all; scale: 0";
        setTimeout(() => {
          _0x5dd6ea.style = "display: none";
          _0x35843c.style = "display: flex";
          _0x44d224.style = "transition: .2s ease all; scale: 1";
        }, 200);
        setTimeout(() => { _0x48e0c6.style = "transition: .2s ease all; scale: 1;"; }, 100);
      } else {
        _0x48e0c6.style = "transition: .2s ease all; scale: 0;";
        _0x44d224.style = "transition: .2s ease all; scale: 0";
        setTimeout(() => {
          _0x5dd6ea.style = "display: flex";
          _0x35843c.style = "display: none";
          _0x44d224.style = "transition: .2s ease all; scale: 1";
        }, 200);
      }
    });

    _0xedf497.checked = false;
    var _0x9b6021 = document.createElement('div');
    _0x9b6021.setAttribute("class", 'tandaair');
    var _0x139fdf = document.createElement('a');
    _0x139fdf.setAttribute('href', "https://wa.me/6285813007420");
    _0x139fdf.textContent = "Slava";
    _0x9b6021.appendChild(_0x139fdf);
    document.querySelector("body").appendChild(_0x9b6021);
  }
}
</script>
