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
  bg.classList.remove("pop");
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
const bg = document.getElementById("background");
const bruno = document.querySelector("#bruno");
const joji = document.querySelector("#joji");
const weeknd = document.querySelector("#weeknd");
const zwing = document.querySelector("#zwing");
const title = document.querySelector(".home-title h1");
const root = document.documentElement;
const detail = document.querySelector(".home-detail");
const home = document.querySelector(".logo");
const songBg = document.getElementById("song-container");

//SONG VARIABLE
const song_title = document.getElementsByClassName("song-title");
const song_artist = document.getElementsByClassName("song-artist");
const song_image = document.getElementsByClassName("emptySong");
//ALBUM ARRAYS
const jojiAlbum = [
  {
    title: "Smithereens",
    artist: "Joji 2022",
    image: `<img src="album/cover/joji/1.png" alt="" />`,
  },
  {
    title: "Ballads 1",
    artist: "Joji 2018",
    image: `<img src="album/cover/joji/2.png" alt="" />`,
  },
  {
    title: "Nectar",
    artist: "Joji 2020",
    image: `<img src="album/cover/joji/3.png" alt="" />`,
  },
  {
    title: "Glimpes of Us",
    artist: "Joji 2022",
    image: `<img src="album/cover/joji/4.png" alt="" />`,
  },
];
const marsAlbum = [
  {
    title: "Unorthodox Jukebox",
    artist: "Bruno Mars 2012",
    image: `<img src="album/cover/mars/1.png" alt="" />`,
  },
  {
    title: "Doo-Wops & Hooligans",
    artist: "Bruno Mars 2010",
    image: `<img src="album/cover/mars/2.png" alt="" />`,
  },
  {
    title: "24K Magic",
    artist: "Bruno Mars 2016",
    image: `<img src="album/cover/mars/3.png" alt="" />`,
  },
  {
    title: "An Evening With Silk Sonic",
    artist: "Bruno Mars 2021",
    image: `<img src="album/cover/mars/4.png" alt="" />`,
  },
];
const weekndAlbum = [
  {
    title: "Starboy",
    artist: "The Weeknd 2016",
    image: `<img src="album/cover/weeknd/1.png" alt="" />`,
  },
  {
    title: "After Hours",
    artist: "The Weeknd 2020",
    image: `<img src="album/cover/weeknd/2.png" alt="" />`,
  },
  {
    title: "Beauty Behind The Madness",
    artist: "The Weeknd 2015",
    image: `<img src="album/cover/weeknd/3.png" alt="" />`,
  },
  {
    title: "Dawn Fm",
    artist: "The Weeknd 2022",
    image: `<img src="album/cover/weeknd/4.png" alt="" />`,
  },
];
const zwingAlbum = [
  {
    title: "Nocte Ac Mane",
    artist: "Zwing 2022",
    image: `<img src="album/cover/zwing/1.png" alt="" />`,
  },
  {
    title: "Zwing",
    artist: "Zwing 2022",
    image: `<img src="album/cover/zwing/2.png" alt="" />`,
  },
  {
    title: "Unknown Album",
    artist: "Artist",
    image: `<div class="empty">
    <i class="fa-solid fa-music"></i>
  </div>`,
  },
  {
    title: "Unknown Album",
    artist: "Artist",
    image: `<div class="empty">
    <i class="fa-solid fa-music"></i>
  </div>`,
  },
];
const emptyAlbum = [
  {
    title: "Unknown Album",
    artist: "Artist",
    image: `<div class="empty">
                <i class="fa-solid fa-music"></i>
              </div>`,
  },
  {
    title: "Unknown Album",
    artist: "Artist",
    image: `<div class="empty">
                <i class="fa-solid fa-music"></i>
              </div>`,
  },
  {
    title: "Unknown Album",
    artist: "Artist",
    image: `<div class="empty">
                <i class="fa-solid fa-music"></i>
              </div>`,
  },
  {
    title: "Unknown Album",
    artist: "Artist",
    image: `<div class="empty">
                <i class="fa-solid fa-music"></i>
              </div>`,
  },
];

