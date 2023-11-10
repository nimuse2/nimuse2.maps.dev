/*
The master data file - a flat file of 9 locations x 9 species.
Depending on locations/species
*/

//DATA = DYNAMIC ARRAY
// LOCATIONS x SPECIES

function makeData(_geoData, _resultsList) {
  var _data = [];
  for (i = 0; i < _resultsList.length; i++) {
    var splitKey = keySplit(_resultsList[i].key);
    /*
    console.log("splitKey[0]: ", splitKey[0], "i: ", i);
    console.log(">>>> ", _geoData[10][1]);
    var item = {};
    */

    // console.log("MakeData(): geoData: ", _geoData[Number(splitKey[0])][1]);
    // console.log("makeData(): results:", _resultsList);

    var item = {
      key: _resultsList[i].key,
      lat: _geoData[Number(splitKey[0])][1],
      long: _geoData[Number(splitKey[0])][0],
      name: _resultsList[i].name,
      count: _resultsList[i].count, //divide by days
      radius: radiusScale(_resultsList[i].count),
    };

    _data.push(item);
  }
  return _data;
}

function updateData(_nxtresultsList, _year) {
  //update DATA object with new values
  // console.log("updateData()");
  // console.log(data);

  for (i = 0; i < data.length; i++) {
    // _geoData[]
    // console.log("data: ", data[i].count);
    // console.log("results::", _nxtresultsList[i].count);
    data[i].count = _nxtresultsList[i].count;

    if (_year == "2023") {
      var keySplit = data[i].key.split("_");
      // console.log("keySplit", keySplit[0]);
      data[i].lat = locationList2023[keySplit[0]][1];
      data[i].long = locationList2023[keySplit[0]][0];
    } else {
      var keySplit = data[i].key.split("_");
      // console.log("keySplit", keySplit[0]);
      data[i].lat = locationList[keySplit[0]][1];
      data[i].long = locationList[keySplit[0]][0];
    }
    data[i].radius = radiusScale(data[i].count);
  }

  // for (i = 0; i < data.length; i++) {
  //   var keySplit = data[i].key.split("_");
  //   console.log("keySplit", keySplit[0]);
  //   data[i].lat = locationList2023[keySplit[0]][0];
  //   data[i].long = locationList2023[keySplit[0]][1];
  // }
}
