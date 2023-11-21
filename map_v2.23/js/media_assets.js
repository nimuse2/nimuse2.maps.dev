/*all the sound related stuff */
var set3col = [
  "#8dd3c7",
  "#ffffb3",
  "#bebada",
  "#fb8072",
  "#80b1d3",
  "#fdb462",
  "#b3de69",
  "#fccde5",
  "#d9d9d9",
  "#bc80bd",
  "#ccebc5",
  "#ffed6f",
];
//dummy values - need to update
var totalCount22 = [
  { r: 20, x: 200, y: 100 }, //greater horse
  { r: 0, x: 300, y: 100 }, //lesser
  { r: 31, x: 400, y: 100 }, //common pip
  { r: 20, x: 500, y: 100 }, //soprano pip
  { r: 0, x: 600, y: 100 }, //barb -- daub
  { r: 27, x: 700, y: 100 }, //myotis
  { r: 20, x: 800, y: 100 }, //lieslers -- split in 2
  { r: 20, x: 900, y: 100 }, //serotine -- split in 2
  { r: 0, x: 1000, y: 100 }, //natt
  { r: 11, x: 1100, y: 100 }, //long eared
];
var totalCount23 = [
  { r: 52, x: 200, y: 100 }, //ghb
  { r: 2, x: 300, y: 100 }, //lhb
  { r: 446, x: 400, y: 100 }, //common pip
  { r: 239, x: 500, y: 100 }, //soprano pip
  { r: 180, x: 600, y: 100 }, //barb - daub
  { r: 207, x: 700, y: 100 }, //myotis - other
  { r: 15, x: 800, y: 100 }, //lieslers
  { r: 15, x: 900, y: 100 }, //serotine
  { r: 6, x: 1000, y: 100 }, //natt
  { r: 3, x: 1100, y: 100 }, //long eared
];

