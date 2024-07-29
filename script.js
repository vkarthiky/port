function showMenu() {
    document.getElementById('iphone-home').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
}

function showNextExperience(experienceId) {
    const experiences = document.querySelectorAll('.experience-card');
    experiences.forEach(exp => {
        exp.style.display = 'none';
    });
    document.getElementById(experienceId).style.display = 'flex';
}
