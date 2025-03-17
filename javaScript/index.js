//start nav animation

var typed = new Typed("#elementtyped", {
    strings: ["Developer", "Freelancer", "Photographer", "Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
});
//end nav animation

// start nav drop
document.getElementById("navDrop").onclick = function () {
    var element = document.getElementById("navDrop");
    element.classList.replace("dropdown-toggle", "dropdown-toggle-show");
};

//end nav drop
function animateCounter(element, target) {
    let start = 0;
    const duration = 2000; // duration in milliseconds
    const step = target / (duration / 16); // approximate frame interval for 60fps

    function updateCounter() {
        start += step;
        if (start >= target) {
            element.innerText = target;
        } else {
            element.innerText = Math.floor(start);
            requestAnimationFrame(updateCounter);
        }
    }

    updateCounter();
}

document.addEventListener("scroll", function () {
    const counterSection = document.getElementById("experienceWork");
    const counters = document.querySelectorAll(".counter");

    if (counterSection.getBoundingClientRect().top < window.innerHeight) {
        counters.forEach((counter) => {
            if (counter.innerText === "0") {
                // Only animate if not already animated
                const target = parseInt(counter.getAttribute("data-target"));
                animateCounter(counter, target);
            }
        });
    }
});

// btn up
document.addEventListener("scroll", function () {
    const homeSection = document.getElementById("home");
    const scrollToTopButton = document.getElementById("scroll_up");

    // Check if the home section is in view
    if (homeSection.getBoundingClientRect().bottom < 0) {
        // If the user has scrolled past the home section, show the button
        scrollToTopButton.style.display = "block";
    } else {
        // Otherwise, hide the button
        scrollToTopButton.style.display = "none";
    }
});

// var friends = ["mena", "fawzy", "youssef", "kero", "karas", "tarek"];

// console.log(friends);

// function printFriends(nameArrey) {
//     for (let index = 0; index < nameArrey.length; index++) {
//         const userfriends = 1 + index + "- " + nameArrey[index];
//         console.log(userfriends);
//     }
// }
// function searchName(array, key) {
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (array[index] === key) {
//             const placeKey = {
//                 lengthArray: index,
//                 Name: element,
//             };
//             return placeKey;
//         }
//     }
// }

// printFriends(friends);
