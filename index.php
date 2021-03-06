<?php 
include "config.php";
?>
<!doctype html>
<html>
<head>
    <title>PROJECT & SEMINAL MG SYSTEM</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
    <link href="css/main.css" rel="stylesheet" />
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <script type="text/javascript">
        $(document).ready(function(){

            $("#sel_faculty").change(function(){
                var faculty_id = $(this).val();

                $.ajax({
                    url: 'getDepartment.php',
                    type: 'post',
                    data: {faculty_id:faculty_id},
                    dataType: 'json',
                    success:function(response){
                        
                        var len = response.length;
                        
                        $("#sel_department").empty();                        
                        for( var i = 0; i<len; i++){
                            var id = response[i]['id'];
                            var name = response[i]['name'];

                            $("#sel_department").append("<option value='"+id+"'>"+name+"</option>");

                        }
                    }
                });
            });

        });
    </script>
</head>
<body>


<div class="outer-body">
<h1>PROJECT & SEMINAL MG SYSTEM</h1>
    <div class="s003">
      <form>
        <div class="inner-form">
            <div class="input-field first-wrap">
                <div class="input-select">
                    <select class="select-style" id="sel_faculty" name="choices-single-defaul">
                            <option placeholder="">Select Faculty</option>                    
                        <?php 
                        // Fetch Department
                        $sql_faculty = "SELECT * FROM faculty";
                        $faculty_data = mysqli_query($con,$sql_faculty);
                        while($row = mysqli_fetch_assoc($faculty_data) ){
                            $faculty_id = $row['faculty_id'];
                            $faculty_name = $row['faculty_name'];
                        
                            // Option
                            echo "<option value='".$faculty_id."' >".$faculty_name."</option>";
                        }
                        ?>
                    </select>
                </div>
            </div>
            <div class="input-field first-wrap department-style">
                <div class="input-select">
                    <select class="select-style" id="sel_department" name="choices-single-defaul">
                        <option placeholder="">Select Department</option>
                    </select>
                </div>
            </div>
            <div class="input-field second-wrap">
                <input id="getSearchInput" type="text" placeholder="Enter Project Name..." />
            </div>
            <div class="input-field third-wrap">
                <button class="btn-search" onclick="submitHandler()" type="button">
                    <svg class="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                </button>
            </div>
        </div>
      </form>
    </div>
    <div id="alertDiv"></div>
    <div class="table-container" id="table-container">
        
      </div>


                    </div>
    
      <script src="js/extention/choices.js"></script>
    <script>
      const choices = new Choices('[data-trigger]',
      {
        searchEnabled: false,
        itemSelectText: '',
      });

    </script>
    <script src="js/dataSource.js"></script>
    <script src="js/table.js"></script>
    <script src="js/main.js"></script>
    <script src="js/alertBox.js"></script>
    <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
</html>