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
//REFACTOR// MAKE ALL INTO JSON OBJECTS...
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
  projectionGeo([-3.7326434573742575, 50.47432265022095]), //old Mill Leat
  projectionGeo([-3.7442842446841733, 50.481611072606725]), //woodland Higher Baera
  projectionGeo([-3.7508288348863807, 50.48197973108414]), //higher baera
  projectionGeo([-3.743490310822515, 50.47765122612977]), //gladridge woodland
  projectionGeo([-3.7397566758602854, 50.47608085030449]), //westpark meadow
  projectionGeo([-3.732203575120452, 50.473841267574]), //bumpston meadow
  projectionGeo([-3.7457648241278925, 50.47578042459323]), //emmets down
  projectionGeo([-3.7494126285028933, 50.476231062371895]), //borty woodland
  projectionGeo([-3.729263873869359, 50.47051583772543]), //bumpston woddland
  projectionGeo([-3.738319011788479, 50.470461208589406]), //badger
  projectionGeo([-3.728877635869762, 50.48428036804609]), //Landscove school
  projectionGeo([-3.7334695778477043, 50.48307886239407]), //Tidwell Farm
  projectionGeo([-3.718475041646257, 50.472280446720376]), //tuckers
  projectionGeo([-3.7501207319602416, 50.47319258815412]), //furzedown woodland
  projectionGeo([-3.733898731327885, 50.47715280811503]), //tor hill woodland
  projectionGeo([-3.730379673088195, 50.476442724143105]), //Barkingdon Pathfield
  projectionGeo([-3.7225047075676168, 50.48130726855542]), //live and let live
  projectionGeo([-3.7231055222317067, 50.47653489908187]), //barkingdon manor
];

var smlLocationNameList = [
  "Caddaford orchard",
  "Dipway agroforestry",
  "Torr Hill North",
  "Wooded stream at Tuckers",
  " ",
  "Fence line adjacent to wooded stream",
  "Wet woodland watersports field",
  "Caddaford Orchard",
  "Green Lane",
  "Old Mill Leat",
  "Woodland Higher Baera",
  "Higher Baera",
  "Gladridge Woodland",
  " ",
  "Bumpston Meadow",
  "Emmets Down",
  "Borty Woodland",
  "Bumpston Woodland",
  "Badger",
  "Landscove Primary School",
  "Tidwell Farm",
  "Tuckers",
  "Furzedown Woodland",
  "Tor Hill Woodland",
  "Barkingdon Pathfield",
  "Live & let live Inn",
  "Barkingdon Manor",
];

//SMALL TEXT
var locationLabelList = [
  projectionGeo([-3.7378617233992486, 50.47349061251626]),
  projectionGeo([-3.724649238636232, 50.48079468366879]),
  projectionGeo([-3.7209161109858444, 50.470722298344874]), //furzdon
  projectionGeo([-3.7582734022148703, 50.47363619147078]), //dart
  projectionGeo([-3.753553731499823, 50.47561852981898]),
  projectionGeo([-3.76042041458283, 50.477541984158385]),
  projectionGeo([-3.7570515597671825, 50.48288088419365]),
  projectionGeo([-3.7363341770060865, 50.472977497691524]),
  projectionGeo([-3.761922451575822, 50.47996572829102]),
];
var locationNameList = [
  "Wash Farm",
  "Landscove",
  "Furzdon",
  "River Dart",
  " ",
  "Caddaford - polytunnels",
  "Baddaform Farm",
  "Riverford Field Kitchen",
  "A384",
];

//BAT RESULT LOCATIONS
//2024

//NEEDS UPDATING WITH CORRECT DATA
////////////

var locationList2024 = [
  projectionGeo([-3.738533, 50.473075]), //0 - asparagus car park
  projectionGeo([-3.740048, 50.479623]), //1 - barton town
  projectionGeo([-3.734, 50.47468]), //2- bumpston Meadow - and big meadow?
  projectionGeo([-3.734618, 50.472397]), //3 - field kitchen
  projectionGeo([-3.7379, 50.47213]), //4 - guys field
  projectionGeo([-3.731493, 50.476848]), //5 - john smith
  projectionGeo([-3.75026, 50.48014]), //6 - polytunnel combined ******
  projectionGeo([-3.71986, 50.47237]), //7 - tuckers fields
  projectionGeo([-3.735705, 50.473618]), //8 - two reservoir
  projectionGeo([-3.73793, 50.48066]), //9 - glorias wood
  projectionGeo([-3.715851, 50.471544]), //10 - blank
];

var surveyLocList24 = [
  "Asparagus car park", //0
  "Barton Town", //1
  "big and bumpston fields?", //2
  "Field Kitchen", //ben avery garden//3
  "Guys Field", //4
  "John Smith", //5
  "Polytunnels combined?", //6
  "Tuckers Fields", //7
  "Two Reservoir", //8
  "Glorias Wood", //9
  "blank", //10
];
//2023
var locationList2023 = [
  projectionGeo([-3.732378, 50.474813]), //0
  projectionGeo([-3.728305, 50.477902]), //1
  projectionGeo([-3.731607, 50.47724]), //2-barkington
  projectionGeo([-3.724971, 50.472444]), //3 - tuckers bottom
  projectionGeo([-3.739406, 50.480884]), //4 - dipway
  projectionGeo([-3.740093, 50.474408]), //5 - yarbury reservoir
  projectionGeo([-3.741058, 50.479825]), //6 - glorias ford
  projectionGeo([-3.734062, 50.481188]), //7 - green lane
  projectionGeo([-3.737562, 50.483451]), //8 - broad Stannings footpath
  projectionGeo([-3.735895, 50.473338]), //9 - top hedge big field
  projectionGeo([-3.715851, 50.471544]), //10 - short hedges
];

var surveyLocList23 = [
  "Elderflower", //0
  "Watersports", //1
  "Barkington", //2
  "Tuckers bottom stream", //ben avery garden//3
  "New hedge dipway", //4
  "Yarbury reservoir", //5
  "Glorias ford", //6
  "Green lane", //7
  "Stannings footpath", //8
  "Top hedge Big field", //9
  "Short hedges", //10
];
//2022
var locationList = [
  projectionGeo([-3.7540518619059386, 50.47864407155754]), //0 - caddaford orchard
  projectionGeo([-3.7338732365712417, 50.47563481262637]), //1 - wooded stream?
  projectionGeo([-3.7379118447883855, 50.478985467531714]), //2 - open field
  [500, -100], //ben avery garden??//3
  projectionGeo([-3.72412074561538, 50.47180792190633]), //4 Kiln close ??
  projectionGeo([-3.723812384194569, 50.47150609296651]), //5 - newly planted hedge
  projectionGeo([-3.7318, 50.4735]), //6 - fence line wooded sytrem
  projectionGeo([-3.735711909351843, 50.47860048106709]), //7 -- agro
  projectionGeo([-3.7263714649880755, 50.47899909835456]), //8 -- wooded stream
  projectionGeo([-3.7340826458860477, 50.48125083257165]), //9 --green lane
  [500, -100], //10
];

var surveyLocList22 = [
  "Traditional Orchard", //0
  "Wooded stream", //1
  "Open field", //2
  "..", //ben avery garden//3
  "Kiln Close", //4
  "Newly planted hedge", //5
  "Fence line", //6
  "Agroforestry", //7
  "Wooded stream", //8
  "Green Lane", //9
  "..", //10
];
