window.addEventListener("click", (event) => {
    // Create a new image element
    const newImage = document.createElement("img");
    let random=Math.floor(Math.random()*100);
    if(random<=20){
        newImage.src = "sm.png";
    } else if(random<=40 && random>20) newImage.src="sm2.png";
    else if(random>40 && random<60) newImage.src="sm3.png"
    else if(random>=60 && random<70) newImage.src="sm4.png"
    else newImage.src="sm5.png"
    console.log(random)
    newImage.style.height="300px";
    newImage.style.width="300px";
    newImage.style.position = "absolute";
    newImage.style.left = `${event.clientX}px`;
    newImage.style.top = `${event.clientY}px`;
    newImage.style.transform = "translate(-50%, -50%)"; // Center the image
    newImage.style.pointerEvents = "none"; // Prevent the new image from interfering with clicks

    // Append the new image to the body
    document.body.appendChild(newImage);

    // Start the animation
    gsap.to(newImage, {
        y: 900,
        duration: 2,
        rotate: 180,
        delay: 0.3,
        // onComplete: () => {
        //     newImage.remove();
        // }
    });
});
