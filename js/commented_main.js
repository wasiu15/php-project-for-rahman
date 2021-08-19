// GET THE ELEMENTS FROM THE DOM
var searchedInputElement = document.getElementById("getSearchInput");
var Fac_Element = document.getElementById("sel_faculty");
var dept_Element = document.getElementById("sel_department");

var matchedProjects = [],
  selected_DeptProjs = [],
  projectMatchCounter = 0;

// THIS HANDLES THE SEARCH EVENT
function submitHandler() {
  // GET THE SELECTED VALUES FROM THE DOM
  var searchedInput = searchedInputElement.value;
  var selectedFaculty = Fac_Element.options[Fac_Element.selectedIndex].text;
  var selectedDepartment =
    dept_Element.options[dept_Element.selectedIndex].text;

  // THIS CONDITION CHECK IF ALL FIELDS ARE FILLED
  if (validator(selectedFaculty, selectedDepartment, searchedInput)) {
    //    THIS FUNCTION GETS THE PROJECT LIST OF THE SELECTED DEPARTMENTS
    getDeptProj_List(listOfProjects, selectedFaculty, selectedDepartment);

    selected_DeptProjs.forEach((project) => {
      // LOOP THROUGH THE EXISTING PROJECT TO FIND MATCH WITH THE HELP OF findMatch function
      findMatch(project, searchedInput);
    });

    // THIS DECIDES IF THE PROJECT MATCH WAS FOUND OR NOT
    isMatchFound(matchedProjects.length);

    // THIS WILL POP UP IF THE SELECTED DEPARTMENT LIST IS NOT IN THE DATASTORE
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

// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS
// THE FUNCTIONS BELOW ARE HELPER-FUNCTIONS

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
  searchedInput = checkAndRemoveKeywords(searchedInput); //  THIS HELPS TO REMOVE THE COMMON WORDS LIKE; system, management, project, application and co

  // CLEAR THE VALUES OF THIS VARIABLES FOR THE NEXT CLICK
  projectMatchCounter = 0;
  let isSearchFound = false;

  //    THIS CONVERT THE STRING INPUT INTO ARRAY SO WE CAN LOOP THROUGH IT
  searchedInput.split(" ").map((eachWord) => {
    //  THIS SEARCH THE PROJECT-NAME FOR ANY MATCH AND REPEAT IT THROUHOUT THE LOOP
    if (project.name.search(eachWord + " ") > -1) {
      //  THE + " " IS USED TO ADD SPACE TO THE END OF THE WORDS SO THAT THE SEARCH WONT BREAK THE WORDS
      isSearchFound = true;
      projectMatchCounter++;
    }
  });
  isSearchFound && projectMatchCounter > 2
    ? matchedProjects.push(project)
    : "else_do_nothing"; //  THIS ADDS TO THE matchedProjects ARRAY IF isSearchFound = true
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
