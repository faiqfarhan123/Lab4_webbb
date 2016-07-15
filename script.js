function create_a_form() {
    var person = prompt("Please enter your form name", "My Form");
    if (person != null) {
        document.getElementById("demo").innerHTML = person ;
    }
    $("#create_form").hide();
    $("#input-name").show();
    $("#password-name").show();
    $("#select-name").show();
}


function name_input() {
	var input_label = prompt("Please enter your reuqired label", "Full Name");
    if (input_label != null) {
        document.getElementById("nameinput").label = input_label ;
    }

    var person_name = prompt("Please enter your full name", "Faiq Farhan");
    if (person_name != null) {
        document.getElementById("nameinput").value = person_name ;
    }
    $(".form").append(input_label+":<input id='nameinput "+"' "+"value='"+person_name+ "' ></input><br/>");
    
    // $("#name-label").show();
}
function password_input() {
	var password_label = prompt("Please enter your reuqired label", "Password_");
    if (password_label != null) {
        document.getElementById("passwordinput").label = password_label ;
    }

    var password = prompt("Please enter your Password_", "abcdef");
    if (password != null) {
        document.getElementById("passwordinput").value = password ;
    }
    $("#password-label").show();
}

function select_input() {
	var select_label = prompt("Please enter your reuqired label", "Select");
    if (select_label != null) {
        document.getElementById("selectbasic").label = select_label ;
    }

    var select_value = prompt("Please enter your Value", "abcdef");
    if (select_value != null) {
        document.getElementById("selectbasic").selectedIndex  = select_value ;
    }

    $(".form").append(select_label+":<select id='selectbasic' name='selectbasic' "+"' "+"selectedIndex ='"+select_value+ "' ></select><br/>");

    $("#select").show();
}

$(window).load(function() {
 
    $("#name-label").hide();
    $("#password-label").hide();
    $("#select").hide();
    $("#input-name").hide();
    $("#password-name").hide();
    $("#select-name").hide();
});

function createJSON() {
    jsonObj = [];
    $("input[id=name-label]").each(function() {

        var label = $(this).attr("Label:");
        var value = $(this).val();

        item = {}
        item ["label"] = label;
        item ["value"] = value;

        jsonObj.push(item);
    });

    console.log(jsonObj);
}