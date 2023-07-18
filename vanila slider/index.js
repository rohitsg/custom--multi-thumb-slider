function run() {
  let mouseDown = false, mousemove = false;
  let thumbDragging = false;

  const lowEle = document.querySelector('.low')
  const sliderContainerEle = document.querySelector('.slider-container')
  lowEle.addEventListener('mousedown', function(e) {
    console.log('low down- ', e.target)
    mouseDown = true;
    e.stopPropagation();
  });

  lowEle.addEventListener('mousemove', function(e) {
    e.stopPropagation();
    console.log('low move- ', e.target)
    mousemove = true;
    
    if (mouseDown) {
      thumbDragging = true;
      console.log('Hndling drag...')
    }
  });


  lowEle.addEventListener('mouseup', function(e) {
    console.log('low up - ', e.target) 
    mouseDown = false;
    mousemove = false;
    thumbDragging = false;

    e.stopPropagation();
  });

  sliderContainerEle.addEventListener('mousedown', function(e) {
    console.log('container - ', e.target)
    mouseDown = true;
  });
}

run();