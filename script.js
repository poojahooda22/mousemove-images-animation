const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - prev > delay) {
            prev  = now;
            return func(...args);
        }
    }
}

const images = [
    "./images/img1.webp",
    "./images/img2.webp",
    "./images/img3.webp",
    "./images/img4.webp",
    "./images/img5.webp",
    "./images/img6.webp",
    "./images/img7.webp",
    "./images/img8.webp",
    "./images/img9.webp",
    "./images/img10.webp",
    "./images/img11.webp",
    "./images/img12.webp",
    "./images/img13.webp",
    "./images/img14.webp",
    "./images/img15.webp",
  ];

document.querySelector("#center")
.addEventListener("mousemove", throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    var img = document.createElement("img");
    img.setAttribute("src", getRandomImage());
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power2,
        duration: .6,
    })

    gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power3,
        
    })
    setTimeout(function(){
        div.remove();
    }, 4000)


}, 180));

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }