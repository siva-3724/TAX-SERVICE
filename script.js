
        const navbar = document.getElementById("navbar");
        const menuToggle = document.getElementById("menuToggle");
        const menuIcon = document.getElementById("menuIcon");

        // Mobile navigation toggle

        menuToggle.addEventListener("click", function () {
            const isOpen = navbar.classList.toggle("menu-open");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuIcon.innerHTML = isOpen ? "&times;" : "&#9776;";
        });

        // Close the mobile menu when a link is clicked

        document.querySelectorAll(".nav-links a").forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("menu-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
                menuIcon.innerHTML = "&#9776;";
            });
        });

        // Update copyright year automatically

        document.getElementById("currentYear").textContent =
            new Date().getFullYear();
   
            