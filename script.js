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

// select cities

let names = ["Adam's Peak",
             "Ahungalla",
             "Anuradhapura",
             "Arugam Bay",
             "Bentota",
             "Bundala",
             "Badulla",
             "Colombo",
             "Dambulla",
             "Dickwella",
             "Ella",
             "Galle",
             "Habarana",
             "Haputale",
             "Hikkaduwa",
             "Horton Plains",
             "Jaffna",
             "Kalpitiya",
             "Kandy",
             "Kataragama",
             "Katunayake",
             "Koggala",
             "Knuckles",
             "Kitulgala",
             "Mahiyangaya",
             "Marawila",
             "Matara",
             "Mattala",
             "Mihintale",
             "Mirissa",
             "Mount lavinia",
             "Negombo",
             "Nuwara-Eliya",
             "pasikudah",
             "Pinnawala",
             "Polonnaruwa",
             "Sigiriya",
             "Sinharaja",
             "Tangalle",
             "Trincomalee",
             "Tissamaharama",
             "Udawalawa",
             "Unawatuna",
             "Weligama",
             "Wilpattu",
             "Yala"
            ]

// Sort names in ascending order
let sortedNames = names.sort();

//referance
let input = document.getElementById("input");

//execute function on keyup 
input.addEventListener("keyup", (e) => {
    //loop through above array

    //Initially remove all elements. 
    removeElements();

    for(let i of sortedNames){
        //convert input to lowercase and compare with each string
        if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
            //create li element
            let listItem = document.createElement("li");
            //one common class name
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");

            //display matched part in bold
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);
            
            //display the value in array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});

function displayNames(value) {
    input.value = value; 
    removeElements();
}

function removeElements() {
    //clear All elements
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    })
}
