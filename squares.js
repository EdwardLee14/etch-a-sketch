function gridMaker() {
    var slider = document.getElementById('slider');
    var sliderValue;
  
    noUiSlider.create(slider, {
      start: [50],
      range: {
        'min': 0,
        'max': 100
      },
      step: 1
    });
  
    slider.noUiSlider.on('update', function (values, handle) {
        sliderValue = Math.round(values[handle]);
      let list = document.getElementById("grid");
      list.innerHTML = "";
      for (let i = 0; i < sliderValue; i++) {
        let row = document.createElement("div");
        row.classList.add("gridRows");
        for (let j = 0; j < sliderValue; j++) {
          let box = document.createElement("div");
          box.classList.add("box");
          row.appendChild(box);
        }
        list.appendChild(row);
      }
      marker();
      let size = document.getElementById("dimensions");
      size.classList.add("dimensions");
      size.textContent = sliderValue + " by " + sliderValue;
    });
    marker();
  }
  
  function marker() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(function (cube) {
      cube.addEventListener("mouseover", function () {
        cube.style.backgroundColor = "blue";
      });
      cube.addEventListener("mouseout", function () {
        cube.style.backgroundColor = "blue";
      });
    });
  }
  
  gridMaker();