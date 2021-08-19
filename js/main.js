var departmentElement = document.getElementById("departmentSelector");

for (var age = 12; age <= 100; age++) {
}

function facultyOnChangeHandler(){
    
    
    
        $(function () {
            var selectMenus = $('#facultySelector, #departmentElement');
            $.each(selectMenus, function () {
                $(this).change(function () {
                    //var selectedVal = 
                    $('#departmentElement').val($('#facultySelector option:selected').val());
                });
            });


        });




    var facultyElement = document.getElementById("facultySelector");
    var selectedFaculty=facultyElement.options[facultyElement.selectedIndex].value;// get selected option value
    
    //departmentElement.options = getDepartments(selectedFaculty);
    
    
        var example_array = {
            ValueA : 'Text A',
            ValueB : 'Text B',
            ValueC : 'Text C'
        };
    
}

function getDepartments(faculty){
    if(faculty == "Science"){
        console.log(faculty)
        return ["Computer Science", "Mechanical Engineering","Food & Nut", "Phamacy"]
    } else if(faculty == "Art") {

    }
}