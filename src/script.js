let click = 0;
let click2 = 0;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button-change-theme").onclick = function() {
        click += 1;

        document.body.style.transition = "all 0.25s";

        if (click == 1) {
            document.body.classList.add("bg-zinc-200", "light");
            document.body.classList.remove("bg-zinc-900");
            localStorage.setItem('isLight', true);
        } else {
            document.body.classList.add("bg-zinc-900");
            document.body.classList.remove("bg-zinc-200", "light");
            click = 0;
            localStorage.setItem('isLight', false);
        }
    }

    if (localStorage.getItem('isLight') === 'true') {
        document.body.classList.add("bg-zinc-200", "light");
        document.body.classList.remove("bg-zinc-900");
    } else {
        document.body.classList.add("bg-zinc-900");
        document.body.classList.remove("bg-zinc-200", "light");
    }

    document.getElementById("button-change-theme").addEventListener("click", () => {
        click2 += 1;
    
        console.log(click);
    
        if (click2 == 1) {
            document.querySelector(".sun").style.opacity = "0";
            document.querySelector(".moon").style.opacity = "1";
        } else if (click2 == 2) {
            document.querySelector(".moon").style.opacity = "0";
            document.querySelector(".sun").style.opacity = "1";
            click2 = 0;
        }
    });
    
    if (localStorage.getItem('isLight') === 'true') {
        document.querySelector(".sun").style.opacity = "0";
        document.querySelector(".moon").style.opacity = "1";
    } else {
        document.querySelector(".moon").style.opacity = "0";
        document.querySelector(".sun").style.opacity = "1";
    }

    window.addEventListener('storage', (e) => {
        console.log(`Key Changed: ${e.key}`);
        console.log(`New Value: ${e.newValue}`);
    });


    document.getElementById("warning").addEventListener("click", () => {
        localStorage.setItem('isClosed', true);
        document.getElementById("warning-bar").style.display = "none";
    });

    document.getElementById("warning-bar").style.display = (localStorage.getItem('isClosed') === "true" ? "none": "block");

    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
        // if (window.innerWidth <= 640) {
            if (prevScrollpos > window.scrollY) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-50px";
            }
            prevScrollpos = window.scrollY;
        // }
    }

    // All imported from the main html page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo(0, 0);
});