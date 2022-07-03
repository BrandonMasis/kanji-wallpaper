let kanji = document.getElementById("kanji");
let pronun = document.getElementById("kana");
let div = document.getElementById("photo");

function info() {
  let userKanji = prompt("kanji");
  if (userKanji) {
    kanji.textContent = userKanji;
  } else {
    kanji.textContent = "-";
  }
  let userPronun = prompt("kana");
  if (userPronun) {
    pronun.textContent = userPronun;
  } else {
    pronun.textContent = " ";
  }
}

function takeshot() {
  html2canvas(div).then(function (canvas) {
    document.getElementById("output").appendChild(canvas);
  });
}

function reload() {
  location.reload();
}
info();
takeshot();
alert("Done, scroll down");
