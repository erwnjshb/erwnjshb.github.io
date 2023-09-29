// LOGIN-SHIT AREA
const login = document.querySelector("#sign-up");
const login_form = document.querySelector("form");
const close_button = document.querySelector("form .fa-circle-xmark");

login.addEventListener("click", function () {
  if (login_form.classList.contains("active")) {
    login_form.classList.remove("active");
  } else {
    login_form.classList.add("active");
  }
});

close_button.addEventListener("click", function () {
  login_form.classList.remove("active");
});

//CHOOSE ARTIST SHIT-AREA
const choose = document.querySelector("#choose");
const artist = document.querySelector(".choose-artist");
const close = document.querySelector("#artist-close");

choose.addEventListener("click", function () {
  if (artist.classList.contains("active")) {
    artist.classList.remove("active");
  } else {
    artist.classList.add("active");
  }
});
close.addEventListener("click", function () {
  artist.classList.remove("active");
});

//ARTIST
var bg = document.getElementById("background");
var bruno = document.querySelector("#bruno");
var joji = document.querySelector("#joji");
var weeknd = document.querySelector("#weeknd");

bruno.addEventListener("click", function () {
  bg.style.backgroundImage = "url(images/mars.jpg)";
  document.querySelector(".home-title").innerHTML = `
    <h1>BRUNO MARS</h1>
    `;
  document.querySelector(
    ".home-detail"
  ).innerHTML = `<p>Peter Gene Hernandez (born October 8, 1985), known professionally as Bruno Mars, is an American singer-songwriter and record producer. He is known for his stage performances, retro showmanship, and for performing in a wide range of musical styles, including pop, R&B, funk, soul, reggae, disco, and rock.</p>`;
});
joji.addEventListener("click", function () {
  bg.style.backgroundImage = "url(images/joji.jpg)";
  document.querySelector(".home-title").innerHTML = `
    <h1>JOJI</h1>
    `;
  document.querySelector(
    ".home-detail"
  ).innerHTML = `<p>George Kusunoki Miller (ミラー・ジョージ・クスノキ, Mirā Jōji Kusunoki, born 18 September 1992),[2] known professionally as Joji and formerly for playing the characters Filthy Frank and Pink Guy, is a Japanese singer-songwriter, rapper and internet personality.</p>`;
});
weeknd.addEventListener("click", function () {
  bg.style.backgroundImage = "url(images/weeknd.jpg)";
  document.querySelector(".home-title").innerHTML = `
    <h1>THE WEEKND</h1>
    `;
  document.querySelector(
    ".home-detail"
  ).innerHTML = `<p>Abel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer. He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.</p>`;
});
console.log(document.querySelector(".home-detail").innerHTML);
