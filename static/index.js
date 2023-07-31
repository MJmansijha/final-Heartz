// const songs = require('./songs');
const songs = [
  { id: 1, name: "APNA BANALE", image:"img/logo2.png", time:"05:00", theme:"bollywood", releasedate:"", malesinger:"", felmalesinger:"", audioUrl: "APNABANALE.mp3"},
  { id: 2, name: "Nazm Nazm", image: "img/logo1.png", time:"05:00", theme:"bollywood", releasedate:"", malesinger:"", felmalesinger:"", audioUrl: "baby.mp3"},
  { id: 3, name: "Phir Bhi Tumko Chaahunga", image: "", time:"05:00", theme:"bollywood", releasedate:"", malesinger:"", felmalesinger:"", audioUrl: "APNABANALE.mp3"},
  { id: 4, name: "Tu Hai To Mujhe Fir Aur Kya Chahiye", image: "", time:"05:00", theme:"bollywood", releasedate:"", malesinger:"", felmalesinger:"", audioUrl: "APNABANALE.mp3"},
  { id: 5, name: "Tum Hi Ho", image: "", time:"05:00", theme:"bollywood", releasedate:"", malesinger:"", felmalesinger:"", audioUrl: "APNABANALE.mp3"},
];

document.addEventListener('DOMContentLoaded', () => {
  const songInfoElement = document.getElementById('songInfo');
  const gridsongpicElement = document.querySelector('.gridsongpic img');
  const progressBar = document.getElementById("myProgressbar");
  let isSeeking = false;

  // Function to update the song details in container2
  function updateSongInfo(song) {
    const formattedSongInfo = `Name: ${song.name}\nTime: ${song.time}\nTheme: ${song.theme}\nRelease Date: ${song.releasedate}\nMale Singer: ${song.malesinger}\nFemale Singer: ${song.femalesinger}`;
    songInfoElement.textContent = formattedSongInfo;
    gridsongpicElement.src = song.image;
  }

  // Add an event listener to each play button
  songs.forEach(song => {
    const playButton = document.getElementById(`${song.id}.splay`);
    playButton.addEventListener('click', () => {
      updateSongInfo(song);

      // Optional: Scroll to the top of the container2 when a play button is clicked.
      songInfoElement.scrollTop = 0;

      // Here you can also add code to play the selected song.
      // For example, you could trigger an audio player to play the song.
    });
  });

  const backwardBtn = document.getElementById("masterBack");
  const playBtn = document.getElementById("masterPlay");
  const forwardBtn = document.getElementById("masterFront");
  const audio = new Audio();
  let currentSongIndex = 0;

  function loadSong() {
    const currentSong = songs[currentSongIndex];
    audio.src = currentSong.audioUrl;
    updateSongInfo(currentSong);
  }

  function playSong() {
    audio.play();
    playBtn.classList.remove("playchange");
    playBtn.classList.add("pausechange");
  }

  function pauseSong() {
    audio.pause();
    playBtn.classList.remove("pausechange");
    playBtn.classList.add("playchange");
  }

  function togglePlayPause() {
    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }
  }

  function playPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    playSong();
  }

  function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    playSong();
  }

  backwardBtn.addEventListener("click", playPreviousSong);
  playBtn.addEventListener("click", togglePlayPause);
  forwardBtn.addEventListener("click", playNextSong);

  audio.addEventListener("ended", function () {
    pauseSong();
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    playSong();
  });

  // Update the progress bar position during audio playback
  audio.addEventListener("timeupdate", () => {
    updateProgressBar();
  });

  // Function to update the progress bar position
  function updateProgressBar() {
    if (!isSeeking && audio.duration > 0) {
      progressBar.value = (audio.currentTime / audio.duration) * 100;
    }
  }

  // Function to handle seeking when the user interacts with the progress bar
  function handleProgressBarSeek(e) {
    const seekPosition = (e.offsetX / progressBar.offsetWidth) * audio.duration;
    audio.currentTime = seekPosition;
    isSeeking = false;
    updateProgressBar();
  }

  progressBar.addEventListener("mousedown", () => {
    isSeeking = true;
  });

  progressBar.addEventListener("mouseup", (e) => {
    if (isSeeking) {
      handleProgressBarSeek(e);
    }
  });

  progressBar.addEventListener("mousemove", (e) => {
    if (isSeeking) {
      handleProgressBarSeek(e);
    }
  });

  // Load the first song on page load
  loadSong();
});