//SONG ARRAY

const jojiSong = [
  {
    songtitle: "Glimpes of Us",
    artistname: "Joji",
    img: '<img src="album/songs/cover/joji/1.png" alt="song" srcset="" />',
    music: `<source src="music/joji/1.mp3" type="" />`,
  },
  {
    songtitle: "Slowly Dancing in the Dark",
    artistname: "Joji",
    img: '<img src="album/songs/cover/joji/2.png" alt="song" srcset="" />',
    music: `<source src="music/joji/2.mp3" type="" />`,
  },
  {
    songtitle: "Die For You",
    artistname: "Joji",
    img: '<img src="album/songs/cover/joji/3.png" alt="song" srcset="" />',
    music: `<source src="music/joji/3.mp3" type="" />`,
  },
];
const marsSong = [
  {
    songtitle: "Locked Out of Heaven",
    artistname: "Bruno Mars",
    img: '<img src="album/songs/cover/mars/1.png" alt="song" srcset="" />',
    music: `<source src="music/mars/1.mp3" type="" />`,
  },
  {
    songtitle: "Just The Way You Are",
    artistname: "Bruno Mars",
    img: '<img src="album/songs/cover/mars/2.png" alt="song" srcset="" />',
    music: `<source src="music/mars/2.mp3" type="" />`,
  },
  {
    songtitle: "When I Was Your Man",
    artistname: "Bruno Mars",
    img: '<img src="album/songs/cover/mars/3.png" alt="song" srcset="" />',
    music: `<source src="music/mars/3.mp3" type="" />`,
  },
];
const weekndSong = [
  {
    songtitle: "Starboy",
    artistname: "The Weeknd ft. Daft Punk",
    img: '<img src="album/songs/cover/weeknd/1.png" alt="song" srcset="" />',
    music: `<source src="music/weeknd/1.mp3" type="" />`,
  },
  {
    songtitle: "Die For You",
    artistname: "The Weeknd",
    img: '<img src="album/songs/cover/weeknd/2.png" alt="song" srcset="" />',
    music: `<source src="music/weeknd/2.mp3" type="" />`,
  },
  {
    songtitle: "Blinding Lights",
    artistname: "The Weeknd",
    img: '<img src="album/songs/cover/weeknd/3.png" alt="song" srcset="" />',
    music: `<source src="music/weeknd/3.mp3" type="" />`,
  },
];
const zwingSong = [
  {
    songtitle: "Nocte Ac Mane",
    artistname: "Zwing",
    img: '<img src="album/songs/cover/zwing/1.png" alt="song" srcset="" />',
    music: `<source src="music/zwing/1.mp3" type="" />`,
  },
  {
    songtitle: "Zwing",
    artistname: "Zwing",
    img: '<img src="album/songs/cover/zwing/2.png" alt="song" srcset="" />',
    music: `<source src="music/zwing/2.mp3" type="" />`,
  },
  {
    songtitle: "Song Title",
    artistname: "Artist",
    img: `<i class="fa-solid fa-music"></i>`,
    music: `<source src="" type="" />`,
  },
];
const defaultSong = [
  {
    songtitle: "Song Title",
    artistname: "Artist",
    img: `<i class="fa-solid fa-music"></i>`,
  },
  {
    songtitle: "Song Title",
    artistname: "Artist",
    img: `<i class="fa-solid fa-music"></i>`,
  },
  {
    songtitle: "Song Title",
    artistname: "Artist",
    img: `<i class="fa-solid fa-music"></i>`,
  },
];
let currentSong = [];

//CALLABLE FUNTIONS
let changeBg = (url) => {
  songBg.style.backgroundImage = `url(${url})`;
};

