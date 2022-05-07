       //-- zoom --//
       let spiderman = document.getElementsByClassName('bat');
       for (let i = 0; i<spiderman.length; i++) {
           let image = spiderman[i];
           image.addEventListener('mouseover', function () {
               image.style.transform ='scale(1.1)'
           });
           image.addEventListener('mouseout', function () {
               image.style.transform ='scale(1)'
           });
       }

       