         //Change light-mode
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

            //Hovering cursor on elements
            const turnOnButton = document.querySelector(".turn-on");
            const turnOffButton = document.querySelector(".turn-off");
            const headline = document.querySelector(".headline");
            const subHeadline = document.querySelector(".sub-headline");
            const logo = document.querySelector(".logo");
            const navLabel = document.querySelector("label");
            const cursor = document.querySelector(".mouse");
            

            const animateCursor = ()=>{
                 cursor.classList.add("cursor-animate");
            }

            const removeAnimateCursor = ()=>{
                 cursor.classList.remove("cursor-animate");
            }
            headline.addEventListener("mouseenter",animateCursor)
            headline.addEventListener("mouseleave",removeAnimateCursor)
            subHeadline.addEventListener("mouseenter",animateCursor)
            subHeadline.addEventListener("mouseleave",removeAnimateCursor)
            logo.addEventListener("mouseenter",animateCursor)
            logo.addEventListener("mouseleave",removeAnimateCursor)
            navLabel.addEventListener("mouseenter",animateCursor)
            navLabel.addEventListener("mouseleave",removeAnimateCursor)
            turnOnButton.addEventListener("mouseenter",animateCursor); 
            turnOnButton.addEventListener("mouseleave",removeAnimateCursor);
            turnOffButton.addEventListener("mouseenter",animateCursor);
            turnOffButton.addEventListener("mouseleave",removeAnimateCursor);

           // Cursor
            window.addEventListener("mousemove",(e)=>{
                let x = e.clientX;
                let y = e.clientY;

                cursor.style.top = y ;
                cursor.style.left = x ;
            });

            // Focus state of nav-links

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

               link.addEventListener("mouseenter",animateCursor)
                link.addEventListener("mouseleave",removeAnimateCursor)
            })
             //Button More's hover
            const btnMore = document.querySelector(".btn-more");
            btnMore.addEventListener("mouseenter", (e) => {
                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;

                let ripples = document.createElement("span");
                ripples.classList.add("ripples");
                ripples.style.left = x + "px";
                ripples.style.top = y + "px";
                btnMore.appendChild(ripples);
                if (circleImage.src.endsWith("moon.png")) {
                        ripples.style.backgroundColor="white";
                }
               cursor.style.display = 'none';
                setTimeout(() => {
                    ripples.remove()
                }, 1000);
            })

             btnMore.addEventListener("mouseleave",()=>{
                 cursor.style.display = 'block';
             })


            
