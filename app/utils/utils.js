// Helper functions

// Skills level animation
export function skillsLevelAnimation(e) {
    let parentElement = document.getElementsByClassName('skills')[0],
        skillElement = document.getElementsByClassName('skills__level'),
        valueElement = document.getElementsByClassName('skills__value'),
        parentElementYOffset = parentElement.getBoundingClientRect().top,
        windowYOffset = window.scrollY,
        skillValue = [71, 90, 83];

    if (windowYOffset > parentElementYOffset) {
        var valueIndex = 0, skillIndex = 0;

        [...skillElement].forEach(item => {
            item.style.width = `${skillValue[skillIndex] - 7}%`;
            skillIndex += 1;
        });

        [...valueElement].forEach(item => {
            for (let j = 0; j <= skillValue[valueIndex]; j++) {
                setTimeout(function() {
                    item.innerHTML = `${j}%`;
                }, j * 31);
            }
            valueIndex += 1;
        });
        document.removeEventListener('scroll', skillsLevelAnimation);
    }
}

// Show full experience information
export const fullExperience = (index) => {
    let activeElement = document.getElementsByClassName('experience__responsibility')[index];

    activeElement.style.height = '100%';
}