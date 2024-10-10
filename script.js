const form = document.querySelector("form"),
      nextBtn = form.querySelector(".next"),
      backBtn = form.querySelector(".back"),
      allInputs = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
    allInputs.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive')
        }else{
            form.classList.add('secActive')
        }
    });
})

backBtn.addEventListener("click", () => {
    allInputs.forEach(input => {
        form.classList.remove('secActive')
    });
})
