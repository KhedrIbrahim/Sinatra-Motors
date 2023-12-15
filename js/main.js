
    // Get the elements
    // const cardOne = document.getElementById('cardone');

    window.addEventListener('scroll', () => {

        const screenWidth = window.innerWidth;
        if (window.scrollY >= 400  && screenWidth > 768) {

            // cardOne.style.width = '50%';
        }else if (window.scrollY >= 400  && screenWidth < 768) {
            // cardOne.style.width = '100%';
        }

        if (window.scrollY >= 2450  && screenWidth > 768) {

            setTimeout(function() {
                // btnOneStep.style.cssText = "animation: change-btn-color 1s  ease-in-out;";
            }, 400);
            setTimeout(function() {
                // btnTwoStep.style.cssText = "animation: change-btn-color 1s  ease-in-out;";
            }, 800);
            setTimeout(function() {
                // btnThreeStep.style.cssText = "animation: change-btn-color 1s  ease-in-out;";
            }, 1200);

        }else if (window.scrollY >= 2500  && screenWidth < 768) {

            setTimeout(function() {
                // btnOneStep.style.cssText = "animation: change-btn-color 1s  ease-in-out;";
            }, 400);
            setTimeout(function() {
                // btnTwoStep.style.cssText = "animation: change-btn-color 1s  ease-in-out;";
            }, 800);
            setTimeout(function() {
                // btnThreeStep.style.cssText = "animation: change-btn-color 1s  ease-in-out;";
            }, 1200);

        }


    });