import $ from "jquery";
import { gsap } from "gsap";
import {cube} from './mymodule.js';
import '../css/style.css';
import '../css/header.css';

$('body').css('background-color' , 'red');


gsap.to('.box' , {
    x: 400,
    y: 400,
    repeat: 2,
    yoyo: true,
    duration: 2
})

console.log(cube(30));

console.log('webpack ok');