
document.addEventListener('DOMContentLoaded', function() {
  //  Lester's CV
  const jhonPeterButton = document.getElementById('jhon-peter-button');
  // Jhon Peter's CV
  const lesterButton = document.getElementById('lester-button');
  
  if (jhonPeterButton) {
    jhonPeterButton.addEventListener('click', function() {
      document.querySelector('.container').classList.add('flip-animation');
      setTimeout(function() {
        window.location.href = 'Codilla.html';
      }, 1000);
    });
  }
  
  if (lesterButton) {
    lesterButton.addEventListener('click', function() {
      document.querySelector('.container').classList.add('flip-animation');
      setTimeout(function() {
        window.location.href = 'Lester.html';
      }, 1000);
    });
  }
});
