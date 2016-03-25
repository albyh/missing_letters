function doStuff( msg ){
    console.log( msg );
}

/************************************************************************************/

function fearNotLetter(str) {
  //if charCode of next character != i+1 return i+1
  
  var i = 0, j = str.length, fnl ; // fnl = FearNotLetter and is returned undefined if none


  while ( (str.charCodeAt(i+1) - str.charCodeAt(i) === 1) || i === j ){
    i++;
  } 

  fnl = (i+1) === j ? undefined : String.fromCharCode( str.charCodeAt(i)+1 ) ;

  return fnl;
}

/********** Change the inputs below to test ************/
console.log( "Solution output ----> " + fearNotLetter("bcd") + " <----");
fearNotLetter("bcd"); 


/************************************************************************************/

window.onload = function(){
    doStuff( "this is passed to a separate .js file by window.onload");

    };

window.onclick = function () {
    console.log( "test click from window.onclick");
};