const encrease = document.querySelector('.btnEncrease');
const reduce = document.querySelector('.btnReduce');
var header = document.getElementById('countHeader');
var counterValueOutput = document.getElementById('counter');

var counter = 0;

encrease.onclick = () => {
    if(counter <= 14){
    counter++;
    counterValueOutput.innerHTML = counter;
    header.style.color = "green";
    header.innerHTML = 'Counter';
}
else {
    header.style.color = "red";
    header.innerHTML = 'Feil';
    return;
}
}

reduce.onclick = () => {
    if(counter >= 1){
    counter--;
    counterValueOutput.innerHTML = counter;
    header.innerHTML = 'Counter';
}
else{
    header.innerHTML = 'Feil igjen';
    return;
}
}