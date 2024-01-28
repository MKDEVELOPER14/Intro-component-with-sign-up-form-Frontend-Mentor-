checkState();

function checkState(){
    document.addEventListener("readystatechange",(event)=>{
        if(event.target.readyState==="complete"){
            console.log("complete");
            initApp();
        }
        else{
            checkState();
        }
    })
}

function initApp(){
    
    const clickbtn = document.getElementById("btn");
    clickbtn.addEventListener("click",(event)=>{
        event.preventDefault();
        firstNameCheck();
        lastNameCheck();
        emailCheck();
        passworCheck();
        // console.log(FirstNameResponse);
    }); 
}

function firstNameCheck(){
    const firstNameText = document.getElementById("FirstName");
    if(firstNameText.value==""){
        // console.log("its empty");
        if(firstNameText.classList.contains("errorInput")== true){
            firstNameText.classList.remove('errorInput');
            
        }
        else{
            firstNameText.classList.add('errorInput');
            document.getElementById("error1").style.display="block";
            document.getElementById("errorFName").style.display="block";
            firstNameText.classList.remove('correctInput');
        }
    }
    else{
        console.log(firstNameText.value);
            if(firstNameText.classList.contains("correctInput")==true){
             firstNameText.classList.remove('correctInput');

       }
       else{
            document.getElementById("error1").style.display="none";
            document.getElementById("errorFName").style.display="none";
            firstNameText.classList.remove('errorInput');
            firstNameText.classList.add('correctInput');
       }
    }


}
function lastNameCheck(){
    const LastNameText = document.getElementById("LastName");
    if(LastNameText.value==""){
        // console.log("its empty");
        if(LastNameText.classList.contains("errorInput")== true){
            LastNameText.classList.remove('errorInput');
            
        }
        else{
            LastNameText.classList.add('errorInput');
            document.getElementById("error2").style.display="block";
            document.getElementById("errorLName").style.display="block";
            LastNameText.classList.remove('correctInput');
        }
    }
    else{
        console.log(LastNameText.value);
       if(LastNameText.classList.contains("correctInput")==true){
        LastNameText.classList.remove('correctInput');

       }
       else{
        document.getElementById("error2").style.display="none";
            document.getElementById("errorLName").style.display="none";
            LastNameText.classList.remove('errorInput');
            LastNameText.classList.add('correctInput');
       }
    }
}
function emailCheck(){
    const emailText = document.getElementById("email");
    if(emailText.value==""){
        
        // console.log("its empty");
        if(emailText.classList.contains("errorInput")== true){
            emailText.classList.remove('errorInput');
            
        }
        else{
            emailText.classList.add('errorInput');
            document.getElementById("error3").style.display="block";
            document.getElementById("errorEmail").style.display="block";
            emailText.classList.remove('correctInput');
        }
    }
    else{
        console.log(emailText.value);
       if(emailText.classList.contains("correctInput")==true){
        emailText.classList.remove('correctInput');

       }
       else{
        document.getElementById("error3").style.display="none";
            document.getElementById("errorEmail").style.display="none";
        emailText.classList.remove('errorInput');
        emailText.classList.add('correctInput');
        
       }
    }
}
function passworCheck(){
    const passwordText = document.getElementById("Password");
    if(passwordText.value==""){
        // console.log("its empty");
        if(passwordText.classList.contains("errorInput")== true){
            passwordText.classList.remove('errorInput');
        }
        else{

            passwordText.classList.add('errorInput');
            document.getElementById("error4").style.display="block";
            document.getElementById("errorPass").style.display="block";
            passwordText.classList.remove('correctInput');
        }
    }
    else{
        console.log(passwordText.value);
       if(passwordText.classList.contains("correctInput")==true){
        passwordText.classList.remove('correctInput');

       }
       else{
        document.getElementById("error4").style.display="none";
            document.getElementById("errorPass").style.display="none";
            passwordText.classList.remove('errorInput');
            passwordText.classList.add('correctInput');
       }
    }
}