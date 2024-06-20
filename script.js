// script.js
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#skills .skill').forEach(function (skill) {
        skill.addEventListener('dblclick', function () {
            alert('Detailed view of the skill: ' + skill.textContent);
        });
    });
});
