/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2016-12-06T21:53:30+01:00
* @Email:  me@andreeray.se
* @Filename: animations.js
* @Last modified by:   DevelDoe
* @Last modified time: 2017-02-20T22:03:04+01:00
*/



$('#curtain').on("click",function(){
    $('#curtain')
        .fadeOut(100)
        .queue(function(next){
            $('#output')
                .animate({
                    height: 170,
                    width: 200,
                    padding: 20
                }, "fast")
                .queue(function(next){
                    console.log("one")
                    printLetter('output', 'I takt med den digitala revolutionen skapas det allt fler kreativa lösningar för ökad lönsammhet. Här på wimse jobbar vi med att utveckla dina afärsidéer.')
                })
                .dequeue()
        })
})
$('#output').on("click", function(){
    $('#output')
        .animate({
            height: 0,
            width: 0,
            padding: 0
        },"fast")
        .queue(function(next){
            document.getElementById('output').innerHTML = ""
            next()
        })
        .delay(1000)
        .animate({
            height: 270,
            width: 200,
            padding: 20
        }, "fast")
        .queue(function(nex){
            printLetter('output', 'WIMSE är en kreativ webbbyrå belägen i göteborg. Vi hjälper företag till ökad lönsamhet genom att förbättra och utveckla afärsmodeller. Med nyskapande idéer och med tekniska lösningar kan vi tillsammans skapa plattformar som stärker din profilering på Internet.')
        })
        .dequeue()
})