let change_color = (pri, pclr, sec, sclr, bg, bgc) => {
  root.style.setProperty(pri, pclr);
  root.style.setProperty(sec, sclr);
  root.style.setProperty(bg, bgc);
};
let change_image = (name, url) => {
  bg.style.backgroundImage = `url(${url})`;
  document.querySelector(".home-title").innerHTML = `
    <h1>${name}</h1>
    `;
  if (bg.classList.contains("pop")) {
    bg.classList.remove("pop");
  } else {
    bg.classList.add("pop");
  }
  artist.classList.remove("active");
};
let chang_album = (albumnatin) => {
  const altitle = document.getElementsByClassName("AlbumTitle");
  const album = document.getElementsByClassName("albumImageContainer");
  const arName = document.getElementsByClassName("name-etal");
  for (let i = 0; i < albumnatin.length; i++) {
    // album[i].innerHTML = `<img src="${albumnatin[i].image}" alt="album" />`;
    album[i].innerHTML = albumnatin[i].image;
    altitle[i].textContent = albumnatin[i].title;
    arName[i].textContent = albumnatin[i].artist;
  }
};
let change_song = (songnatintoh) => {
  for (let i = 0; i < songnatintoh.length; i++) {
    song_image[i].innerHTML = songnatintoh[i].img;
    song_artist[i].textContent = songnatintoh[i].artistname;
    song_title[i].textContent = songnatintoh[i].songtitle;
  }
};
//HOME
home.addEventListener("click", function () {
  change_image(
    "ERWINIFY",
    "https://media.giphy.com/media/B8dUiWJmQi4KCQhS9x/giphy.gif"
  );
  player_reset();
  change_color(
    "--primary",
    "#3f4db4",
    "--secondary",
    "#893fb4",
    "--bg-color",
    "#02010a"
  );
  changeBg("bg/default.png");
  chang_album(emptyAlbum);
  change_song(defaultSong);
  currentSong = defaultSong;
  detail.innerHTML = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
  eligendi unde porro repellat quia. Modi necessitatibus dolorum
  quidem, recusandae autem harum minima pariatur aperiam! Laudantium
  enim hic dignissimos dolore eum?`;
});

//BRUNO MARS
bruno.addEventListener("click", function () {
  player_reset();
  change_image("BRUNO MARS", "images/mars.jpg");
  change_color(
    "--primary",
    "#b49b3f",
    "--secondary",
    "#b4743f",
    "--bg-color",
    "#0a0901"
  );
  changeBg("bg/mars.png");
  chang_album(marsAlbum);
  change_song(marsSong);
  currentSong = marsSong;
  detail.innerHTML = `<p>Peter Gene Hernandez (born October 8, 1985), known professionally as Bruno Mars, is an American singer-songwriter and record producer. He is known for his stage performances, retro showmanship, and for performing in a wide range of musical styles, including pop, R&B, funk, soul, reggae, disco, and rock.</p>`;
});

//JOJI
joji.addEventListener("click", function () {
  player_reset();
  change_image("JOJI", "images/joji.jpg");
  change_color(
    "--primary",
    "#3f4fb4",
    "--secondary",
    "#3fb4a7",
    "--bg-color",
    "#01090a"
  );
  changeBg("bg/joji.png");
  chang_album(jojiAlbum);
  change_song(jojiSong);
  currentSong = jojiSong;

  detail.innerHTML = `<p>George Kusunoki Miller (ミラー・ジョージ・クスノキ, Mirā Jōji Kusunoki, born 18 September 1992),[2] known professionally as Joji and formerly for playing the characters Filthy Frank and Pink Guy, is a Japanese singer-songwriter, rapper and internet personality.</p>`;
});

//WEEKND
weeknd.addEventListener("click", function () {
  player_reset();
  change_image("THE WEEKND", "images/weeknd.jpg");

  change_color(
    "--primary",
    "#c04429",
    "--secondary",
    "#641212",
    "--bg-color",
    "#0a0101"
  );
  changeBg("bg/weeknd.png");
  chang_album(weekndAlbum);
  change_song(weekndSong);

  currentSong = weekndSong;
  detail.innerHTML = `<p>Abel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer. He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.</p>`;
});

zwing.addEventListener("click", function () {
  change_image("ZWING", "images/zwing.jpeg");
  player_reset();
  change_color(
    "--primary",
    "#29bfc0",
    "--secondary",
    "#64123d",
    "--bg-color",
    "#010a0a"
  );
  changeBg("bg/zwing.png");
  chang_album(zwingAlbum);
  change_song(zwingSong);
  currentSong = zwingSong;
  detail.innerHTML = `<p>Born in Florence but raised in the Pearl of the Orient Seas. Deo Francisco Digno, also known as Zwing, is a 22-year-old Music Producer & Singer/Songwriter based in Florence, Italy.</p>`;
});

//SONG
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlMusic = document.getElementById("ctrlMusic");

// song.onloadedmetadata = function () {
//   progress.max = song.duration;
//   progress.value = song.currentTime;
// };

// ctrlMusic.addEventListener("click", function () {
//   if (ctrlMusic.classList.contains("fa-pause")) {
//     song.pause();
//     ctrlMusic.classList.remove("fa-pause");
//     ctrlMusic.classList.add("fa-play");
//   } else {
//     song.play();
//     ctrlMusic.classList.remove("fa-play");
//     ctrlMusic.classList.add("fa-pause");
//   }
// });

// if (song.play()) {
//   setInterval(() => {
//     progress.value = song.currentTime;
//   }, 500);
// }

// progress.onchange = function () {
//   song.play();
//   song.currentTime = progress.value;
//   ctrlMusic.classList.remove("fa-play");
//   ctrlMusic.classList.add("fa-pause");
// };
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

ctrlMusic.addEventListener("click", function () {
  if (ctrlMusic.classList.contains("fa-pause")) {
    song.pause();
    ctrlMusic.classList.remove("fa-pause");
    ctrlMusic.classList.add("fa-play");
  } else {
    song.play();
    ctrlMusic.classList.remove("fa-play");
    ctrlMusic.classList.add("fa-pause");
  }
});

setInterval(() => {
  progress.value = song.currentTime;
}, 500);

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlMusic.classList.remove("fa-play");
  ctrlMusic.classList.add("fa-pause");
};

//SONG CLICKER

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");

//SONG QUERY SELECTOR
const empty_player = document.querySelector(".emptyPlayer");
const title_player = document.querySelector("#control div h2");
const artist_player = document.querySelector("#control div p");
const music_play = document.querySelector("#song");

let player_reset = () => {
  empty_player.innerHTML = `<i class="fa-solid fa-music"></i>`;
  title_player.textContent = `Song Title`;
  artist_player.textContent = `Artist`;
  music_play.innerHTML = `<source src="" type="" />`;
  song.load();
  song.currentTime = 0;
  song.pause();
  ctrlMusic.classList.remove("fa-pause");
  ctrlMusic.classList.add("fa-play");
};

let change_player = (songClicked, num) => {
  empty_player.innerHTML = songClicked[num].img;
  title_player.textContent = songClicked[num].songtitle;
  artist_player.textContent = songClicked[num].artistname;
  music_play.innerHTML = songClicked[num].music;

  song.load();
};

song1.addEventListener("click", () => {
  song.pause();
  song.currentTime = 0;
  ctrlMusic.classList.remove("fa-pause");
  ctrlMusic.classList.add("fa-play");
  change_player(currentSong, 0);
});
song2.addEventListener("click", () => {
  song.pause();
  song.currentTime = 0;
  ctrlMusic.classList.remove("fa-pause");
  ctrlMusic.classList.add("fa-play");
  change_player(currentSong, 1);
});

song3.addEventListener("click", () => {
  song.pause();
  song.currentTime = 0;
  ctrlMusic.classList.remove("fa-pause");
  ctrlMusic.classList.add("fa-play");
  change_player(currentSong, 2);
});
