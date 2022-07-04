let randomNum = Math.floor(Math.random() * 3) + 1;
document.querySelector("#wrap").classList.add("backG0" + randomNum); 



document.querySelector(".loginBtn").addEventListener("click", function(e){
    const id = document.querySelector(".id").value;
    const pass = document.querySelector(".pass").value;

    if(id === ''){
        e.preventDefault();
        alert("이메일을 입력해주세요");        
    }else if(pass === ''){
        e.preventDefault();
        alert("비밀번호를 입력해주세요");
    }else{
        localStorage.setItem("id", id);
        // window.location.replace('index.html');
        // const hasId = localStorage.getItem("id");
        // console.log(hasId);
        // document.querySelector('.idBox').innerText = "Hi," + hasId;
    }
})