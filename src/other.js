let createOtherTasks = () => {
  let taskCheck = 0;
  let priorityCheck = false;
  let priorityValue = "";
  let sortArray = [];

  //creating task div logic
  function createTask() {
    if (taskCheck == 0) {
      //creating task div
      let newTask = document.createElement("div");
      newTask.classList = "task";

      //creating complete/remove task button
      let taskCompleted = document.createElement("button");
      taskCompleted.addEventListener("click", function removeTask() {
        displayGeneral.removeChild(newTask);
        taskCheck = 0;
      });
      let taskCancel = taskCompleted;
      taskCancel.textContent = "Cancel";
      taskCancel.classList = "taskCancel";

      //Entering each task logic
      let taskInput = document.createElement("input");
      taskInput.setAttribute("type", "text");
      taskInput.id = "taskField";
      taskInput.maxLength = "30";
      taskInput.placeholder = "Enter task here (30 Char Max)";
      taskInput.style.marginRight = "10px";
      taskInput.style.fontSize = "15px";
      let taskSubmit = document.createElement("button");
      taskSubmit.textContent = "Enter";
      taskSubmit.classList = "enterClick";
      taskSubmit.addEventListener("click", function enter() {
        if (
          document.getElementById("taskField").value === "" ||
          priorityCheck === false ||
          priorityValue === "NA"
        ) {
          return;
        } else {
          //priority color for div
          if (priorityValue === "low") {
            newTask.classList = "taskEnteredPriorityLow";
          } else if (priorityValue === "medium") {
            newTask.classList = "taskEnteredPriorityMedium";
          } else if (priorityValue === "high") {
            newTask.classList = "taskEnteredPriorityHigh";
          }
          //logging task text info
          let taskTextDiv = document.createElement("div");
          let taskText = document.getElementById("taskField").value;
          taskTextDiv.textContent = taskText;
          taskTextDiv.classList = "taskTextDiv";
          //creating print out for task
          let taskDateDiv = document.createElement("div");
          taskDateDiv.appendChild(taskDate);
          taskDateDiv.classList = "dateFormat";
          taskCompleted.textContent = "";
          taskCompleted.classList.remove("taskCancel");
          taskCompleted.classList = "completedTask";
          newTask.removeChild(taskInput);
          newTask.removeChild(taskSubmit);
          newTask.removeChild(taskCancel);
          newTask.removeChild(prioritySelect);
          newTask.appendChild(taskCompleted);
          newTask.appendChild(taskTextDiv);
          newTask.appendChild(taskDateDiv);
          sortArray.push(newTask);
          //logging task date / priority check info
          taskCheck = 0;
          priorityCheck = false;
          priorityValue = "";
        }
      });
      //entering date for task
      let taskDate = document.createElement("input");
      taskDate.setAttribute("type", "date");
      taskDate.classList = "firstDateClass";

      //creating dropdown menu for priority selection
      let prioritySelect = document.createElement("select");
      prioritySelect.placeholder = "Priority Level";
      prioritySelect.required;
      prioritySelect.classList = "prioritySelection";
      prioritySelect.addEventListener("click", function (e) {
        priorityCheck = true;
        priorityValue = e.target.value;
        console.log(e.target.value);
      });
      let priorityPlaceHolder = document.createElement("option");
      priorityPlaceHolder.setAttribute("value", "NA");
      let priorityPlaceHolderText = document.createTextNode(
        "Select Priority Level"
      );
      priorityPlaceHolder.appendChild(priorityPlaceHolderText);

      let priorityLow = document.createElement("option");
      priorityLow.setAttribute("value", "low");
      let priorityLowName = document.createTextNode("Low");
      priorityLow.appendChild(priorityLowName);

      let priorityMedium = document.createElement("option");
      priorityMedium.setAttribute("value", "medium");
      let priorityMediumName = document.createTextNode("Medium");
      priorityMedium.appendChild(priorityMediumName);

      let priorityHigh = document.createElement("option");
      priorityHigh.setAttribute("value", "high");
      let priorityHighName = document.createTextNode("High");
      priorityHigh.appendChild(priorityHighName);

      prioritySelect.appendChild(priorityPlaceHolder);
      prioritySelect.appendChild(priorityLow);
      prioritySelect.appendChild(priorityMedium);
      prioritySelect.appendChild(priorityHigh);

      //organizing by date code
      taskDate.addEventListener("change", function organize(event) {
        newTask.dateLog = event.target.value;
      });

      newTask.appendChild(taskCancel);
      newTask.appendChild(taskInput);
      newTask.appendChild(prioritySelect);
      newTask.appendChild(taskDate);
      newTask.appendChild(taskSubmit);
      displayGeneral.appendChild(newTask);
      taskCheck = 1;
    }
  }

  //general display creation
  let taskDisplayGeneral = document.getElementById("taskDisplay");
  let displayGeneral = document.createElement("div");
  displayGeneral.id = "generalDisplay";
  displayGeneral.classList = "display";

  //task creation button for general tab
  let generalTaskCreation = document.createElement("button");
  generalTaskCreation.textContent = "Add Task +";
  generalTaskCreation.addEventListener("click", createTask);
  generalTaskCreation.classList = "addTaskButton";
  //Appending
  displayGeneral.appendChild(generalTaskCreation);
  taskDisplayGeneral.appendChild(displayGeneral);
  return displayGeneral;
};

export { createOtherTasks };
