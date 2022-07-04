const hasId = localStorage.getItem('id');
console.log(hasId);
document.querySelector('.hiBox span:first-child').innerText = "안녕," + hasId ;
if(hasId === null){
    window.location="./login.html"
}


/* 왼쪽 아이콘 */
/* 로그아웃 */
document.querySelector(".logOut").addEventListener("click", function(){
    localStorage.removeItem(hasId);
    window.location="./login.html"
});

/* 다크아이콘 */
document.querySelector('.darkBtn').addEventListener("click", function(){
    let darkIconName = document.querySelector(".darkBtn > i");
    if( darkIconName.classList.contains("fa-moon")){
        document.getElementById("wrap").classList.add("dark");
        darkIconName.classList.remove("fa-moon");
        darkIconName.classList.add("fa-sun");
    }else{
        document.getElementById("wrap").classList.remove("dark");
        darkIconName.classList.remove("fa-sun");
        darkIconName.classList.add("fa-moon");
    }
});

/* 감추기아이콘 */
document.querySelector('.hiddenBtn').addEventListener("click",function(){
    document.querySelector('.centerArea ').classList.toggle('opacity0');
    document.querySelector('.rightArea ').classList.toggle('opacity0');
    document.querySelector('.hiddenBtn').classList.toggle('trans');
})
