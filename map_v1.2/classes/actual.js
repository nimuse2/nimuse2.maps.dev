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

const actualData = [
  {
    id: "1", //use for drawing lookup!!
    habitat: "traditional orchard",
    user: "Anna",
    location: "Caddaford orch",
    lat: 0,
    long: 0,
    date: "03/08/22",
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
    habitat:
      "wooded area near stream and reservoir (only small amount amount of water during survey)",
    user: "Joe Atkins",
    location: "",
    lat: 0,
    long: 0,
    date: "08/08/22-14/08/22",
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
    lat: 0,
    long: 0,
    date: "15/08/22-16/08/22",
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
    lat: 0,
    long: 0,
    date: "17/08/22-18/08/22",
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
    id: "4", //use for drawing lookup!!
    habitat: "garden",
    user: "Ben Avery ",
    location: "Garden",
    lat: 0,
    long: 0,
    date: "17/08/22-18/08/22",
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
    lat: 0,
    long: 0,
    date: "19/08/22-20/08/22",
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
    lat: 0,
    long: 0,
    date: "21/08/22-24/08/22",
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
    lat: 0,
    long: 0,
    date: "25/08/22-30/08/22",
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
    lat: 0,
    long: 0,
    date: "31/08/22-02/09/22",
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
    lat: 0,
    long: 0,
    date: "05/09/22-09/09/22",
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
    lat: 0,
    long: 0,
    date: "12/09/22-26/09/22",
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

console.log(actualData);
