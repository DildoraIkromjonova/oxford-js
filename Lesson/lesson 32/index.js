//  oddiy usul 

export function add(a,b){
  return a + b
}

export const multiply = ( a, b) =>{
  return a * b
}

const divison = function ( a, b){
  return a / b
}

function remove( a, b){
  return a - b
}

export const  removeAndDivision = { divison,remove}


// default export 
function qoshish ( a, b){
  return a + b 
}

const ayrish = ( a , b)=>{
  return a - b
}

export default {qoshish,ayrish}