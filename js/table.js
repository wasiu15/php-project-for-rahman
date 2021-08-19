function tableCreate(projectList, projectList_type) {
  var thead = `<h3 class="projectList-info">List Of ${projectList_type} Projects"</h3>
                <thead>
                    <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">FACULTY</th>
                    <th scope="col">DEPARTMENT</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">TEAM</th>
                    <th scope="col">TIME</th>
                    <th scope="col">DESCRIPTION</th>
                    </tr>
                </thead>`;

  var table_container = document.getElementById("table-container"),
    tableString = `<table class="table table-bordered"><tbody id="table-body">`,
    rowCounter = 1;
  tableString += thead;
  projectList.forEach((project) => {
    tableString += "<tr>";
    tableString += "<th scope='row'>" + rowCounter + "</th>";
    tableString += "<td>" + project.faculty + "</td>";
    tableString += "<td>" + project.department + "</td>";
    tableString += "<td>" + project.name + "</td>";
    tableString += "<td>" + project.team + "</td>";
    tableString += "<td>" + project.time + "</td>";
    tableString += "<td>" + project.description + "</td>";
    tableString += "</tr>";
    rowCounter++;
  });

  tableString += `</tbody></table>`;
  table_container.innerHTML = tableString;
}
