let img = document.querySelector("img");
let testimonial = document.querySelector(".testimonial");
let name = document.querySelector(".name");
let container = document.querySelector(".container");

function mainFun() {
    testimonials = [
        "It is often better to be silent than to talk to the wrong listener.",
        "Nothing shows a man's character more than what he laughs at",
        "I never removed anyone from my life they all died in the accident of trust."
    ];
    names = ["Kafka", "Goethe", "Frydore Dostoevsky"];
    imgSrc = ["material/Franz_Kafka.jpg", "material/goethe.jpg", "material/dostoevsky.jpg"];
    backgroundSrc = ["material/bg1.jpg", "material/bg2.jpg", "material/bg1.jpg"];

    let i = 0;

    function showNext() {
        img.src = imgSrc[i];
        testimonial.textContent = testimonials[i];
        name.textContent = names[i];
        container.style.backgroundImage = `url(${backgroundSrc[i]})`;

        i = (i + 1) % testimonials.length;
        setTimeout(showNext, 5000);
    }

    showNext();
}

mainFun();
