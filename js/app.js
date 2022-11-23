let degcont = 0;
const plates = {
    plate1: {
        title1: "Plato 1",
        title2: "Plato 1",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>
        Qui optio, saepe atque ullam autem quaerat expedita <br>
        veritatis perferendis iste delectus voluptatibus, maxime <br>
        ad maiores asperiores ea, sequi`,
        img: "assets/plato1.png", 
    }, 
    plate2: {
        title1: "Plato 2",
        title2: "Plato 2",
        desc: `Un agujero de seguridad o vulnerabilidad es un fallo en un <br>
               sistema de información que se puede explotar para violar la <br>
               seguridad del sistema`,
        img: "assets/plato2.png", 
    },
    plate3: {
        title1: "Plato 3",
        title2: "Plato 3",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>
        Qui optio, saepe atque ullam autem quaerat expedita <br>
        veritatis perferendis iste delectus voluptatibus, maxime <br>
        ad maiores asperiores ea, sequi`,
        img: "assets/plato3.png", 
    },
    plate4: { 
        title1: "Plato 4",
        title2: "Plato 4",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>
        Qui optio, saepe atque ullam autem quaerat expedita <br>
        veritatis perferendis iste delectus voluptatibus, maxime <br>
        ad maiores asperiores ea, sequi`,
        img: "assets/plato1.png", 
    },
    plate5: {
        title1: "Plato 5",
        title2: "Plato 5",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br>
        Qui optio, saepe atque ullam autem quaerat expedita <br>
        veritatis perferendis iste delectus voluptatibus, maxime <br>
        ad maiores asperiores ea, sequi`,
        img: "assets/plato2.png", 
    }
}


let owl = $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:2,
                nav:false
            },
            // breakpoint from 480 up
            480 : {
                items:3,
                nav:false
            },
            // breakpoint from 768 up
            768 : {
                items:5,
                nav:false
            },
        }
    });
}); 

owl.on('changed.owl.carousel', function(event) {
    // rotate_circle();
});
 

function card_selection (elem, plate){
    let actives = document.getElementsByClassName('card-active');

    let elemHero = document.getElementById('hero_container');
    let elemFirstTitle = document.getElementById('hero_first_title');
    let elemSecondTitle = document.getElementById('hero_second_title');
    let elemPlateDesc = document.getElementById('hero_plate_description');
    let elemHeroImage = document.getElementById('hero_image');
    let plateButton = document.getElementById('plate_button');
 
    for (let items of actives){
        items.classList.toggle('card-active');
    }

    elem.classList.toggle('card-active');
    
    /* text transiton */
    elemFirstTitle.style.opacity = 0;
    elemSecondTitle.style.opacity = 0;
    elemPlateDesc.style.opacity = 0;
    plateButton.style.opacity = 0;
    setTimeout(() => {
        elemFirstTitle.innerHTML = plates[plate].title1;
        elemSecondTitle.innerHTML = plates[plate].title2;
        elemPlateDesc.innerHTML = plates[plate].desc;  
        // plateButton.src = "www.google.com"
        
        elemFirstTitle.style.opacity = 1;
        elemSecondTitle.style.opacity = 1;
        elemPlateDesc.style.opacity = 1;
        plateButton.style.opacity = 1;
    }, 500);
    /* -- */


    /* image transiton */
    elemHeroImage.style.opacity = 0;
    setTimeout(() => {
        elemHeroImage.src = plates[plate].img;
        elemHeroImage.style.opacity = 1;

        // Achor to imaage
        elemHeroImage.scrollIntoView();
    }, 500);
    /* -- */
    rotate_circle();
}

function rotate_circle (){
    let yellowCircle = document.getElementById('yellow_circle');
    let redCircle = document.getElementById('red_circle');
    yellowCircle.style.transform = `rotate(${degcont+=180}deg)`;
    redCircle.style.transform = `rotate(${-(degcont+=180)}deg)`;
    degcont = degcont * -1;
}
