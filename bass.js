stack(
  note(`
    [d2]<[c2*2][c2]>[d2][g2][e2 e3][d2][f#2][b2]
  `).s("gm_slap_bass_2").gain(4),
  note(`
    [{g b d}][{b d f#}]
  `).s("gm_electric_guitar_jazz").gain(1),
  note(`
    <[{c, e, g}][{d, f#, a, c}]><[{e, g, b}][{g, b, d}]>
  `).s("gm_epiano1"),
  sound(`
    [~ ~ ~ ~][sd ~ ~ ~][~ ~ ~ ~]<[sd ~ ~ ~] [cr ~ sd ~]>,
    [hh*4][hh*6][hh*4][hh*4],
    [bd ~*3][~*4][bd ~*3]<[~*4][{bd, oh} ~*3]>
  `),
)
