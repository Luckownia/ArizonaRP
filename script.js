            const navLinks = document.querySelectorAll(".nav-link");
            navLinks.forEach(link => {

                link.addEventListener("click", () => {
                    navLinks.forEach(link1 => {
                        if (link1.classList.contains('active')) {
                            link1.classList.remove('active');
                        }
                    })
                    link.classList.add("active");
                })
            })

            const inputCheckbox = document.querySelector(".switch-mode-checkbox");
            const circleImage = document.querySelector(".circle-image")
            const logoPalm = document.querySelector(".logo img");
            inputCheckbox.addEventListener("click", () => {

                if (inputCheckbox.value == 'on') {
                    if (circleImage.src.endsWith("sun.png")) {
                        circleImage.src = "moon.png"
                    } else {
                        circleImage.src = "sun.png"
                    }
                    if (logoPalm.src.endsWith("palm-tree-48.png")) {
                        logoPalm.src = "blackpalm.png";
                    } else {
                        logoPalm.src = "palm-tree-48.png";
                    }
                    document.body.classList.toggle("dark-mode");
                }
            });

            const btnMore = document.querySelector(".btn-more");
            btnMore.addEventListener("mouseenter", (e) => {
                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;

                let ripples = document.createElement("span");
                ripples.classList.add("ripples");
                ripples.style.left = x + "px";
                ripples.style.top = y + "px";
                btnMore.appendChild(ripples);

                setTimeout(() => {
                    ripples.remove()
                }, 1000);
            })