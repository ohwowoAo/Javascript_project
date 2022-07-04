window.addEventListener('load',function(){
    clockRun();
});

function clockRun(){
    let date = new Date;
    let second = date.getSeconds();
    let s_angle = second * 6; //1초가 6도
    let s_angle_value = "rotate(" + s_angle + "deg)";
    document.querySelector('.second').style.transform = s_angle_value;

    let minute = date.getMinutes();
    let m_angle = minute * 6; //1초가 6도
    let m_angle_value = "rotate(" + m_angle + "deg)";
    document.querySelector('.minute').style.transform = m_angle_value;

    let hour = date.getHours();
    if( hour < 12){
        hour = hour;
    }else{
        hour -= 12;
    }
    let h_angle = (hour * 30) + (30/60 * minute);
    let h_angle_value = "rotate(" + h_angle + "deg)";
    document.querySelector('.hour').style.transform = h_angle_value;

    setTimeout(clockRun, 1000);
}