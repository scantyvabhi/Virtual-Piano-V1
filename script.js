console.log("Javascript is attached & working");

var ka = document.getElementById("ka");
var ks = document.getElementById("ks");
var kd = document.getElementById("kd");
var kf = document.getElementById("kf");
var kg = document.getElementById("kg");
var kh = document.getElementById("kh");
var kj = document.getElementById("kj");
var kk = document.getElementById("kk");
var kl = document.getElementById("kl");

document.addEventListener('keypress',(e)=>{

    switch (e.key){
        case 'a':
            console.log("a is pressed");
            var aud1 = new Audio('./assets/60.mp3');
            aud1.play();
            ka.style.boxShadow = '0 0 15px pink';
            ka.style.transition= 'all 200ms ease';
            ka.style.scale = 1.1;
            setTimeout(() => {
                ka.style.boxShadow = 'none';
                ka.style.scale = 1;
            }, 250);
            break;


        case 's':
            console.log("s is pressed");
            var aud2 = new Audio('./assets/64.mp3');
            aud2.play();
            ks.style.boxShadow = '0 0 15px blue';
            ks.style.transition= 'all 200ms ease';
            ks.style.scale = 1.1;
            setTimeout(() => {
                ks.style.boxShadow = 'none';
                ks.style.scale = 1;
            }, 250);
            break;


        case 'd':
            console.log("d is pressed");
            var aud3 = new Audio('./assets/65.mp3');
            aud3.play();
            kd.style.boxShadow = '0 0 15px green';
            kd.style.transition= 'all 200ms ease';
            kd.style.scale = 1.1;
            setTimeout(() => {
                kd.style.boxShadow = 'none';
                kd.style.scale = 1;
            }, 250);
            break;


        case 'f':
            console.log("f is pressed");
            var aud4 = new Audio('./assets/69.mp3');
            aud4.play();
            kf.style.boxShadow = '0 0 15px skyblue';
            kf.style.transition= 'all 200ms ease';
            kf.style.scale = 1.1;
            setTimeout(() => {
                kf.style.boxShadow = 'none'; 
                kf.style.scale = 1;
            }, 250);
            break;


        case 'g':
            console.log("g is pressed");
            var aud5 = new Audio('./assets/72.mp3');
            aud5.play();
            kg.style.boxShadow = '0 0 15px yellow';
            kg.style.transition= 'all 200ms ease';
            kg.style.scale = 1.1;
            setTimeout(() => {
                kg.style.boxShadow = 'none';
                kg.style.scale = 1;
            }, 250);
            break;


        case 'h':
            console.log("h is pressed");
            var aud6 = new Audio('./assets/77.mp3');
            aud6.play();
            kh.style.boxShadow = '0 0 15px red';
            kh.style.transition= 'all 200ms ease';
            kh.style.scale = 1.1;
            setTimeout(() => {
                kh.style.boxShadow = 'none';
                kh.style.scale = 1;
            }, 250);
            break;


        case 'j':
            console.log("j is pressed");
            var aud7 = new Audio('./assets/79.mp3');
            aud7.play();
            kj.style.boxShadow = '0 0 15px lightgreen';
            kj.style.transition= 'all 200ms ease';
            kj.style.scale = 1.1;
            setTimeout(() => {
                kj.style.boxShadow = 'none';
                kj.style.scale = 1;
            }, 250);
            break;


        case 'k':
            console.log("k is pressed");
            var aud8 = new Audio('./assets/84.mp3');
            aud8.play();
            kk.style.boxShadow = '0 0 15px white';
            kk.style.transition= 'all 200ms ease';
            kk.style.scale = 1.1;
            setTimeout(() => {
                kk.style.boxShadow = 'none';
                kk.style.scale = 1;
            }, 250);
            break;


        case 'l':
            console.log("l is pressed");
            var aud9 = new Audio('./assets/96.mp3');
            aud9.play();
            kl.style.boxShadow = '0 0 15px pink';
            kl.style.transition= 'all 200ms ease';
            kl.style.scale = 1.1;
            setTimeout(() => {
                kl.style.boxShadow = 'none';
                kl.style.scale = 1;
            }, 250);
            break;


        default:
            console.log("Wrong key pressed");
            break;


    }

    // console.log("Key pressed is " + e.key)


})
