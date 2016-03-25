function doStuff( msg ){
    console.log( msg );
}

/************************************************************************************/

function fearNotLetter(str) {
  return str;
}

/********** Change the inputs below to test ************/
console.log( "Solution output ----> " + fearNotLetter("abce") + " <----");
fearNotLetter("abce");


/************************************************************************************/

window.onload = function(){
    doStuff( "this is passed to a separate .js file by window.onload");

    };

window.onclick = function () {
    console.log( "test click from window.onclick");
};