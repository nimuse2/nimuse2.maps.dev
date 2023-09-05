//actual data taken from 'appendix bat survey'
//count:
//GHB
//LHB
//Common Pip
//soprano pip
//barbastelle
//Myotis
//Leisters
//Noctule
//Serotine

//NOTES - different time - different results! Should be consistent
// put in lat/long data
// possible sound data?
// 50.47339, -3.74031;
// 50.47427, -3.73938;
// 50.47381, -3.73829;
// 50.47471, -3.73747;
// 50.47372, -3.73524;

// 50.47304, -3.73646

// 50.47342, -3.73752

// {
//   id: "w1", //central circle
//   name: "Wash main site",
//   lat: 50.47386344387747,
//   long: -3.7370361424586305,
// },
const washData = [
  {
    id: "w1", //central circle
    name: "Wash main site",
    lat: 50.47339,
    long: -3.74031, //
  },
  {
    id: "w2", //central circle
    name: "Wash main site",
    lat: 50.47427,
    long: -3.73938, //
  },
  {
    id: "w3", //central circle
    name: "Wash main site",
    lat: 50.47381,
    long: -3.73829, //
  },
  {
    id: "w4", //central circle
    name: "Wash main site",
    lat: 50.47471,
    long: -3.73747, //
  },
  {
    id: "w5", //central circle
    name: "Wash main site",
    lat: 50.47372,
    long: -3.73524, //50.47372, -3.73524
  },
  {
    id: "w6", //central circle
    name: "Wash main site",
    lat: 50.47304,
    long: -3.73646, //50.47304, -3.73646
  },
  {
    id: "w7", //central circle
    name: "Wash main site",
    lat: 50.47342,
    long: -3.73752, //50.47342, -3.73752
  },
];

