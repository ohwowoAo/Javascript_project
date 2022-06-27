const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(e){
    e.preventDefault();
    const username = loginInput.value; 
    loginForm.classList.add("hidden");
    console.log(username);
    localStorage.setItem("username", username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = 'Hello' + username;
    greeting.classList.remove("hidden");
};

const hasname = localStorage.getItem("username");

if(localStorage.getItem("username") === null ){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    paintGreetings(hasname);
}

//onLoginBtnClick() 를 붙이면 즉시 실행한다는 뜻.