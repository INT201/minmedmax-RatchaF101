const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  const seekValue = [n1,n2,n3]
  let minValue = seekValue[0]
  let maxValue = seekValue[0]
  let middle=seekValue[0]
  for (const value of seekValue) {
      if(value < minValue){
          minValue = value
      }
      if(value > maxValue){
          maxValue = value
      }
    }
    for (const value of seekValue){

      if(value != minValue && value!= maxValue){
          middle = value
      }
      if(n1 == n2){
          middle = n1
      }
      if(n1 == n3){
          middle = n1
      }
      if(n2 == n3){
          middle = n2
      }
      
}
  return {min: minValue, mid: middle, max: maxValue}

}
module.exports = minMedMax
