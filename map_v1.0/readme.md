Plotting Bat locations relative to Wash Farm main site.

The size of the circle represents the amount of activity on the date specified at the different locations.

By removing all other land data I am aiming to convey a sense of our abstract, sonic location relative to the bats

Development: Add 3D spatial audio
https://p5js.org/reference/#/p5.Panner3D

logs:

10/4/23
Think ok now. pHave rebukt sound stuff. Removed Amplitude which is a shame because it looked cool. But too heavy on CPU. Main issue was actually : when hover over 1 - the other 24 iterations knock out the 1.
8/4/23
This is currently HEAVY on CPU. Need to look at a way of mixing the multiple (25) sounds better!. Perhaps experiment with more traditional mixer. See when it breaks up?

7/4/23
v. annoying bug when first use sound play()?
--
6/4/23
Removed amplitude🙁 because of memory overhead. Put simple anmiation in and CPU is less bovvered.
--
5/4/23
Have lowered FPS which helps but makes display 'glitchy'.
Getting memory leaks from:
a/ unashamed use of 'hoisting' - Refactor code to ES6!
b/ different way to mix 25 sounds - maybe not use the amplitude algorythm?
