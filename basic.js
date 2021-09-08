function $(e, f = document){return(f.querySelector(e));}
function $$(e, f = document){return(f.querySelectorAll(e));}
function vw(){return(window.innerWidth/100);}
function vh(){return(window.innerHeight/100);}
function random(min, max){return(Math.floor(Math.random()*(max+1-min))+min);}