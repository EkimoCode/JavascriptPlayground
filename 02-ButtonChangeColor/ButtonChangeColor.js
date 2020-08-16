 let button=document.getElementById("yo");
 button.addEventListener('click', function randomColor(){
    let colorSet=[ 'red', 'blue', 'green', 'pink'];
    let index = Math.floor((Math.random() * 4));
    button.style.color=colorSet[index];
    console.log(index);
 });
