import * as m from './module.js';

let pearson  = m.pearson;
let spearman = m.spearman;

let rs = null;
let rp = null;

//dataset 1
rs = spearman(
  [106 , 100 , 86 , 101 , 99 , 103 , 97 , 113 , 112 , 110],
  [7   , 27  , 2  , 50  , 28 , 29  , 20 , 12  , 6   , 17 ],
);
rp = pearson(
  [106 , 100 , 86 , 101 , 99 , 103 , 97 , 113 , 112 , 110],
  [7   , 27  , 2  , 50  , 28 , 29  , 20 , 12  , 6   , 17 ],
);
console.log({rs,rp});

//dataset 2
rs = spearman(
  [35,20,49,44,30],
  [24,35,39,48,45],
);
rp = pearson(
  [35,20,49,44,30],
  [24,35,39,48,45],
);
console.log({rs,rp});

//dataset 3
rs = spearman(
  [56,75,45,71,62,64,58,80,76,61],
  [66,70,40,60,65,56,59,77,67,63],
);
rp = pearson(
  [56,75,45,71,62,64,58,80,76,61],
  [66,70,40,60,65,56,59,77,67,63],
);
console.log({rs,rp});

//dataset 4: "https://www.scribbr.com/statistics/pearson-correlation-coefficient/"
rs = spearman(
  [3.63,3.02,3.82,3.42,3.59,2.87,3.03,3.46,3.36,3.30] ,
  [53.1,49.7,48.4,54.2,54.9,43.7,47.2,45.2,54.4,50.4] ,
);
rp = pearson(
  [3.63,3.02,3.82,3.42,3.59,2.87,3.03,3.46,3.36,3.30],
  [53.1,49.7,48.4,54.2,54.9,43.7,47.2,45.2,54.4,50.4],
);
console.log({rs,rp});
