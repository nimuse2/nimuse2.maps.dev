/* species list and details */
/* generic */
//WRONG ONE!!
var speciesList = [
  {
    name: "Greater Horseshoe",
    col: "rgb(43, 236, 59)",
    sPath: "sound/2022-08-19-21-09-19.mp3",
    img: "/ghb.png",
    desc: "The greater horseshoe bat (Rhinolophus ferrumequinum) is an insectivorous bat of the genus Rhinolophus. Its distribution covers Europe, Northern Africa, Central Asia and Eastern Asia.[1] It is the largest of the horseshoe bats in Europe and is thus easily distinguished from other species. The species is sedentary, typically travelling up to 30 kilometres (19 mi) between the winter and summer roosts, with the longest recorded movement being 180 km (110 mi).",
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/greaterhorseshoe_11.02.13.pdf",
  },
  {
    name: "Lesser Horseshoe",
    col: "rgb(43, 155, 236)",
    sPath: "sound/2022-08-19 23-51-04.mp3",
    img: "/lhb.png",
    desc: "The lesser horseshoe bat is one of the world's smallest bats, weighing only 5 to 9 grams (0.18 to 0.32 oz), with a wingspan of 192-254 millimetres (7.6-10.0 in) and a body length of 35-45 millimetres (1.4-1.8 in). It has strong feet that it uses to grasp rocks and branches, and can see well in spite of its small eyes. Like most bats, lesser horseshoe bats live in colonies and hunt their prey by echolocation, emitting ultrasound from specialized round pads in their mouth.",
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/lesserhorseshoe_11.02.13.pdf",
  },
  {
    name: "Common Pipestrelle",
    col: "rgb(208, 43, 236)",
    sPath: "sound/2022-08-19-21-04-47.mp3",
    img: "/common_pip.png",
    desc: "The common pipistrelle (Pipistrellus pipistrellus) is a small pipistrelle microbat whose very large range extends across most of Europe, North Africa, South Asia, and may extend into Korea. It is one of the most common bat species in the British Isles. In Europe, the northernmost confirmed records are from southern Finland near 60°N",
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/commonpipistrelle_11.02.13.pdf",
  },
  {
    name: "Soprano pipestrelle",
    col: "rgb(236, 232, 43)",
    sPath: "sound/2022-08-19 23-51-04.mp3",
    img: "/sop_pip.png",
    desc: "Until 1999, the soprano pipistrelle was considered as conspecific with the common pipistrelle. It is possible that these two species diverged from one another in the Mediterranean, resulting in the Soprano pipistrelle having the ability to thermoregulate at temperatures as high as 40 degrees Celsius. Since the two species were split, a number of other differences, in appearance, habitat and food, have also been discovered. ",
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/sopranopipistrelle_11.02.13.pdf",
  },
  {
    name: "Barbastelle",
    col: "rgb(43, 236, 208)",
    sPath: "sound/2022-08-23 21-14-24.mp3",
    img: "/barb.png",
    desc: "The western barbastelle (Barbastella barbastellus), also known as the barbastelle or barbastelle bat, is a European bat in the genus Barbastella. This species is found from Portugal to Azerbaijan and from Sweden to Canary Islands, where a sub-species was identified. It has a short nose, small eyes and wide ears. The conservation status of B. barbastellus is assessed as near threatened, vulnerable, critically endangered or extinct in various parts of its range.",
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/barbastelle_11.02.13.pdf",
  },
  {
    name: "Myotis",
    col: "rgb(189, 235, 52)",
    sPath: "sound/2022-08-24 00-35-10.mp3",
    img: "/myotis.png",
    desc: "Myotis septentrionalis, known as the northern long-eared bat[7] or northern myotis,[1] is a species of bat native to North America.[8] There are no recognized subspecies. The northern long-eared bat is about 3–3.7 inches in length, with a wingspan of 9–10 inches. It is distinguishable by its long ears when comparing it to other bats in its genus. This species is commonly found in the northern United States and Southern Canada east of British Columbia. The geographic range includes 37 states",
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/noctule_11.02.13.pdf",
  },
  {
    name: "Leislers",
    col: "rgb(3, 94, 252)",
    sPath: "sound/2022-08-19 23-51-04.mp3",
    img: "/leis.png",
    desc: "The lesser noctule, Leisler's bat or the Irish bat (Nyctalus leisleri), is a species of insectivorous bat belonging to the vesper bat family, Vespertilionidae. The species was named to honour the naturalist Johann Philipp Achilles Leisler.",
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/leislers_11.02.13.pdf",
  },
  {
    name: "Serotine",
    col: "rgb(252, 148, 3)",
    sPath: "sound/2022-08-24 00-35-10.mp3",
    img: "/serotin.png",
    desc: "The serotine bat (Eptesicus serotinus), also known as the common serotine bat, big brown bat, or silky bat, is a fairly large Eurasian bat with quite large ears. It has a wingspan of around 37 cm (15 in) and often hunts in woodland. It sometimes roosts in buildings, hanging upside down, in small groups or individually. The name serotine is derived from the Latin serotinus, which means 'evening', while the generic name derives from Greek ἔπιεν and οίκος, which means 'house flyer'.",
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/serotine_11.02.13.pdf",
  },
  {
    name: "Noctule or Leislers",
    col: "rgb(194, 3, 252)",
    sPath: "sound/2022-08-19 23-51-04.mp3",
    img: "/leis.png",
    desc: "The lesser noctule, Leisler's bat or the Irish bat (Nyctalus leisleri), is a species of insectivorous bat belonging to the vesper bat family, Vespertilionidae. The species was named to honour the naturalist Johann Philipp Achilles Leisler",
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/noctule_11.02.13.pdf",
  },
  {
    name: "Long eared",
    col: "rgb(252, 3, 94)",
    sPath: "sound/2022-08-24 00-35-10.mp3",
    img: "/long_eared.png",
    desc: "The brown long-eared bat or common long-eared bat (Plecotus auritus) is a small Eurasian insectivorous bat. It has distinctive ears, long and with a distinctive fold. It is extremely similar to the much rarer grey long-eared bat which was only validated as a distinct species in the 1960s. An adult brown long-eared bat has a body length of 4.5-4.8 cm, a tail of 4.1-4.6 cm, and a forearm length of 4-4.2 cm. The ears are 3.3-3.9 cm in length, and readily distinguish the long-eared bats from most other bat species. They are relatively slow flyers compared to other bat species.",
    external_link:
      "https://cdn.bats.org.uk/uploads/pdf/About%20Bats/brownlongeared_11.02.13.pdf",
  },
];
