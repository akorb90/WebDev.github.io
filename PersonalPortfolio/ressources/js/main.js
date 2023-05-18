const infoTable = document.getElementById('infoTable')
const projects = document.getElementsByClassName('project')
const toggleButtonInfoTable = document.getElementById('toggleButtonInfoTable')
const toggleButtonProjects = document.getElementById('toggleButtonProjects')

toggleButtonInfoTable.addEventListener('click', function() {
    if (infoTable.style.display === 'none') {
        infoTable.style.display = 'block';
        toggleButtonInfoTable.innerHTML="Hide"
    }
    else {
        infoTable.style.display = 'none';
        toggleButtonInfoTable.innerHTML="Show"
    }
});

toggleButtonProjects.addEventListener('click', function() {
    for (i = 0; i < projects.length; i++) {
        if (projects[i].style.display === 'none') {
            projects[i].style.display = 'block';
            toggleButtonProjects.innerHTML="Hide"
        }
        else {
            projects[i].style.display = 'none';
            toggleButtonProjects.innerHTML="Show"
        }
    }
});

