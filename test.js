import $ from "jquery";
import { gsap } from "gsap";

$('body').css('background-color' , 'red');


gsap.to('.box' , {
    x: 400,
    y: 400,
    repeat: 2,
    yoyo: true,
    duration: 2
})

console.log('webpack ok');