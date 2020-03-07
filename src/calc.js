function temperatureConverter(valNum) {
        valNum = parseFloat(valNum);
        const result=(valNum-32) / 1.8;
        document.getElementById("outputCelcius").innerHTML=result;

         //localstorage to store number of times the converter was used
         if (localStorage.counter) {
          localStorage.counter = Number(localStorage.counter) + 1;
          }
        else {
         localStorage.counter = 1;
          }
          document.getElementById("numOfConverts").innerHTML = localStorage.counter;
      }
      