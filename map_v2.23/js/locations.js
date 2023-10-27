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

var smlLocationLabelList = [
  projectionGeo([-3.7340826458860477, 50.48125083257165]), //caddaford
  projectionGeo([-3.7379118447883855, 50.478985467531714]), //wooded
  projectionGeo([-3.7338732365712417, 50.47563481262637]), //torr
  projectionGeo([-3.72412074561538, 50.47180792190633]), //kiln
  projectionGeo([-3.7318, 50.4735]), //new hedge
  projectionGeo([-3.735728004789479, 50.47830012562318]), //Fence line
  projectionGeo([-3.726334511991382, 50.47900450221542]), //agroforestry
  projectionGeo([-3.7546645805163053, 50.478338205228596]), //wooded
  projectionGeo([-3.7510219536654597, 50.47982918275399]), //green lane
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
  "Green Lane",
];

//SMALL TEXT
var locationLabelList = [
  projectionGeo([-3.7378617233992486, 50.47349061251626]),
  projectionGeo([-3.724649238636232, 50.48079468366879]),
  projectionGeo([-3.719349734624757, 50.46898784499817]),
  projectionGeo([-3.759630557527089, 50.47286464147538]),
  projectionGeo([-3.753553731499823, 50.47561852981898]),
  projectionGeo([-3.76042041458283, 50.477541984158385]),
  projectionGeo([-3.7570515597671825, 50.48288088419365]),
];
var locationNameList = [
  "Wash Farm",
  "Landscove",
  "Furzdon",
  "River Dart",
  "Caddaford - polytunnels",
  "Nursery - Pool Bridge",
  "Baddaform Farm",
];

//BAT RESULT LOCATIONS
//2022
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
  [100, 100],
];
//2023
var locationList2023 = [
  projectionGeo([-3.742057733891818, 50.4827018353337]),
  projectionGeo([-3.739386633017923, 50.480928479971176]),
  projectionGeo([-3.741049249145417, 50.479844662729136]),
  projectionGeo([-3.731406892821159, 50.476763260384708]),
  projectionGeo([-3.736174857449959, 50.472302304534956]),
  projectionGeo([-3.739150602688087, 50.474016084030531]),
  projectionGeo([-3.732463584432013, 50.474944529961355]),
  projectionGeo([-3.728290143581952, 50.4779182681145]),
  projectionGeo([-3.725005174347004, 50.472524394482726]),
  projectionGeo([-3.715951254642453, 50.471571962925353]),
  projectionGeo([-3.73411102241386, 50.48121244923594]),
];
