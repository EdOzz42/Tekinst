// this is a fucking nonsense script, key down sounds effects

const dumbAudios = [
  new Audio("sounds/keyd.wav"),
  new Audio("sounds/keya.wav"),
  new Audio("sounds/keys.wav"),
  new Audio("sounds/keyw.wav"),
  new Audio("sounds/keyx.wav"),
];

function App() {
  document.body.addEventListener("keydown", (e) => {
    let eventKey = e.key;

    KeyADown(eventKey);
    KeyDDown(eventKey);
    KeySDown(eventKey);
    KeyWDown(eventKey);
    KeyXDown(eventKey);

    //info
    console.log(`The fucking -->${eventKey}<-- key is down.`);
  });

  function KeyDDown(eventKey) {
    if (eventKey == "d" || eventKey == "D") {
      dumbAudios[0].play();
    }
  }
  function KeyADown(eventKey) {
    if (eventKey == "a" || eventKey == "A") {
      dumbAudios[1].play();
    }
  }
  function KeySDown(eventKey) {
    if (eventKey == "s" || eventKey == "S") {
      dumbAudios[2].play();
    }
  }
  function KeyWDown(eventKey) {
    if (eventKey == "w" || eventKey == "W") {
      dumbAudios[3].play();
    }
  }
  function KeyXDown(eventKey) {
    if (eventKey == "x" || eventKey == "X") {
      dumbAudios[4].play();
    }
  }
}

App();

// Other sounds

function playDANGERZONE() {
    let dangerZone = new Audio("sounds/danger_zone.mp3");
  dangerZone.volume = 0.1;
  dangerZone.play();
}

function playWarningAudio() {
    let warningAudio = new Audio("sounds/cuidado.mp3");
  warningAudio.volume = 0.1;
  warningAudio.play();
}
