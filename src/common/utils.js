export function   debounce(func,delay) {
    let timer
    return function () {
var context = this;
var args = arguments;
      if(timer)clearTimeout(timer)
   timer = setTimeout(function(){
        func.apply(this, args)
   },delay)
    
    }
 }