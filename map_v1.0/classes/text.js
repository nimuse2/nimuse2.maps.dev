function makeKey() {
  var keystartX = 30;
  var keystartY = 60;
  var keySpace = 35;
  var keyDia = 30;

  fill(soundProps[0].col);
  circ1 = ellipse(keystartX, keystartY, keyDia, keyDia);
  circ1 = ellipse(keystartX + 15, keystartY + 5, keyDia - 15, keyDia - 15);

  fill("antiquewhite");
  text(soundProps[0].name, keystartX + keySpace, keystartY + 5);

  fill(soundProps[1].col);
  ellipse(keystartX, keystartY + keySpace, keyDia, keyDia);
  ellipse(keystartX + 15, keystartY + keySpace + 5, keyDia - 15, keyDia - 15);
  fill("antiquewhite");
  text(soundProps[1].name, keystartX + keySpace, keystartY + keySpace + 5);

  fill(soundProps[2].col);
  ellipse(keystartX, keystartY + keySpace * 2, keyDia, keyDia);
  ellipse(
    keystartX + 15,
    keystartY + keySpace * 2 + 5,
    keyDia - 15,
    keyDia - 15
  );

  fill("antiquewhite");
  text(soundProps[2].name, keystartX + keySpace, keystartY + keySpace * 2 + 5);

  fill(soundProps[3].col);
  ellipse(keystartX, keystartY + keySpace * 3, keyDia, keyDia);
  ellipse(
    keystartX + 15,
    keystartY + keySpace * 3 + 5,
    keyDia - 15,
    keyDia - 15
  );
  fill("antiquewhite");
  text(soundProps[3].name, keystartX + keySpace, keystartY + keySpace * 3 + 5);

  fill(soundProps[4].col);
  ellipse(keystartX, keystartY + keySpace * 4, keyDia, keyDia);
  ellipse(
    keystartX + 15,
    keystartY + keySpace * 4 + 5,
    keyDia - 15,
    keyDia - 15
  );
  fill("antiquewhite");
  text(soundProps[4].name, keystartX + keySpace, keystartY + keySpace * 4 + 5);
}

function makeSideNav() {
  let aboutTxt =
    "The size of the circles represents the number of each species recorded on the date specified at the different locations..<br/><br/>If you turn sound on you can hear sounds recorded from the Anabat recorder placed around site by co-owners in August 2022.<br/><br/>All data is from 'Wash Bat Survey Report 2022'<br/><br/>Any issues or feedback, please email me: nickdata2015@gmail.com ";

  sideNavTxt = createDiv(aboutTxt);
  sideNavTxt.addClass("sideNav");
  sideNavTxt.position(0, 240, "fixed");
}
function makeTopnav() {
  topnav = createDiv("Bat.sonic.map.v1.0");
  topnav.addClass("topnav");
  // info_btn = new Button(100, 200, img);
}
function makeHeading(c1, c2, c3, t) {
  fill(c3);
  circle(10, 10, 10);
  fill(t);
  text(
    "Transform to reduce all points keeping 'me' in center - scale and offset",
    25,
    15
  );
}
function makeIdTxt(_key, _x, _y, _xx, _yy, _result) {
  let tx = _xx - 0;
  let ty = _yy + 90;

  textSize(11);
  fill("antiquewhite");

  text("> " + soundProps[_key].name + " : " + _result, tx, ty);
}
function makeObjectText(_o, _t, _x1, _y1) {
  textSize(11);
  fill("antiquewhite");

  let ttx = _x1;
  let tty = _y1;
  text("> " + _o.name2, ttx, tty + 50);
  text("> " + _o.date, ttx, tty + 70);
}
function makeFarmTxt() {
  textSize(11);
  fill("antiquewhite");
  text("Wash Farm main site", windowWidth / 2 - 120, windowHeight / 2);
}
