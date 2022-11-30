const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.querySelector("#title");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const artist = document.querySelector("#artist");
let isPlaying = false;

// for play
const pauseMusic = () => {
  isPlaying = false;
  // music.src = "./music/music-1.mp3";
  play.classList.replace("fa-pause", "fa-play");
  music.pause();
  img.classList.remove("anime");
};

// for pause
const playMusic = () => {
  isPlaying = true;
  // music.src = "./music/music-1.mp3";
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

play.addEventListener("click", (e) => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

const songs = [
  {
    name: "music-1",
    title: "Raabata",
    artist: "Arjit Singh",
  },
  {
    name: "music-2",
    title: "Phir Kabhi",
    artist: "Arjit Singh",
  },
  {
    name: "music-3",
    title: "You and I",
    artist: "One Direction",
  },
];

// changing music
const loadSong = (song) => {
  title.textContent = song.title;
  artist.textContent = song.artist;
  music.src = `./music/${song.name}.mp3`;
  img.src = `./images/${song.name}.jpg`;
  console.log(music.src);
  console.log(music.src);
};

let songsIndex = 0;

const nextSong = () => {
  if (songsIndex < songs.length - 1) {
    songsIndex += 1;
    console.log(songsIndex);
    loadSong(songs[songsIndex]);
  } else {
    songsIndex = 0;
    loadSong(songs[songsIndex]);
  }
  if (isPlaying) playMusic();
};
const prevSong = () => {
  if (songsIndex > 0) {
    songsIndex -= 1;
    loadSong(songs[songsIndex]);
  } else {
    songsIndex = songs.length - 1;
    loadSong(songs[songsIndex]);
  }
  if (isPlaying) playMusic();
};
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
