    (function(){

        'use strict';

        let convertType = 'miles';
        const heading = document.querySelector('h1');
        const intro = document.querySelector('p');
        const answerDiv = document.getElementById('answer');
        const form = documen.getElementById('convert');

        document.addEventListener('keydown', function(event) {

            var key = event.code;

            if (key === 'KeyK') {
                convertType = 'kilometers';
                heading.innerHTML ='kilometers to miles Converter';
                intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';

            }
            else if (key === 'KeyM') {
                convertType = 'miles';
                heading.innerHTML ='Miles to kilometers Converter';
                intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers';

            }
        });

        form.addEventListener('submit', function(event){
        
            event.preventDefault();

            const distance = parseFloat(document.getElementById('distance').value);

            if(distance){


                //1.609344
                //0.62137119
                if (convertType == "miles") {
                const converted = (distance * 1.609344).toFixed(3);

                answerDiv.innerHTML = '${distance} miles converts to ${converted} kilometers';
            } 
            else {
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = '${distance} kilometers convert to ${converted} miles';

            }  
        }
        else{
            answerDiv.innerHTML = "<h2> Please provide a number</h2>";
        }
    });