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

  for (i = 0; i < data.length; i++) {
    data[i].count = _nxtresultsList[i].count;

    if (_year == "2023") {
      //IF 2023//////////////////////////////////////
      var keySplit = data[i].key.split("_");
      // console.log("keySplit", keySplit[0]);
      data[i].lat = locationList2023[keySplit[0]][1];
      data[i].long = locationList2023[keySplit[0]][0];
    } else if (_year == "2024") {
      //IF 2023//////////////////////////////////////
      var keySplit = data[i].key.split("_");
      // console.log("keySplit", keySplit[0]);
      data[i].lat = locationList2024[keySplit[0]][1];
      data[i].long = locationList2024[keySplit[0]][0];
    } else {
      var keySplit = data[i].key.split("_");
      // console.log("keySplit", keySplit[0]);
      data[i].lat = locationList[keySplit[0]][1];
      data[i].long = locationList[keySplit[0]][0];
    }

    data[i].radius = radiusScale(data[i].count);
    // onsole.log(">>>>>", data[i].radius);
  }
}
