document.addEventListener('DOMContentLoaded', () => {
  const songInfoElement = document.getElementById('songInfo');
  const gridsongpicElement = document.querySelector('.gridsongpic img');
  const progressBar = document.getElementById("myProgressbar");
  let isSeeking = false;
  const songs = []; // Initialize an empty array for storing the fetched songs

  // Function to update the song details in container2
  function updateSongInfo(song) {
    const formattedSongInfo = `Name: ${song.name}\nTime: ${song.time}\nTheme: ${song.theme}\nRelease Date: ${song.releasedate}\nMale Singer: ${song.malesinger}\nFemale Singer: ${song.femalesinger}`;
    songInfoElement.textContent = formattedSongInfo;
    gridsongpicElement.src = song.image;
  }

  // Function to fetch data from the server and update the songs array
  async function fetchSongs() {
    try {
      const response = await fetch('api/:theme'); // Replace '/songinfs' with the correct API endpoint URL
      // const response = await fetch('api/:theme'); // Replace '/songinfs' with the correct API endpoint URL
      const data = await response.json();
      songs.push(...data); // Add the fetched data to the songs array

      // Add event listeners to the play buttons after data is fetched
      songs.forEach(song => {
        const playButton = document.getElementById(`${song.id}.splay`);
        playButton.addEventListener('click', () => {
          updateSongInfo(song);
          playSong(song);

          // Optional: Scroll to the top of the container2 when a play button is clicked.
          songInfoElement.scrollTop = 0;
        });
      });

      // Load the first song on page load after data is fetched
      loadSong();
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  }

  // Function to play the selected song
  function playSong(song) {
    audio.src = song.audioUrl;
    audio.play();
  }

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
  fetchSongs();
});
