
let percent = 0;
let summ = 0;
let count = 0;
function changePercentNo(){
    count+=1;
    percent = Math.round((summ/count)*10)/10;
    console.log("summ="+summ+" count="+count+"percent="+percent);
    document.getElementById('percentBar').innerText = percent;
    document.getElementById('progress-bar').value=percent
}
function changePercentYes(){
    count+=1;
    summ+=100
    percent = Math.round((summ/count)*10)/10;
    console.log("summ="+summ+" count="+count+"percent="+percent);
    document.getElementById('percentBar').innerText = percent;
    document.getElementById('progress-bar').value=percent
}
