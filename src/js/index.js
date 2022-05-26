//import $ from "jquery";
import { gsap } from "gsap";
import {cube} from './mymodule.js';
import '../css/header.css';
import '../css/style.css';
import '../css/footer.css';
import '../sass/index.scss';
import Vue from 'vue';

$('body').css('background-color' , 'red');


gsap.to('.box' , {
    x: 400,
    y: 400,
    repeat: 2,
    rotation: 360,
    yoyo: true,
    duration: 2,
    scale: 2
})

console.log(cube(30));
console.log(cube(10) + "person");

console.log('webpack ok');