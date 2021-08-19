var listOfProjects = [
  {
    name: "attendance management system",
    description: "desc1",
    team: ["name1", "name2", "name3"],
    faculty: "Science",
    department: "Computer Science",
    time: "",
  },
  {
    name: "windows operating system",
    description: "desc3",
    team: ["name1", "name2", "name3"],
    faculty: "Law",
    department: "Add Law",
    time: "",
  },
  {
    name: "phone calculator app",
    description: "desc3",
    team: ["name1", "name2", "name3"],
    faculty: "Education",
    department: "Add Education",
    time: "",
  },
];
var ignoreThisKeywords = [
  "system",
  "management",
  "project",
  "admin",
  "add more...",
];

var matchedProjects = [],
  projectMatchCounter = 0;

// THIS HANDLES THE SEARCH EVENT
// THIS HANDLES THE SEARCH EVENT
function submitHandler() {
  // GET THE PROJECT NAME FROM THE SEARCH BOX
  var searchedInput = document.getElementById("getSearchInput").value;
  // LOOP THROUGH THE EXISTING PROJECT TO FIND MATCH WITH THE HELP OF findMatch function
  listOfProjects.forEach((project) => {
    findMatch(project, searchedInput);
  });
  console.log(matchedProjects);

  // THIS DECIDES IF THE PROJECT MATCH WAS FOUND OR NOT
  isMatchFound(projectMatchCounter);
  // CLEAR THE VALUES OF THIS VARIABLES FOR THE NEXT CLICK
  (matchedProjects = []), (projectMatchCounter = 0);
}

function findMatch(project, searchedInput) {
  searchedInput = checkAndRemoveKeywords(searchedInput); //  THIS HELPS TO REMOVE THE COMMON WORDS LIKE; system, management, project, application and co

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
  isSearchFound ? matchedProjects.push(project) : "else_do_nothing"; //  THIS ADDS TO THE matchedProjects ARRAY IF isSearchFound = true
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
  if (numberOfMatch > 1) {
    console.log("Project Found");
  } else {
    console.log("Project Type not found so Its new");
  }
}
