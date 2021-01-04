var subtitles = [
  {
    text: 'Not a doctor.',
    color: '#440000',
  },
  {
    text: 'Mostly about tech, videogames, and software development—but like everything else, politics might get in the way.',
    color: '#004400',
  },
  {
    text: "Not a best-selling author or award winner.",
    color: "#345678"
  },
  {
    text: "Another white guy, musing.",
    color: "#000044"
  },
];

function setSubtitle() {
  var index = Math.floor((Math.random() * subtitles.length))
  var subtitle = subtitles[index];
  var subtitleContainer = document.getElementById('subtitle-container');

  subtitleContainer.innerHTML = `<p class="header__subtitle__text" style="color: ${subtitle.color};">${subtitle.text}</p>`
}

setSubtitle();
