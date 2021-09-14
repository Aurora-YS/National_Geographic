////////////// main image slide //////////////

const slide_container = document.querySelector("main .slide_container"),
      slide_img = document.querySelectorAll("main .slide_container .slide_img"),
      slide_width = 100,
      slide_count = slide_img.length;

for(i=0; i<slide_count; i++){
    slide_img[i].style.backgroundImage = "url(./img/main_0"+(i+1)+".png)";
}

let slide_idx = 0;

makeClone();
function makeClone(){
    let first_clone = slide_img[0].cloneNode(true);
    first_clone.classList.add("clone");
    slide_container.appendChild(first_clone);

    calcNewWidth();
    moveSlide();
    setInterval(moveSlide, 4000);
    slide_container.classList.add("animated");
}

function calcNewWidth(){
    let currentSlides = document.querySelectorAll("main .slide_container .slide_img");
    let newSlideCount = currentSlides.length;

    var newWidth = slide_width * newSlideCount + "%";
    slide_container.style.width = newWidth;
}

function moveSlide(){
    slide_container.style.left = -slide_idx * slide_width + "%";
    slide_idx++;
    if(slide_idx == slide_count+1){
        setTimeout(()=>{
            slide_container.classList.remove("animated");
            slide_container.style.left = "0";
            slide_idx = 1;
        }, 1000);
        setTimeout(()=>{
            slide_container.classList.add("animated");
        }, 1100);
    }
}



////////////// stories //////////////
const $stories = [
    "The adorable pika sounds an alarm for global warming",
    "Why some female humming birds masquerade as males",
    "To save kelp forests, scientists try breeding sea stars",
    "Zoo animals get COVID-19 vaccines across the U.S.",
    "Rattlesnakes trick humans into thinking they’re closer than they are",
    "Meet the incredible ice worm, which lives in glaciers",
    "Why mammal pregnancies are so diverse",
    "Photographing the sleepless effort to save a cheetah",
    "Photos show how people are working to protect cheetahs",
    "How you can help fight the illegal cheetah cub trade",
    "Cheetah cubs poached and sold as pets, Instagram props",
];

const $cont01 = document.querySelector("#stories > .wrap > .content");

let $cont01_box = "";

for(i = 0; i < $stories.length; i++){
    if(i == 0){
        $cont01_box += `
        <div class="box" style="background-image: url(./img/animals/animal_news_`+(i+1)+`.jpg);">
            <div class="img"></div>
        `;
    }else{
        $cont01_box += `
        <div class="box">
            <div class="img" style="background-image: url(./img/animals/animal_news_`+(i+1)+`.jpg);"></div>   
        `;
    }
    $cont01_box += `
            <div class="txt">
                <div class="top_txt">
    `;
    if(i == $stories.length-2 || i == $stories.length-3){
        $cont01_box += `<h4>ANIMALSWILDLIFE WATCH</h4>`;
    }else if(i == $stories.length-1){
        $cont01_box += `<h4>MAGAZINEWILDLIFE WATCH</h4>`;
    }else{
        $cont01_box += `<h4>ANIMALS</h4>`;
    }
    $cont01_box +=`
                    <p>`+ $stories[i] +`</p>
                </div>
                <button>read more<span>→</span></button>
            </div>
        </div>   
    `;
}

$cont01.innerHTML = $cont01_box;


////////////// subscriber //////////////
const $subscriber = [
    "How viruses shape our world",
    "Why are people so dang obsessed with Mars?",
    "See how new Mars rover will explore the red planet",
    "The era of greyhound racing in the U.S. is coming to an end",
];

const $cont02 = document.querySelector("#subscriber > .wrap > .content");

let $cont02_box = "";

for(i = 0; i < $subscriber.length; i++){
    if(i < 2){
        $cont02_box += `<div class="box" style="background-image: url(./img/poster_`+(i+1)+`.jpg);">`;
    }else{
        $cont02_box += `<div class="box" style="background-image: url(./img/poster_`+(i+2)+`.jpg);">`;
    }
    $cont02_box += `
            <div class="dark">
                <div class="top_txt">
                    <h4>MAGAZINE</h4>
                    <div class="line"></div>
                    <p>`+ $subscriber[i] +`</p>
                </div>
                <a href="#">Read</a>
            </div>
        </div>
    `;
}

$cont02.innerHTML = $cont02_box;