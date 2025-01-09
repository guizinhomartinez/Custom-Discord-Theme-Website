document.addEventListener("DOMContentLoaded", () => {
    // document.getElementById("command-sigma").addEventListener("mouseover", () => document.getElementById("copy-to-clip").style.opacity = "1" );
    // document.getElementById("command-sigma").addEventListener("mouseleave", () => document.getElementById("copy-to-clip").style.opacity = "0" );

    const image = document.getElementById("image");
    const tooltip = document.getElementById("tooltip");
    const box = document.querySelector(".box-3");

    function isElementVisible(el) {
        const rect = el.getBoundingClientRect();
        const vWidth = window.innerWidth || doc.documentElement.clientWidth;
        const vHeight = window.innerHeight || doc.documentElement.clientHeight;
    
        // Check if the element is out of bounds
        if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) return false;
    
        // Return true if any of the above disjunctions are false
        return true;
    }

    if (!isElementVisible(document.querySelector("#image"))) {
        tooltip.opacity = "0";
    }  // Outputs: true or false

    box.addEventListener("mouseover", () => {
        document.getElementById("ping").style.opacity = "1";
    });

    box.addEventListener("mouseleave", () => {
        document.getElementById("ping").style.opacity = "0";
    });

    document.getElementById("close").addEventListener("click", () => {
        document.getElementById("tooltip").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("tooltip").style.display = "none";
        }, 200);
    });

    let isImageVisible = false;
    let isMouseOverImage = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            isImageVisible = entry.isIntersecting;
            updateTooltipVisibility();
        });
    }, {
        threshold: 0.1 // Adjust this value as needed
    });

    observer.observe(image);

    image.addEventListener("mouseover", () => {
        isMouseOverImage = true;
        updateTooltipVisibility();
    });

    image.addEventListener("mouseleave", () => {
        isMouseOverImage = false;
        updateTooltipVisibility();
    });

    tooltip.addEventListener("mouseover", () => {
        isMouseOverImage = true;
        updateTooltipVisibility();
    });

    tooltip.addEventListener("mouseleave", () => {
        isMouseOverImage = false;
        updateTooltipVisibility();
    });

    function updateTooltipVisibility() {
        if (isImageVisible && isMouseOverImage) {
            tooltip.style.opacity = "1";
        } else {
            tooltip.style.opacity = "0";
        }
    }

    box.addEventListener("mouseover", () => {
        document.getElementById("ping").style.opacity = "1";
    });    
   
    let click = 0;
    let click2 = 0;
    let click3 = 0;
    let click4 = 0;

    var tooltip2 = document.createElement("div");
    var tooltip3 = document.createElement("div");
    var tooltip4 = document.createElement("div");

    var div = document.createElement("img");
    var div2 = document.createElement("img");

    // div.style.width = "360px";
    // div.style.height = "200px";
    // div.style.borderRadius = ".5em";
    // div.src = "images/Screenshot From 2025-01-05 03-28-54.png";
    // div.style.position = "absolute";
    // div.style.opacity = "1";
    // div.id = "white-mode";
    // document.querySelector(".box-2").appendChild(div);

    // div2.style.width = "360px";
    // div2.style.height = "150px";
    // div2.style.borderRadius = ".5em";
    // div2.src = "images/Screenshot From 2025-01-05 03-50-04.png";
    // div2.style.position = "absolute";
    // div2.style.opacity = "1";
    // div2.id = "white-mode-2"
    // document.querySelector(".box-1").appendChild(div2);

    tooltip2.style.opacity = "0";
    tooltip2.id = "tooltip-2";
    tooltip2.innerHTML = "Try clicking me!";
    tooltip2.classList.add("tooltip", "italic", "px-4", "py-2" , "cursor-pointer", "w-fit", "rounded-lg", "mt-1.5", "ml-auto");
    document.querySelector(".box-2").appendChild(tooltip2);

    tooltip3.style.opacity = "0";
    tooltip3.id = "tooltip-3";
    tooltip3.innerHTML = "Try clicking me!";
    tooltip3.classList.add("tooltip", "italic", "px-4", "py-2" , "cursor-pointer", "w-fit", "rounded-lg", "mt-1.5", "ml-auto");
    document.querySelector(".box-1").appendChild(tooltip3);

    tooltip4.style.opacity = "0";
    tooltip4.id = "tooltip-4";
    tooltip4.innerHTML = "Try clicking me!";
    tooltip4.classList.add("tooltip", "italic", "px-4", "py-2" , "cursor-pointer", "w-fit", "rounded-lg", "mt-1", "ml-auto");
    document.querySelector(".box-3").appendChild(tooltip4);

    document.querySelector(".box-2").addEventListener("mouseover", (event) => {
        tooltip2.style.opacity = "1";
    });

    document.querySelector(".box-2").addEventListener("mouseleave", (event) => {
        tooltip2.style.opacity = "0";
    });

    document.querySelector(".box-1").addEventListener("mouseover", (event) => {
        tooltip3.style.opacity = "1";
    });

    document.querySelector(".box-1").addEventListener("mouseleave", (event) => {
        tooltip3.style.opacity = "0";
    });

    document.querySelector(".box-3").addEventListener("mouseover", (event) => {
        tooltip4.style.opacity = "1";
    });

    document.querySelector(".box-3").addEventListener("mouseleave", (event) => {
        tooltip4.style.opacity = "0";
    });

    document.querySelector("#tooltip-2").addEventListener("click", (event) => {
        if (event.currentTarget === document.querySelector("#tooltip-2")) {
            click = click + 1;
        }

        console.log(click);

        if (click === 1) {
            div.style.opacity = "1";
            document.querySelector(".pop-up-real").style.display = "block";
            document.querySelector(".pop-up-real").style.opacity = "1";
            document.querySelector(".pop-up-real img").src = "images/Screenshot From 2025-01-05 03-28-54.png";
            document.querySelector(".pop-up-real h2").innerHTML = "Demonstration of White Mode."
            document.querySelector(".pop-up-real h2").style.width = "13rem";
        } else if (click === 2) {
            div.style.opacity = "0";
            click = 0;
            document.querySelector(".pop-up-real").style.display = "none";
        }
    });

    document.querySelector("#tooltip-3").addEventListener("click", (event) => {
        if (event.currentTarget === document.querySelector("#tooltip-3")) {
            click2 = click2 + 1;
        }
        
        console.log(click2);

        if (click2 === 1) {
            div2.style.opacity = "1";
            document.querySelector(".pop-up-real").style.opacity = "1";
            document.querySelector(".pop-up-real").style.display = "block";
            document.querySelector(".pop-up-real img").src = "images/Screenshot From 2025-01-05 03-50-04.png";
            document.querySelector(".pop-up-real h2").innerHTML = "Demonstration of Rounded Corners."
            document.querySelector(".pop-up-real h2").style.width = "fit-content";
        } else if (click2 === 2) {
            div2.style.opacity = "0";
            click2 = 0;
            document.querySelector(".pop-up-real").style.opacity = "0";
            document.querySelector(".pop-up-real").style.display = "none";
        }
    });

    document.querySelector("#tooltip-4").addEventListener("click", (event) => {
        if (event.currentTarget === document.querySelector("#tooltip-4")) {
            click4 = click4 + 1;
        }

        if (click4 === 1) {
            document.querySelector("#tooltip-4").innerHTML = "Sorry no screenshot yet!";
        } else if (click4 === 2) {
            document.querySelector("#tooltip-4").innerHTML = "I just told you there's no screenshot.";
            click4 = 0;
        }
    });

    document.querySelector("a #changelogs-button").addEventListener("mouseover", (event) => {
        document.getElementById("arrow").style.transform = "translate(0px, 10px)";
        document.getElementById("arrow").style.opacity = "1";
    });

    document.querySelector("a #changelogs-button").addEventListener("mouseleave", (event) => {
        document.getElementById("arrow").style.transform = "translate(0px, 0px)";
        document.getElementById("arrow").style.opacity = "0.5";
    });

    document.getElementById("expand-button").addEventListener("click", (event) => {
        document.getElementById("warning-text").style.display = "block";

        if (event.currentTarget === document.getElementById("expand-button")) {
            click3 = click3 + 1;
        }
        if (click3 === 1) {
            document.getElementById("expand-button").style.rotate = "180deg";
        } else if (click3 === 2) {
            document.getElementById("warning-text").style.display = "none";
            document.getElementById("expand-button").style.rotate = "0deg";
            click3 = 0;
        }
    });

    function copyFunction() {
        const copyText = document.getElementById("command").textContent;
        const textArea = document.createElement('textarea');
        textArea.textContent = copyText;
        document.body.append(textArea);
        textArea.style.display = "none";
        textArea.select();
        textArea.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(textArea.value);
    }
      
    document.getElementById('copy-to-clip').addEventListener('click', copyFunction);

    document.querySelector("#close-butt").addEventListener("click", (event) => {
        document.querySelector(".pop-up-real").style.opacity = "0";
        document.querySelector(".pop-up-real").style.display = "none";
    });

    document.querySelector(".pop-up").addEventListener("click", (event) => {
        document.querySelector(".pop-up-real").style.opacity = "0";
        document.querySelector(".pop-up-real").style.display = "none";
    });

    document.onkeydown = function(evt) {
        if (evt.key === "Escape" || evt.key === "Esc") {
            document.querySelector(".pop-up-real").style.opacity = "0";
            document.querySelector(".pop-up-real").style.display = "none";
        }
    };

    document.querySelector("#image").addEventListener("click", (event) => {
        document.querySelector(".pop-up-real").style.display = "block";
        document.querySelector(".pop-up-real").style.opacity = "1";
        document.querySelector(".pop-up-real img").src = "images/Screenshot From 2025-01-05 00-09-52.png";
        document.querySelector(".pop-up-real h2").innerHTML = "Friends section of Discord, with the theme applied."
        document.querySelector(".pop-up-real h2").style.width = "fit-content";
    });
});