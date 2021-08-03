class AppState {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  removeProject(project) {
    let index = this.projects.indexOf(project);
    if (index > -1) {
      this.projects.splice(index, 1);
    }
  }

  hideAll() {
    for (let i = 0; i < this.projects.length; i++) {
      let project = this.projects[i];
      project.hide();
    }
  }

  displayDefault() {
    this.projects[0].show();
  }
}

class Project {
  constructor(name, selectElement, tasksElement) {
    this.name = name;
    this.tasks = [];
    this.selectElement = selectElement;
    this.tasksElement = tasksElement;
  }

  remove() {
    this.tasksElement.remove();
  }

  show() {
    this.tasksElement.style.display = "flex";
  }

  hide() {
    this.tasksElement.style.display = "none";
  }
}

export { Project };
export default new AppState();
