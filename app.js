const calcNumbers = (result) => {
    form.displayResult.value=form.displayResult.value+result;
}
const clearScreen = () =>{
    form.displayResult.value = "";
}

const clearSingle = () =>{
    const x = form.displayResult.value;
    form.displayResult.value = x.substr(0, x.length - 1);
}

document.querySelector('.sqrt').addEventListener('click',()=>{
    form.displayResult.value = Math.sqrt(form.displayResult.value)
})