habitat_assets = [
  {
    key: "h_1",
    title: "Bushy Hedges",
    img: "img/habitat_bushy_hedge.png",
    desc: "Tall, bushy hedges are important for bats to help them to navigate through the landscape (they need to echolocate using structures in the landscape in order to 'see' where they are going'). Large healthy hedges also provide a brilliant habitat for insects and provide shelter from prevailing winds. As all UK bats are insectivorous, hedges will be helping provide large networks of linked up food sources. At Wash Farm hedges are cut no more than once every 3 years and trees are being left in the centre in order to increase shelter, berries and biomass across the farm.",
  },
  {
    key: "h_2",
    title: "Green Lanes",
    img: "img/habitat_green_lane.png",
    desc: "Networks of bridlepaths, old roads and footpaths often have tall hedges either side of them creating what is locally known as a 'green lane' these make wildlife super-highways with constant shelter for insects from wind and rain and darker corridors for bats to fly through. Green lanes used to be ore common in the south west and if hedges are cut too short, their benefits are greatly reduced for wildlife. At Wash Farm we have a number of green lanes and we are trying to manage them to provide year round habitat for our resident bats and other wildlife.   ",
  },
  {
    key: "h_3",
    title: "Exposed areas",
    img: "img/habitat_exposed.png",
    desc: "Locations near to the tops of hills, high up on valley sides and exposed to wind and rain are unlikely to provide beneficial habitat for bats. Without hedges to fly along and trees to navigate through, there is limited opportunities for bats and their insect prey to thrive. Exposed areas across Wash farm have been surveyed before planting and creating new habitats so that we can see potential improvements in biodiversity on the farm.",
  },
  {
    key: "h_4",
    title: "Wooded stream / Reservoirs",
    img: "img/habitat_wooded_stream.png",
    desc: "Waterways and ponds provide bats with the water to rehydrate - and they also attract midges and other flying insects, which congregate in their thousands and provide a ready feast for bats! Daubenton's bats are often seen skimming over the top of the water to feed on a variety of water insects and pipistrelles often feed over the water of a river or pond near their roost.",
  },
  {
    key: "h_5",
    title: "Agroforestry / Orchards",
    img: "img/habitat_agroforest.png",
    desc: "Mature orchards and agroforestry silvopasture systems provide great opportunities for bats to hunt as they can echolocate through the fruit and nut trees which, when mature, provide great potential for insects to live in and around. Bats can also gain access to incest rich grasslands that are often found in the understory and grazed by sheep or cattle which, when managed organically and at a low intensity can help encourage a huge amount of insect diversity. At Wash Farm we have a number of orchards, some of which are mature and some are recently established. ",
    habitatimg: "img/habitat_bad.png",
  },
];
species_assets = [
  {
    name: "Greater Horseshoe",
    // col: "rgb(43, 236, 59)",
    // col: "#1f77b4",
    col: set3col[0],
    sPath: "sound/2022-08-19-21-09-19.mp3",
    img: "/ghb.png",
    desc: "The greater horseshoe bat (Rhinolophus ferrumequinum) is a large insectivorous bat that can live for up to 30 years. It is the largest of the horseshoe bats in Europe (wingspan up to 40cm). The species is sedentary, typically travelling up to 30 km between the winter and summer roosts, with the longest recorded movement being 180 km. It's population has declined by over 90% during the previous century, but it is locally common at Wash Farm with South Devon being one of the last strongholds of this species",
    totals: 120,
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/greaterhorseshoe_11.02.13.pdf",
  },
  {
    name: "Lesser Horseshoe",
    // col: "rgb(43, 155, 236)",
    col: set3col[1],
    sPath: "sound/2022-08-19 23-51-04.mp3",
    img: "/lhb.png",
    desc: "The lesser horseshoe bat is one of Britain's smallest bats, weighing only 5 to 9 grams, with a wingspan up to 25cm. It has a complex 'nose leaf' which it uses for echolocation when hunting and navigating the landscape. It is more common than the greater horseshoe and found throughout south west England and wales, in and around Wash Farm though it is less common than greater horseshoes.",
    totals: 100,
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/lesserhorseshoe_11.02.13.pdf",
  },
  {
    name: "Common Pipestrelle",
    // col: "rgb(208, 43, 236)",
    col: set3col[2],
    sPath: "sound/2022-08-19-21-04-47.mp3",
    img: "/common_pip.png",
    desc: "The common pipistrelle (Pipistrellus pipistrellus) is a small microbat (wingspan up to 23.5cm) whose very large range extends across most of Europe, North Africa and South Asia. Despite a decline in population over the last few decades, It is one of the most common bat species in the British Isles found throughout the country. At Wash farm this is the most commonly heard bat , indicating a healthy population in the area.",
    totals: 328,
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/commonpipistrelle_11.02.13.pdf",
  },
  {
    name: "Soprano pipestrelle",
    // col: "rgb(236, 232, 43)",
    col: set3col[3],
    sPath: "sound/2022-08-19 23-51-04.mp3",
    img: "/sop_pip.png",
    desc: "Soprano pipistrelle is slightly smaller than the common pipistrelle (wingspan up to 23cm) and calls at a higher frequency. The 2 species were only separated out in the 1990s as they are so similar. soprano pipistrelles are found throughout the UK and is, along with the common pipistrelle, one of the commonest bats in the UK. At Wash Farm soprano pipistrelles are found commonly. ",
    totals: 99,
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/sopranopipistrelle_11.02.13.pdf",
  },
  {
    name: "Myotis Daubenton's",
    // col: "rgb(43, 236, 208)",
    col: set3col[4],
    sPath: "sound/2022-08-23 21-14-24.mp3",
    img: "/barb.png",
    desc: "Daunbenton's bats (myotis daubentonii) is a medium bat (wingspan up to 27.5cm) which is heavily associated with water, where it can be found hunting and picking prey directly off the surface of ponds and streams. Daubentons are found throughout the UK and are commonly found along water courses and water bodies. They are sensitive to increases in pollution of habitat change around water bodies. They are commonly found in Devon and enjoy feeding on the reservoirs and streams found at Wash Farm.",
    totals: 27,
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/daubentons_11.02.13.pdf",
  },
  {
    name: "Myotis Whiskered and Brandt's",
    // col: "rgb(189, 235, 52)",
    col: set3col[5],
    sPath: "sound/2022-08-24 00-35-10.mp3",
    img: "/myotis.png",
    desc: "These two species were only separated in 1970 and are almost impossible to tell apart by sound alone. Both are small (wingspan to 24cm) with brown, shaggy fur and found throughout England, Wales and Southern Scotland. Brandt's bats are thought to be slightly less common than Whiskered bats. These myotis species require wooded valleys, pastures and old trees in the landscape and Wash Farm provides a good supply of these habitats leading to these species being found quite regularly during surveys.",
    totals: 236,
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/brandts_11.02.13.pdf",
  },
  {
    name: "Noctule, Serotine or Leislers",
    // col: "rgb(3, 94, 252)",
    col: set3col[6],
    sPath: "sound/2022-08-19 23-51-04.mp3",
    img: "/leis.png",
    desc: "Leisler's bat (Nyctalus leisleri), used to be known as the ‘hairy armed bat’ due to its hairy appearance. It is similar to the noctule bat but smaller with a wingspan of up to 32cm. Leislers are found less commonly in Devon than many other species and it is hard to tell from our surveys if it is definitely at Wash Farm as its call is similar to that of Noctule and Serotine bats. .",
    totals: 6,
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/noctule_11.02.13.pdf",
  },
  {
    name: "Long-eared",
    // col: "rgb(252, 148, 3)",
    col: set3col[7],
    sPath: "sound/2022-08-24 00-35-10.mp3",
    img: "/serotin.png",
    desc: "The brown long-eared bat (Plecotus auritus) is a small Eurasian insectivorous bat (wingspan 28.5cm). It has distinctive long ears. It is extremely similar to the much rarer grey long-eared bat which was only validated as a distinct species in the 1960s. They are relatively slow flyers compared to other bat species. Brown long eared bats are commonly found throughout the UK. They are also sometimes known as the ‘whispering bat’ as their call is so quiet. This can lead to under recording using bat detectors, and although we have detected this species on the farm it is likely to be more abundant than it appears.",
    totals: 1,
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/brownlongeared_11.02.13.pdf",
  },
  {
    name: "Bechstein's",
    // col: "rgb(194, 3, 252)",
    col: set3col[8],
    sPath: "sound/2022-08-19 23-51-04.mp3",
    img: "/beicht.png",
    desc: "Until recently very little was known about the Bechstein's bat in the UK- in 2005 there were just six breeding populations of Bechstein's bat. It is largely known as a woodland bat that, like the long-eared bats, captures much of its prey by passive listening for insect noise. Being one of the rarest mammals, much remains to be learned about Bechstein's bat. The information contained in this factsheet may change as further roosts are discovered and research is undertaken.",
    totals: 18,
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/bechsteins_11.02.13.pdf",
  },
  {
    name: "Barbastelle",
    // col: "rgb(252, 3, 94)",
    col: set3col[9],
    sPath: "sound/2022-08-24 00-35-10.mp3",
    img: "/barb.png",
    desc: "The western barbastelle (Barbastella barbastellus) is a species often associated with woodland and valleys found occasionally or rarely throughout southern Britain. It has a short nose, small eyes and wide ears with a wingspan of up to 29cm. Barbastelles are considered a conservation priority in the UK and is one of the rarest bats in the country. Southern Devon is a stronghold for this species and the landscape around Wash is well suited to this species. They are found relatively often at Wash Farm",
    totals: 34,
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/barbastelle_11.02.13.pdf",
  },
];

var audioElements = [];
for (i = 0; i < species_assets.length; i++) {
  audioElements.push(document.createElement("audio"));
  audioElements[i].src = species_assets[i].sPath;
}

function playSound(_d, _i) {
  console.log(_d, _i % 10);
  audioElements[_i % 10].play();
}
