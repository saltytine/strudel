// setDefaultVoicings('legacy')
const k = 0.01;

stack(
 
  n(stack("0@2 0 3@2 3 0 3",
          "1@2 1 2@2 2 1 2".late(k),
          "2@2 2 1@2 1 2 1".late(k*2),
          "3@2 3 0@2 0 3 0".late(k*3)))
     .chord("<G [Bm E] [G@3 C] D>".slow(2)).voicing()
     .s("gm_pad_warm").clip(1).release(0.2).gain(0.5)
     .room(0.9).gain(0.5),
     
     `<
       [4 3 [2 ~] [1 ~] 0@2 4@2]
       [4 3 [2 ~] [1 ~] 0@2 7@2]
       [4 3 [2 ~] [1 ~] 0@2 4@2]
       [4 3 [2 ~] [1 ~] 0@2 5@2]
       [4 3 [2 ~] [1 ~] 0@2 4@2]
       [4 3 [2 ~] [1 ~] 0@2 7@2]
       [4 2 [2 ~] [7 ~] 0@2 4@2]
       [4 2 [2 ~] [7 ~] 0@2 4@2]
     >`.scale("g2:lydian").note().s("gm_bassoon")
     .room(0.9).gain(0.5),

     `<
       [~ ~ sd ~ ~ ~ ~ sd]
     >`.s("sd"),
  
     `<
       [bd bd ~ ~ ~ bd ~ ~]
     >`.s("bd"),
  
     `<
       [~ ~ ~ ~ hh ~ hh ~]
     >`.s("hh")
  
).cpm(120/4)//.pianoroll()
