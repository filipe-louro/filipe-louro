document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('h1');
    let rotation = 0;
  
    setInterval(function() {
      rotation += 1;
      title.style.transform = `rotate(${rotation}deg)`;
    }, 10);
  });
  