function getAverage(scores) {
    let sum = 0;
    let average = 0;
    let leng = scores.length;  
  
    for (const score of scores) {    
      sum = sum + score;  
    }
  
    average = sum / leng;
    
    return average;
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));