const actualData = [
  {
    id: "1", //use for drawing lookup!!
    habitat: "traditional orchard",
    user: "Anna",
    location: "Caddaford orch",
    lat: 50.481087079471436,
    long: -3.73428956070955,
    date: "03/08/22",
    days: 1, // divide for average
    results: [
      {
        name: "GHB",
        count: 0, //divide by days
      },
      {
        name: "LHB",
        count: 0,
      },
      {
        name: "Common Pipestrelle",
        count: 3,
      },
      {
        name: "Soprano Pipestrelle",
        count: 5,
      },
      {
        name: "Barbastelle",
        count: 0,
      },
      {
        name: "Myotis",
        count: 0,
      },
      {
        name: "Leislers",
        count: 0,
      },
      {
        name: "Noctule",
        count: 1,
      },
      {
        name: "Noctule or Leislers",
        count: 0,
      },
      {
        name: "Long eared",
        count: 0,
      },
    ],
  },
  {
    id: "2", //use for drawing lookup!!
    habitat: "wooded area near stream and reservoir ",
    user: "Joe Atkins",
    location: "",
    lat: 50.47910034836887,
    long: -3.7376798726457308,
    date: "08/08/22-14/08/22",
    days: 7, // divide for average
    results: [
      {
        name: "GHB",
        count: 9,
      },
      {
        name: "LHB",
        count: 0,
      },
      {
        name: "Common Pipestrelle",
        count: 19,
      },
      {
        name: "Soprano Pipestrelle",
        count: 5,
      },
      {
        name: "Barbastelle",
        count: 2,
      },
      {
        name: "Myotis",
        count: 3,
      },
      {
        name: "Leislers",
        count: 0,
      },
      {
        name: "Noctule",
        count: 5,
      },
      {
        name: "Serotine",
        count: 0,
      },
      {
        name: "Noctule or Leislers",
        count: 0,
      },
      {
        name: "Long eared",
        count: 0,
      },
    ],
  },
  {
    id: "3", //use for drawing lookup!!
    habitat: "open field",
    user: "Ben Avery ",
    location: "Torr Hill North",
    lat: 50.47593232947067,
    long: -3.734804544801122,
    date: "15/08/22-16/08/22",
    days: 2,
    results: [
      {
        name: "GHB",
        count: 0,
      },
      {
        name: "LHB",
        count: 0,
      },
      {
        name: "Common Pipestrelle",
        count: 4,
      },
      {
        name: "Soprano Pipestrelle",
        count: 2,
      },
      {
        name: "Barbastelle",
        count: 0,
      },
      {
        name: "Myotis",
        count: 1,
      },
      {
        name: "Leislers",
        count: 0,
      },
      {
        name: "Noctule",
        count: 1,
      },
      {
        name: "Serotine",
        count: 0,
      },
      {
        name: "Noctule or Leislers",
        count: 3,
      },
      {
        name: "Long eared",
        count: 7,
      },
    ],
  },
  {
    id: "4", //use for drawing lookup!!
    habitat: "garden",
    user: "Ben Avery ",
    location: "Garden",
    lat: 50.47254559171324,
    long: -3.719355022053973,
    date: "17/08/22-18/08/22",
    days: 2,
    results: [
      {
        name: "GHB",
        count: 0,
      },
      {
        name: "LHB",
        count: 0,
      },
      {
        name: "Common Pipestrelle",
        count: 22,
      },
      {
        name: "Soprano Pipestrelle",
        count: 14,
      },
      {
        name: "Barbastelle",
        count: 0,
      },
      {
        name: "Myotis",
        count: 1,
      },
      {
        name: "Leislers",
        count: 3,
      },
      {
        name: "Noctule",
        count: 0,
      },
      {
        name: "Serotine",
        count: 0,
      },
      {
        name: "Noctule or Leislers",
        count: 0,
      },
      {
        name: "Long eared",
        count: 0,
      },
    ],
  },
  {
    id: "5", //use for drawing lookup!!
    habitat: "orchard hedge",
    user: "Anna David ",
    location: "Kiln close",
    lat: 50.47227245712819,
    long: -3.723732386832331,
    date: "19/08/22-20/08/22",
    days: 2,
    results: [
      {
        name: "GHB",
        count: 16,
      },
      {
        name: "LHB",
        count: 0,
      },
      {
        name: "Common Pipestrelle",
        count: 1,
      },
      {
        name: "Soprano Pipestrelle",
        count: 1,
      },
      {
        name: "Barbastelle",
        count: 1,
      },
      {
        name: "Myotis",
        count: 0,
      },
      {
        name: "Leislers",
        count: 0,
      },
      {
        name: "Noctule",
        count: 0,
      },
      {
        name: "Serotine",
        count: 0,
      },
      {
        name: "Noctule or Leislers",
        count: 0,
      },
      {
        name: "Long eared",
        count: 0,
      },
    ],
  },
  {
    id: "6", //use for drawing lookup!!
    habitat: "newly planted hedge",
    user: "Nick Walters ",
    location: "",
    lat: 50.47415705364546,
    long: -3.731027994796263,
    date: "21/08/22-24/08/22",
    days: 3,
    results: [
      {
        name: "GHB",
        count: 5,
      },
      {
        name: "LHB",
        count: 0,
      },
      {
        name: "Common Pipestrelle",
        count: 11,
      },
      {
        name: "Soprano Pipestrelle",
        count: 5,
      },
      {
        name: "Barbastelle",
        count: 0,
      },
      {
        name: "Myotis",
        count: 1,
      },
      {
        name: "Leislers",
        count: 0,
      },
      {
        name: "Noctule",
        count: 0,
      },
      {
        name: "Serotine",
        count: 0,
      },
      {
        name: "Noctule or Leislers",
        count: 0,
      },
      {
        name: "Long eared",
        count: 3,
      },
    ],
  },
  {
    id: "7", //use for drawing lookup!!
    habitat: "fence line adjacent to wooded stream",
    user: "Donna Vince ",
    location: "",
    lat: 50.47803526225933,
    long: -3.7362207510529433,
    date: "25/08/22-30/08/22",
    days: 4,
    results: [
      {
        name: "GHB",
        count: 7,
      },
      {
        name: "LHB",
        count: 0,
      },
      {
        name: "Common Pipestrelle",
        count: 4,
      },
      {
        name: "Soprano Pipestrelle",
        count: 0,
      },
      {
        name: "Barbastelle",
        count: 0,
      },
      {
        name: "Myotis",
        count: 1,
      },
      {
        name: "Leislers",
        count: 0,
      },
      {
        name: "Noctule",
        count: 1,
      },
      {
        name: "Serotine",
        count: 0,
      },
      {
        name: "Noctule or Leislers",
        count: 3,
      },
      {
        name: "Long eared",
        count: 3,
      },
    ],
  },
  {
    id: "8", //use for drawing lookup!!
    habitat: "agroforestry near to wooded valley",
    user: "Jerome Godby",
    location: "",
    lat: 50.47907303876843,
    long: -3.7263931379721185,
    date: "31/08/22-02/09/22",
    days: 3,
    results: [
      {
        name: "GHB",
        count: 9,
      },
      {
        name: "LHB",
        count: 0,
      },
      {
        name: "Common Pipestrelle",
        count: 5,
      },
      {
        name: "Soprano Pipestrelle",
        count: 3,
      },
      {
        name: "Barbastelle",
        count: 3,
      },
      {
        name: "Myotis",
        count: 0,
      },
      {
        name: "Leislers",
        count: 0,
      },
      {
        name: "Noctule",
        count: 2,
      },
      {
        name: "Serotine",
        count: 0,
      },
      {
        name: "Noctule or Leislers",
        count: 0,
      },
      {
        name: "Long eared",
        count: 1,
      },
    ],
  },
  {
    id: "9", //use for drawing lookup!!
    habitat: "wooded stream",
    user: "Jackie Slack",
    location: "",
    lat: 50.47866339286831,
    long: -3.7539447868712013,
    date: "05/09/22-09/09/22",
    days: 4,
    results: [
      {
        name: "GHB",
        count: 5,
      },
      {
        name: "LHB",
        count: 0,
      },
      {
        name: "Common Pipestrelle",
        count: 1,
      },
      {
        name: "Soprano Pipestrelle",
        count: 0,
      },
      {
        name: "Barbastelle",
        count: 0,
      },
      {
        name: "Myotis",
        count: 84,
      },
      {
        name: "Leislers",
        count: 0,
      },
      {
        name: "Noctule",
        count: 0,
      },
      {
        name: "Serotine",
        count: 0,
      },
      {
        name: "Noctule or Leislers",
        count: 0,
      },
      {
        name: "Long eared",
        count: 0,
      },
    ],
  },
  {
    id: "10", //use for drawing lookup!!
    habitat: "green lane",
    user: "Tressa King Jacqueline Gibbard",
    location: "",
    lat: 0, //?
    long: 0,
    date: "12/09/22-26/09/22",
    days: 7,
    results: [
      {
        name: "GHB",
        count: 9,
      },
      {
        name: "LHB",
        count: 0,
      },
      {
        name: "Common Pipestrelle",
        count: 97,
      },
      {
        name: "Soprano Pipestrelle",
        count: 18,
      },
      {
        name: "Barbastelle",
        count: 5,
      },
      {
        name: "Myotis",
        count: 27,
      },
      {
        name: "Leislers",
        count: 0,
      },
      {
        name: "Noctule",
        count: 4,
      },
      {
        name: "Serotine",
        count: 0,
      },
      {
        name: "Noctule or Leislers",
        count: 0,
      },
      {
        name: "Long eared",
        count: 0,
      },
    ],
  },
];
