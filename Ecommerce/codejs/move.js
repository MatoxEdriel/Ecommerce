const app = document.getElementById('Typewriter');

const typewriter = new Typewriter(app , {
    loop: true,
    delay: 75
});

typewriter
 .typeString("Desde tu casa hasta tu hogar :v")
 .pauseFor(200)
 .start();



 