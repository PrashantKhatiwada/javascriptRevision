const endDate = "13 May 2024 00:00 AM";
document.getElementById("endDate").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end - now;
  const seconds = diff / 1000;
  inputs[0].value = Math.floor(seconds / (60 * 60 * 24))
  inputs[1].value = Math.floor((seconds/60/60)%60)
  inputs[2].value = Math.floor((seconds/60)%60)
  inputs[3].value = Math.floor((seconds)%60)



  
};

setInterval(()=>{
    clock()
},1000)