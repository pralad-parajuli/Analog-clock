setInterval(()=>{
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    hrot=30*h+m/2;
    mrot=6*m;
    srot=6*s;
    hour.style.transform=`rotate(${hrot}deg)`;
    minute.style.transform=`rotate(${mrot}deg)`;
    second.style.transform=`rotate(${srot}deg)`;
    
})