const form = document.getElementById("st_form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let mobile = document.querySelector("input[type='text'][placeholder='Enter mobile number']").value;

    let valid = true;

                                     //USERNAME VALIDATION
    // if (username === "") {
    //     document.getElementById("fullname").innerText = "Please enter full name";
    //     valid = false;
    // } else {
    //     document.getElementById("fullname").innerText = "";
    // }
    if (username.trim() === "") {
        document.getElementById("fullname").innerText = "Please enter full name";
        valid = false;
    }
    else if (!/^[A-Za-z]+$/.test(username)) {
        document.getElementById("fullname").innerText = "Please enter valid name";
        valid = false;
    }
    else {
        document.getElementById("fullname").innerText = "";
    }




                                        //EMAIL VALIDATION
    // if (email === "") {
    //     document.getElementById("emailaddress").innerText = "Please enter the email";
    //     valid = false;
    // } 
    // else if (!email.includes("@") || !email.includes(".")) {
    //     document.getElementById("emailaddress").innerText = "Please enter valid email";
    //     valid = false;
    // }
    // else {
    //     document.getElementById("emailaddress").innerText = "";
    // }
    if (email === "") {
        document.getElementById("emailaddress").innerText = "Please enter the email";
        valid = false;
    }
    else if (!/(^[a-z0-9@%.+-]+@[a-z#@]+\.[a-z]{2,})/i.test(email)) {
        document.getElementById("emailaddress").innerText = "Please enter valid email";
        valid = false;
    }
    else {
        document.getElementById("emailaddress").innerText = "";
    }



                                            //PASSWORD VALIDATUION
    // if (pass.length < 6) {
    //     document.getElementById("emailpassword").innerText = "Password must be at least 6 characters";
    //     valid = false;
    // }
    // else {
    //     document.getElementById("emailpassword").innerText = "";
    // }
    if (pass === "") {
        document.getElementById("emailpassword").innerText = "Please enter the email";
        valid = false;
    }
    else if (!/^.{6,}$/.test(pass)) {
        document.getElementById("emailpassword").innerText = "Password must be at least 6 characters";
        valid = false;
    }
    else {
        document.getElementById("emailpassword").innerText = "";
    }

    
                                                //MOBILE VALIDATUION    
    // if (mobile === "") {
    //     document.getElementById("mobileno").innerText = "Please enter Mobile number";
    //     valid = false;
    // } 
    // else if (mobile.length !== 10) {
    //     document.getElementById("mobileno").innerText = "Mobile number must be 10 digits";
    //     valid = false;  
    // } 
    // else {
    //     document.getElementById("mobileno").innerText = "";
    // }
    if (mobile === "") {
        document.getElementById("mobileno").innerText = "Please enter Mobile number";
        valid = false;
    } 
     else if (!/^[0-9]{10}/.test(mobile)) {
        document.getElementById("emailpassword").innerText = "mobile number must be 10 digits";
        valid = false;
    }
    else {
        document.getElementById("mobileno").innerText = "";
    }



                                                        //RESULT
    if (valid) {
        document.getElementById("Result").innerText = "Form submitted successfully!";
    }
});





















































































































