function iterative(array){
  array.forEach((element,index) => {console.log(`${index}: ${element}`)})
}

function iterate(callback){
  var arr=["Hii","Hello"];
  arr.forEach(callback);
  return arr;
}

function doToArray(array,callback){
  array.forEach(callback);
}
