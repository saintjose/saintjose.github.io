document.addEventListener('DOMContentLoaded', () => {

    var now = new Date(); 
    
    // Unix timestamp (in seconds) to count down to
    var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 50) + 1;
    // var twoDaysFromNow = now.setDate(now.getDate() + 30);
  
    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow)
  
      // Start the countdown
      .start()
  
      // Do something when the countdown ends
      .ifEnded(() => {
        console.log('The countdown has ended!');
      });
  
    // Toggle theme
    var interval = setInterval(() => {
      let body = document.body;
      body.classList.toggle('flipdown__theme-dark');
      body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
      body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    }, 5000);
  
    // Show version number
    var ver = document.getElementById('ver');
    ver.innerHTML = flipdown.version;
  });
  