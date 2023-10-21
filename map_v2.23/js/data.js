/*
The master data file - a flat file of 9 locations x 9 species.
Depending on locations/species
*/

//DATA = DYNAMIC ARRAY
// LOCATIONS x SPECIES

function makeData(_geoData) {
  var _data = [];
  for (i = 0; i < resultsList.length; i++) {
    var splitKey = keySplit(resultsList[i].key);

    var item = {
      key: resultsList[i].key,
      lat: _geoData[Number(splitKey[0])][1],
      long: _geoData[Number(splitKey[0])][0],
      name: resultsList[i].name,
      count: resultsList[i].count, //divide by days
    };
    _data.push(item);
  }
  return _data;
}
