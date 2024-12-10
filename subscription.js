const subscribe = document.getElementById("subscribe");


subscribe.addEventListener("click", () => {
    console.log("yo chat is this working");
    
    const fullName = document.getElementById("name").value.trim();
    const phone = document.getElementById("number").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
        
    
    if (fullName && phone && email && address) {
            
        if (!isNaN(fullName)) {

            alert("Please enter a valid Name!");
            document.getElementById("name").value = "";
            document.getElementById("name").focus();
        } else if (!/^\d{10}$/.test(phone)) {

            alert("Please enter a valid Phone Number");
            document.getElementById("number").value = "";
            document.getElementById("number").focus();
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

            alert("Please enter a valid Email");
            document.getElementById("email").value = "";
            document.getElementById("email").focus();
        } else {

            alert(`Contact Information Successfully Sent! Congratulations ${fullName} for subscribing to our premium catalogue!`);
            document.getElementById("name").value = "";
            document.getElementById("number").value = "";
            document.getElementById("email").value = "";
            document.getElementById("address").value = "";
        }
    } else {
            alert("All fields are required. Please make sure to complete the form before submitting.");
    }
    
});

