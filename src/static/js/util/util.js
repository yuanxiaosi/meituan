export const debouce = function(fn, delay){
	var timer = null;
	return function(){
		var context = this;
		var args = arguments;
		clearTimeout(timer)
		timer = setTimeout(()=>{
		fn.apply(context, args)
	 }, delay)
	}
}

export const throttle = (fn,delay) =>{
  var timer = null;
  return function(){
    if(timer){
      return
    }
    var context = this
    var args = arguments
    timer = setTimeout(()=>{
      fn.apply(context, args)
      clearTimeout(timer)
      timer = null
    }, delay)
  }
}