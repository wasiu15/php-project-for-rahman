var searchedInputElement = document.getElementById("getSearchInput");
var Fac_Element = document.getElementById("sel_faculty");
var dept_Element = document.getElementById("sel_department");
var matchedProjects = [],
  selected_DeptProjs = [],
  projectMatchCounter = 0;

function submitHandler() {
  var searchedInput = searchedInputElement.value;
  var selectedFaculty = Fac_Element.options[Fac_Element.selectedIndex].text;
  var selectedDepartment =
    dept_Element.options[dept_Element.selectedIndex].text;

  if (validator(selectedFaculty, selectedDepartment, searchedInput)) {
    getDeptProj_List(listOfProjects, selectedFaculty, selectedDepartment);

    selected_DeptProjs.forEach((project) => {
      findMatch(project, searchedInput);
    });

    isMatchFound(matchedProjects.length);

    if (selected_DeptProjs.length == 0) {
      alert(
        "Project List was not found for this department... Please update your API. Thanks"
      );
    } else {
      sendDataToTable(matchedProjects, selected_DeptProjs);
    }
    (matchedProjects = []), (selected_DeptProjs = []);
  } else {
    alert("Kindly, enter all fields before submitting");
  }
}

function getDeptProj_List(allProjectList, selectedFaculty, selectedDepartment) {
  allProjectList.forEach((faculty_proj) => {
    if (faculty_proj.faculty == selectedFaculty) {
      faculty_proj.departments.forEach((dept_proj) => {
        if (dept_proj.department == selectedDepartment) {
          selected_DeptProjs = dept_proj.projects;
        }
      });
    }
  });
}

function findMatch(project, searchedInput) {
  searchedInput = checkAndRemoveKeywords(searchedInput);

  projectMatchCounter = 0;
  let isSearchFound = false;

  searchedInput.split(" ").map((eachWord) => {
    if (project.name.search(eachWord + " ") > -1) {
      isSearchFound = true;
      projectMatchCounter++;
    }
  });
  isSearchFound && projectMatchCounter > 2
    ? matchedProjects.push(project)
    : "else_do_nothing";
}

function checkAndRemoveKeywords(input) {
  ignoreThisKeywords.forEach((keyword) => {
    if (input.search(keyword) > -1) {
      input = input.replaceAll(keyword, "");
    }
  });
  return input;
}

function isMatchFound(numberOfMatch) {
  if (numberOfMatch > 0) {
    console.log("Project Found");
  } else {
    console.log("Project Type not found so Its new");
  }
}

function validator(faculty, department, input) {
  if (
    faculty != "Select Faculty" &&
    department != "Select Department" &&
    input != ""
  ) {
    return true;
  }
}

function sendDataToTable(similarProjects, allProjects) {
  if (similarProjects.length != 0) {
    showAlert(
      "Similar Project was found in the previous record",
      "alert-danger"
    );
    tableCreate(similarProjects, "Similar");
  } else {
    showAlert(
      "Your project topic does not exist in past record",
      "alert-success"
    );
    tableCreate(allProjects, "All");
  }
}
