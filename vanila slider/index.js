function run() {
  let mouseDown = false, mousemove = false;
  let thumbDragging = false;

  const lowEle = document.querySelector('.low')
  const midEle = document.querySelector('.mid')
  const sliderContainerEle = document.querySelector('.slider-container')
  lowEle.addEventListener('mousedown', function(e) {
    console.log('low down- ')
    mouseDown = true;
    e.stopPropagation();
  });
  
  sliderContainerEle.addEventListener('mousemove', function(e) {
    e.stopPropagation();
    mousemove = true;
  const midEle = document.querySelector('.mid')
    
    if (mouseDown) {
      thumbDragging = true;
      // lowEle.style.position = 'absolute';
      let lowEleLeft = lowEle.getBoundingClientRect().left;
      let midEleLeft = midEle.getBoundingClientRect().left - lowEle.getBoundingClientRect().width - 5;
      let diff = midEleLeft - lowEleLeft;
      let shiftX = e.clientX - lowEle.getBoundingClientRect().left;
      console.log('sliderContainerEle move- ',shiftX, e.pageX, e.pageX - shiftX)
      if (lowEleLeft < midEleLeft) {
        // if (diff > e.offsetX) {
          // lowEle.style.left =  e.offsetX + 'px';
        }
        lowEle.style.left =  e.pageX - shiftX + 'px';
    }
  });


  lowEle.addEventListener('mouseup', function(e) {
    console.log('low up - ', e.target) 
    mouseDown = false;
    mousemove = false;
    thumbDragging = false;

    e.stopPropagation();
  });

  sliderContainerEle.addEventListener('mouseup', function(e) {
    console.log('sliderContainerEle up - ', e.target) 
    mouseDown = false;
    mousemove = false;
    thumbDragging = false;

    e.stopPropagation();
  });

}

run();