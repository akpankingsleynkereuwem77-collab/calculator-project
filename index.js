const buttonVariable = document.querySelectorAll(".calculator-button");
console.log(buttonVariable)
const displayScreenVariable = document.querySelector(".display-value");
console.log(displayScreenVariable);
const convertButtonVariable = Array.from(buttonVariable);
console.log(convertButtonVariable);
convertButtonVariable.forEach(function(btn){
    console.log(btn);
    btn.addEventListener("click",function(){
        if(btn.innerHTML === "C"){
            displayScreenVariable.innerHTML = "";

        }else if(btn.innerHTML === "DEL"){
              displayScreenVariable.innerHTML = displayScreenVariable.innerHTML.slice(0,-1);
        }else if(btn.innerHTML === "="){
              displayScreenVariable.innerHTML = eval(displayScreenVariable.innerHTML);
        }else{
            displayScreenVariable.innerHTML += btn.innerHTML;
        };
    });
});
