/*all the sound related stuff */
soundProps = [
  {
    name: "Greater Horseshoe",
    col: "rgba(43, 236, 59, 0.4)",
    sPath: "sound/2022-08-19-21-09-19.mp3",
  },
  {
    name: "Lesser Horseshoe",
    col: "rgba(43, 155, 236, 0.4)",
    sPath: "sound/2022-08-19 23-51-04.mp3",
  },
  {
    name: "Common Pipestrelle",
    col: "rgba(208, 43, 236, 0.4)",
    sPath: "sound/2022-08-19-21-04-47.mp3",
  },
  {
    name: "Soprano pipestrelle",
    col: "rgba(236, 232, 43, 0.4)",
    sPath: "sound/2022-08-19 23-51-04.mp3",
  },
  {
    name: "Barbastelle",
    col: "rgba(43, 236, 208, 0.4)",
    sPath: "sound/2022-08-23 21-14-24.mp3",
  },
  {
    name: "Myotis",
    col: "rgba(189, 235, 52,0.4)",
    sPath: "sound/2022-08-24 00-35-10.mp3",
  },
  {
    name: "Leislers",
    col: "rgba(3, 94, 252,0.4)",
    sPath: "sound/2022-08-19 23-51-04.mp3",
  },
  {
    name: "Serotine",
    col: "rgba(252, 148, 3,0.4)",
    sPath: "sound/2022-08-24 00-35-10.mp3",
  },
  {
    name: "Noctule or Leislers",
    col: "rgba(194, 3, 252,0.4)",
    sPath: "sound/2022-08-19 23-51-04.mp3",
  },
  {
    name: "Long eared",
    col: "rgba(252, 3, 94,0.4)",
    sPath: "sound/2022-08-24 00-35-10.mp3",
  },
];

var audioElements = [];
for (i = 0; i < soundProps.length; i++) {
  audioElements.push(document.createElement("audio"));
  audioElements[i].src = soundProps[i].sPath;
}

function playSound(_d, _i) {
  console.log(_d, _i % 10);
  audioElements[_i % 10].play();
}
