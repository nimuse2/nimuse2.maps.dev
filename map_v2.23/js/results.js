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

//9 categories - last one - Leisters, Seerotine, Noctule

var resultsList = [
  {
    key: "0_0",
    name: "GHB",
    count: 0, //divide by days
  },
  {
    key: "0_1",
    name: "LHB",
    count: 0,
  },
  {
    key: "0_2",
    name: "Common Pipestrelle",
    count: 3,
  },
  {
    key: "0_3",
    name: "Soprano Pipestrelle",
    count: 5,
  },
  {
    key: "0_4",
    name: "Barbastelle",
    count: 0,
  },
  {
    key: "0_5",
    name: "Myotis",
    count: 0,
  },
  {
    key: "0_6",
    name: "Leislers",
    count: 0,
  },
  {
    key: "0_7",
    name: "Noctule",
    count: 1,
  },
  {
    key: "0_8",
    name: "Noctule or Leislers",
    count: 0,
  },
  {
    key: "0_9",
    name: "Long eared",
    count: 0,
  },
  {
    key: "1_0",
    name: "GHB",
    count: 9,
  },
  {
    key: "1_1",
    name: "LHB",
    count: 0,
  },
  {
    key: "1_2",
    name: "Common Pipestrelle",
    count: 19,
  },
  {
    key: "1_3",
    name: "Soprano Pipestrelle",
    count: 5,
  },
  {
    key: "1_4",
    name: "Barbastelle",
    count: 2,
  },
  {
    key: "1_5",
    name: "Myotis",
    count: 3,
  },
  {
    key: "1_6",
    name: "Leislers",
    count: 0,
  },
  {
    key: "1_7",
    name: "Noctule",
    count: 5,
  },
  {
    key: "1_8",
    name: "Noctule or Leislers",
    count: 0,
  },
  {
    key: "1_9",
    name: "Long eared",
    count: 0,
  },
  {
    key: "2_0",
    name: "GHB",
    count: 0,
  },
  {
    key: "2_1",
    name: "LHB",
    count: 0,
  },
  {
    key: "2_2",
    name: "Common Pipestrelle",
    count: 4,
  },
  {
    key: "2_3",
    name: "Soprano Pipestrelle",
    count: 2,
  },
  {
    key: "2_4",
    name: "Barbastelle",
    count: 0,
  },
  {
    key: "2_5",
    name: "Myotis",
    count: 1,
  },
  {
    key: "2_6",
    name: "Leislers",
    count: 0,
  },
  {
    key: "2_7",
    name: "Noctule",
    count: 1,
  },
  {
    key: "2_8",
    name: "Noctule or Leislers",
    count: 3,
  },
  {
    key: "2_9",
    name: "Long eared",
    count: 7,
  },
  {
    key: "3_0",
    name: "GHB",
    count: 0,
  },
  {
    key: "3_1",
    name: "LHB",
    count: 0,
  },
  {
    key: "3_2",
    name: "Common Pipestrelle",
    count: 22,
  },
  {
    key: "3_3",
    name: "Soprano Pipestrelle",
    count: 14,
  },
  {
    key: "3_4",
    name: "Barbastelle",
    count: 0,
  },
  {
    key: "3_5",
    name: "Myotis",
    count: 1,
  },
  {
    key: "3_6",
    name: "Leislers",
    count: 3,
  },
  {
    key: "3_7",
    name: "Noctule",
    count: 0,
  },
  {
    key: "3_8",
    name: "Noctule or Leislers",
    count: 0,
  },
  {
    key: "3_9",
    name: "Long eared",
    count: 0,
  },
  {
    key: "4_0",
    name: "GHB",
    count: 16,
  },
  {
    key: "4_1",
    name: "LHB",
    count: 0,
  },
  {
    key: "4_2",
    name: "Common Pipestrelle",
    count: 1,
  },
  {
    key: "4_3",
    name: "Soprano Pipestrelle",
    count: 1,
  },
  {
    key: "4_4",
    name: "Barbastelle",
    count: 1,
  },
  {
    key: "4_5",
    name: "Myotis",
    count: 0,
  },
  {
    key: "4_6",
    name: "Leislers",
    count: 0,
  },
  {
    key: "4_7",
    name: "Noctule",
    count: 0,
  },
  {
    key: "4_8",
    name: "Noctule or Leislers",
    count: 0,
  },
  {
    key: "4_9",
    name: "Long eared",
    count: 0,
  },
  {
    key: "5_0",
    name: "GHB",
    count: 5,
  },
  {
    key: "5_1",
    name: "LHB",
    count: 0,
  },
  {
    key: "5_2",
    name: "Common Pipestrelle",
    count: 11,
  },
  {
    key: "5_3",
    name: "Soprano Pipestrelle",
    count: 5,
  },
  {
    key: "5_4",
    name: "Barbastelle",
    count: 0,
  },
  {
    key: "5_5",
    name: "Myotis",
    count: 1,
  },
  {
    key: "5_6",
    name: "Leislers",
    count: 0,
  },
  {
    key: "5_7",
    name: "Noctule",
    count: 0,
  },
  {
    key: "5_8",
    name: "Noctule or Leislers",
    count: 0,
  },
  {
    key: "5_9",
    name: "Long eared",
    count: 3,
  },
  {
    key: "6_0",
    name: "GHB",
    count: 7,
  },
  {
    key: "6_1",
    name: "LHB",
    count: 0,
  },
  {
    key: "6_2",
    name: "Common Pipestrelle",
    count: 4,
  },
  {
    key: "6_3",
    name: "Soprano Pipestrelle",
    count: 0,
  },
  {
    key: "6_4",
    name: "Barbastelle",
    count: 0,
  },
  {
    key: "6_5",
    name: "Myotis",
    count: 1,
  },
  {
    key: "6_6",
    name: "Leislers",
    count: 0,
  },
  {
    key: "6_7",
    name: "Noctule",
    count: 1,
  },
  {
    key: "6_8",
    name: "Noctule or Leislers",
    count: 3,
  },
  {
    key: "6_9",
    name: "Long eared",
    count: 3,
  },
  {
    key: "7_0",
    name: "GHB",
    count: 9,
  },
  {
    key: "7_1",
    name: "LHB",
    count: 0,
  },
  {
    key: "7_2",
    name: "Common Pipestrelle",
    count: 5,
  },
  {
    key: "7_3",
    name: "Soprano Pipestrelle",
    count: 3,
  },
  {
    key: "7_4",
    name: "Barbastelle",
    count: 3,
  },
  {
    key: "7_5",
    name: "Myotis",
    count: 0,
  },
  {
    key: "7_6",
    name: "Leislers",
    count: 0,
  },
  {
    key: "7_7",
    name: "Noctule",
    count: 2,
  },

  {
    key: "7_8",
    name: "Noctule or Leislers",
    count: 0,
  },
  {
    key: "7_9",
    name: "Long eared",
    count: 1,
  },
  {
    key: "8_0",
    name: "GHB",
    count: 5,
  },
  {
    key: "8_1",
    name: "LHB",
    count: 0,
  },
  {
    key: "8_2",
    name: "Common Pipestrelle",
    count: 1,
  },
  {
    key: "8_3",
    name: "Soprano Pipestrelle",
    count: 0,
  },
  {
    key: "8_4",
    name: "Barbastelle",
    count: 0,
  },
  {
    key: "8_5",
    name: "Myotis",
    count: 84,
  },
  {
    key: "8_6",
    name: "Leislers",
    count: 0,
  },
  {
    key: "8_7",
    name: "Noctule",
    count: 0,
  },
  {
    key: "8_8",
    name: "Noctule or Leislers",
    count: 0,
  },
  {
    key: "8_9",
    name: "Long eared",
    count: 0,
  },
  {
    key: "9_0",
    name: "GHB",
    count: 9,
  },
  {
    key: "9_1",
    name: "LHB",
    count: 0,
  },
  {
    key: "9_2",
    name: "Common Pipestrelle",
    count: 97,
  },
  {
    key: "9_3",
    name: "Soprano Pipestrelle",
    count: 18,
  },
  {
    key: "9_4",
    name: "Barbastelle",
    count: 5,
  },
  {
    key: "9_5",
    name: "Myotis",
    count: 27,
  },
  {
    key: "9_6",
    name: "Leislers",
    count: 0,
  },
  {
    key: "9_7",
    name: "Noctule",
    count: 4,
  },
  {
    key: "9_8",
    name: "Noctule or Leislers",
    count: 0,
  },
  {
    key: "9_9",
    name: "Long eared",
    count: 0,
  },
];

//TEST
