

function validation() {
    
    const fullName = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phonenumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const property = document.getElementById("property").value.trim();
    const description = document.getElementById("description").value.trim();

    if (fullName && phone && email && description && property) {
        
        if (!isNaN(fullName)) {
            alert("Please enter a valid Name!");
            document.getElementById("fullname").value = "";
            document.getElementById("fullname").focus();
        } 
       
        else if (!/^\d{10}$/.test(phone)) {
            alert("Please enter a valid Phone Number");
            document.getElementById("phonenumber").value = "";
            document.getElementById("phonenumber").focus();
        } 
       //use regex instead cuz yea same for ^
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid Email");
            document.getElementById("email").value = "";
            document.getElementById("email").focus();
        } 
        
        else if (isNaN(property)) {
            alert("Please enter a valid Property ID");
            document.getElementById("property").value = "";
            document.getElementById("property").focus();
        } 
        
        else {
            alert("Contact Information Successfully Sent!");
            document.getElementById("fullname").value = "";
            document.getElementById("phonenumber").value = "";
            document.getElementById("email").value = "";
            document.getElementById("description").value = "";
            document.getElementById("property").value = "";
        }
    } else {
        alert("All fields are required. Please make sure to complete the form before submitting.");
    }
}



function SetCookies(imagePath, name) {
    document.cookie = "imagePath=" + imagePath + "|name=" + name;
}

function GetCookies() {
const agents = document.getElementById("agents");
agents.innerHTML = "";
agents.innerHTML = `
    <h2 style="text-align: center; margin-bottom: 5%">YOUR AGENT</h2>
`;

var arr = document.cookie.split("|");
for (var i = 0; i < arr.length; i++) {
    var sarr = arr[i].split("=");

    if (i == 0) {
        agents.innerHTML += `
            <img src="${sarr[1]}">
        `;
    } else {
        agents.innerHTML += `
            <h4 style="text-align: center; background-color: rgba(255, 255, 255, 30%); margin-top: 20px;">${sarr[1]}</h4>
        `;
    }
    }   
}



