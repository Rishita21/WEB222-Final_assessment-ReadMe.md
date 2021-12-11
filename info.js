function validation() {
    let email = document.getElementById("email").value;
    let Age = document.getElementById("age").value;
   
    // First Name and Last Name 
    let f_name = document.getElementById("first_name").value;
    let l_name = document.getElementById("last_name").value;
    var isUppercase = /^[A-Z]/;
    var letters = /^[A-Za-z]+$/;

    // Password Validation
    let password = document.getElementById("pswd").value;
    let confirm_p = document.getElementById("confirm").value;
    var p = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    //Username Validation
    let u_name = document.getElementById("user_name").value;
    var isAlphabet = /^[A-Za-z]/;

//validation for empty field........
    if (f_name == "" || l_name == "" || password == "" || confirm_p == "" || u_name == "" || email == "" || Age == "")
    {
        alert("No empty fields allowed!\n Enter value..");
        return false;
    }

    // First and Last Name Validation for first letter capital.......
    else if (!isUppercase.test(f_name) || !isUppercase.test(l_name)) {
        alert("First Letter should be Capitalized.\n Try Again..");
        return false;
    }

    //No number in names validation............
    else if (!letters.test(f_name) || !letters.test(l_name)) {
        alert("Only alphabets allowed for names.\n Try Again..");
        return false;
    }

        // validation for password's length....... 
    else if (password.length < 6 || u_name.length<6)
    {
        alert("Atleast 6 characters required for both passwords and usernames!\nTry again..");
        return false;
    }

    //specifications for creating the password..........
    else if (!passw.test(password) || !isUppercase.test(password)) {
         alert('Error! Passwords must start with an Alphabet, and must contain at least 1 digit, and 1 uppercase characters.\n Try Again..');
        return false;
    }

//Validation for comparing the passwords.........
    else if (password != confirm_p)
    {
         alert("Warning! Password and Confirm Password Values doesn't match\n Try Again..");
        return false;
    }

    //Username validation................
    else if (!isAlphabet.test(u_name)) {
        alert("Error: Username must start with alphabets!\n Try Again!!!");

        return false;
    }
     
    else 
    { 
        return true; 
    }

}