//main geo location processing

/*
//LABEL LOCATIONS
var txtWashArr = projectionGeo([-3.7378617233992486, 50.47349061251626]);
var txtLandscoveArr = projectionGeo([-3.724649238636232, 50.48079468366879]);
var txtFurzdonArr = projectionGeo([-3.719349734624757, 50.46898784499817]);
var txtBaeraArr = projectionGeo([actualData[0].lat, actualData[0].long]);
var txtDartArr = projectionGeo([-3.759630557527089, 50.47286464147538]);
*/
//TEXT//
var locationLabelList = [
  projectionGeo([-3.7378617233992486, 50.47349061251626]),
  projectionGeo([-3.724649238636232, 50.48079468366879]),
  projectionGeo([-3.719349734624757, 50.46898784499817]),
  projectionGeo([-3.759630557527089, 50.47286464147538]),
];
var locationNameList = ["Wash Farm", "Landscove", "Furzdon", "River Dart"];

var smlLocationLabelList = [
  projectionGeo([-3.7340826458860477, 50.48125083257165]), //caddaford
  projectionGeo([-3.7379118447883855, 50.478985467531714]), //wooded
  projectionGeo([-3.7338732365712417, 50.47563481262637]), //torr
  projectionGeo([-3.72412074561538, 50.47180792190633]), //kiln
  projectionGeo([-3.7318, 50.4735]), //new hedge
  projectionGeo([-3.735728004789479, 50.47830012562318]), //Fence line
  projectionGeo([-3.726334511991382, 50.47900450221542]), //agroforestry
  projectionGeo([-3.7546645805163053, 50.478338205228596]), //wooded
];

var smlLocationNameList = [
  "Caddaford orchard",
  "Wooded area near stream and reservoir",
  "Torr Hill North",
  "Kiln close Orchard Hedge",
  "newly planted hedge",
  "Fence line adjacent to wooded stream",
  "Agroforestry near to wooded valley",
  "Wooded stream",
];

//BAT RESULT LOCATIONS

var locationList = [
  projectionGeo([-3.7340826458860477, 50.48125083257165]),
  projectionGeo([-3.7379118447883855, 50.478985467531714]),
  projectionGeo([-3.7338732365712417, 50.47563481262637]),
  [100, 100],
  projectionGeo([-3.72412074561538, 50.47180792190633]),
  projectionGeo([-3.7318, 50.4735]),
  projectionGeo([-3.735728004789479, 50.47830012562318]),
  projectionGeo([-3.726334511991382, 50.47900450221542]),
  projectionGeo([-3.7546645805163053, 50.478338205228596]),
  [100, 100],
];
