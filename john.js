stack(
  note(`
    [{d, f#, a}][{d, f#, a#}][{d, f#, b}][{d, f#, c4}][{d, g, a, b}][{b, g, a}][{d, e, f#, a}][{2d#, e, g}][{2a, d, a}][{2a, d, a}]
  `).s("gm_cello").room("2"),
  note(`
    [~ ~ ~ ~][~ ~ ~ ~][~ ~ ~ ~][~ ~ ~ ~][~ ~ ~ ~][~ ~ a g][~ ~ ~ ~][~ ~ g e][~ ~ ~ ~][~ ~ ~ ~]
  `).s("gm_cello").room("2").gain(1.3)
).cpm(8/2)
