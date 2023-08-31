console.log("usama")
let login_form_display = document.getElementById('login-btn');
let sign_form_display = document.getElementById('singup-btn');
let form_display = document.getElementById('form-display');
let btn_login = document.getElementById('btn-login');
let btn_sign = document.getElementById('btn-sign');
let name_class = document.getElementById('name');
let form_top = document.getElementById('form-top');


login_form_display.addEventListener('click',() =>{
        form_display.style.display="initial";
        name_class.style.display="none";
        form_top.innerHTML="Login For Free";
   
});
sign_form_display.addEventListener('click',() =>{
    form_display.style.display="initial";
    
})
