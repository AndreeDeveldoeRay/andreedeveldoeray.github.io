/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2016-12-12T13:28:52+01:00
* @Email:  me@andreeray.se
* @Filename: printLetter.js
* @Last modified by:   DevelDoe
* @Last modified time: 2017-02-20T22:03:09+01:00
*/



function printLetter(destination, message){
        var i = 0
        var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i)
        if(message[i] == " ") delay(1);
        if(message[i-1] == ".") delay(1);
        i++
        if(i > message.lengt) clearInterval(interval)
    }, 1)
}

function delay(ms) {
    var cur_d = new Date();
    var cur_ticks = cur_d.getTime();
    var ms_passed = 0;
    while(ms_passed < ms) {
        var d = new Date();  // Possible memory leak?
        var ticks = d.getTime();
        ms_passed = ticks - cur_ticks;
        // d = null;  // Prevent memory leak?
    }
}
