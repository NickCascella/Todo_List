import {createOtherTasks} from './other'
import appState, { Project } from './appState';
import './todo.css';



let newSelection = document.getElementById('selection')
let newProjectBtn = document.createElement('button')
newProjectBtn.classList = 'mainButtons'
newProjectBtn.textContent = 'Add Project +'
let projectOrder = true
let newProjectDiv = document.createElement('div')
newProjectDiv.id = 'projectFolder'
newProjectDiv.classList = 'newProjectDiv'

newProjectBtn.addEventListener('click', function createProj() {
    if(projectOrder === true){
    projectOrder = false
    let projectTitle = document.createElement('input')
    projectTitle.setAttribute('type', 'text')
    projectTitle.maxLength = '13'
    projectTitle.style.marginTop = '30px'
    projectTitle.addEventListener('keypress', function create(e){
        if(e.key === 'Enter'){
            appState.hideAll();
            let enteredTitle = document.createElement('button')
            enteredTitle.textContent = projectTitle.value
            enteredTitle.classList = 'mainButtons'
            newProjectDiv.appendChild(enteredTitle)
            let deleteProject = document.createElement('button')
            deleteProject.textContent = 'X'
            deleteProject.classList = 'deleteProj'
            deleteProject.addEventListener('click', function deleteInstance(){
                project.remove()
                appState.removeProject(project)
                newProjectDiv.removeChild(enteredTitle)
                newProjectDiv.removeChild(deleteProject)
                appState.hideAll()
                appState.displayDefault()
            })
            newProjectDiv.appendChild(deleteProject)
            newProjectDiv.removeChild(projectTitle)
            projectOrder = true
            let tasksElement = createOtherTasks();

            let project = new Project(projectTitle.value, enteredTitle, tasksElement);
            appState.addProject(project);

            enteredTitle.addEventListener('click', function selectMe(){
                appState.hideAll();
                project.show();
            })
        }
    })
    newProjectDiv.appendChild(projectTitle)
}
})


//creating general button
let generalBtn = document.createElement('button')
generalBtn.classList = 'mainButtons'
generalBtn.textContent = 'General'
let tasksElement = createOtherTasks();
let project = new Project('General', generalBtn, tasksElement);
appState.addProject(project);
generalBtn.addEventListener('click', function selectMe(){
    appState.hideAll();
    project.show();
})


newSelection.appendChild(generalBtn)
newSelection.appendChild(newProjectBtn)
newSelection.appendChild(newProjectDiv)

/*
let newSelection = document.getElementById('selection')
let newProjectBtn = document.createElement('button')
newProjectBtn.classList = 'mainButtons'
newProjectBtn.textContent = 'Add Project +'
let projectOrder = true
let newProjectDiv = document.createElement('div')
newProjectDiv.id = 'projectFolder'

newProjectBtn.addEventListener('click', function createProj() {
    if(projectOrder === true){
    projectOrder = false
    let projectTitle = document.createElement('input')
    projectTitle.setAttribute('type', 'text')
    projectTitle.style.marginTop = '30px'
    projectTitle.addEventListener('keypress', function create(e){
        if(e.key === 'Enter'){
            appState.hideAll();
            let enteredTitle = document.createElement('button')
            enteredTitle.textContent = projectTitle.value
            enteredTitle.classList = 'mainButtons'
            newProjectDiv.appendChild(enteredTitle)
            newProjectDiv.removeChild(projectTitle)
            projectOrder = true
            let tasksElement = createOtherTasks();

            let project = new Project(projectTitle.value, enteredTitle, tasksElement);
            appState.addProject(project);

            enteredTitle.addEventListener('click', function selectMe(){
                appState.hideAll();
                project.show();
            })
        }
    })
    newProjectDiv.appendChild(projectTitle)
}
})


//creating general button
let generalBtn = document.createElement('button')
generalBtn.classList = 'mainButtons'
generalBtn.textContent = 'General'
let tasksElement = createOtherTasks();
let project = new Project('General', generalBtn, tasksElement);
appState.addProject(project);
generalBtn.addEventListener('click', function selectMe(){
    appState.hideAll();
    project.show();
})


newSelection.appendChild(generalBtn)
newSelection.appendChild(newProjectBtn)
newSelection.appendChild(newProjectDiv)


*/