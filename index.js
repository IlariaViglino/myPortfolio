var typewriter = new Typewriter('#poem', {
    loop: false,
    delay: 75,
  });
  
  typewriter
    .pauseFor(2500)
    .typeString('"Ye are Blood of my Blood, and Bone of my Bone. I give ye my Body, that we Two might be One. I give ye my Spirit, til our Life shall be Done..."')
    .pauseFor(300)
    
    .pauseFor(1000)
    .start();
    