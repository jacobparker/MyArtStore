/* Validate all fields are not empty and passwords match */

function validateAccount() {
    var createAccount = document.getElementById("firstName").value;
    if (createAccount === null || createAccount === "") {
        alert("First name is required");
        return false;
    }
    
    var createAccount = document.getElementById("lastName").value;
    if (createAccount === null || createAccount === "") {
        alert("Last name is required");
        return false;
    }
    
    var createAccount = document.getElementById("email").value;
    if (createAccount === null || createAccount === "") {
        alert("Valid Email Address is required");
        return false;
    }
    
    var createAccount = document.getElementById("username").value;
    if (createAccount === null || createAccount === "") {
        alert("Valid Username is required");
        return false;
    }
    
    var createAccount = document.getElementById("password").value;
    if (createAccount === null || createAccount === "") {
        alert("Valid Password is required");
        return false;
    }
    
    var createAccount = document.getElementById("confirmPassword").value;
    if (createAccount === null || createAccount === "") {
        alert("Valid Confirm Password is required");
        return false;
    }
    
    var firstPassword = document.getElementById("password").value;
    var secondPassword = document.getElementById("confirmPassword").value;
    if (firstPassword !== secondPassword) {
        alert("Passwords must match");
        return false;
    }

    return true;
}



/*Create drop-down menu for exhibitions page */
function showExhibitionsSubMenu() {
    document.getElementById("exhibitionsDropDown").classList.toggle("show");
}

/*Create drop-down menu for about page */
function showAboutSubMenu() {
    document.getElementById("aboutDropDown").classList.toggle("show");
}

function fetchCategory(name) {
    if (name.length === 0) {
        return;
    }
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            document.getElementById("category").innerHTML = 
                request.responseText;
        }
    };
    request.open("POST", "Category.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("category=" + name);

}

function submitComment() {
    var comment = document.getElementById("commentId").value;
    if (comment == null || comment == "") {
        alert("A comment must be supplied");
        return false;
}

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
        var text = request.responseTest;
        var parser = new DOMParser();
        var parsedXML = parser.parseFromString(text, "text/xml");
        var datetime = parsedXML.getElementsByTagName("datetime")[0].childNodes[0].nodeValue;
        var comment = parsedXML.getElementsByTagName("comment")[0].childNodes[0].nodeValue;
        var table = document.getElementById("commentsTbl");
        var newRow = table.insertRow(1);
        var newCell = newRow.insertCell(0);
        newCell.innerHTML = datetime;
        newCell = newRow.insertCell(1);
        newCell.innerHTML = comment;
    }
  }
  //submit the request to the server
  request.open("POST", "ProcessCommissionDateTime.php", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send("comment=" + comment);
  document.getElementById("commentId").value = "";
    
}