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
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let input6 = document.getElementById("input6");
let input7 = document.getElementById("input7");
let input8 = document.getElementById("input8");
let input9 = document.getElementById("input9");
let input10 = document.getElementById("input10");
let input11 = document.getElementById("input11");
let input12 = document.getElementById("input12");
let input13 = document.getElementById("input13");
let input14 = document.getElementById("input14");
let input15 = document.getElementById("input15");

autocomplete(input1);
autocomplete(input2);
autocomplete(input3);
autocomplete(input4);
autocomplete(input5);
autocomplete(input6);
autocomplete(input7);
autocomplete(input8);
autocomplete(input9);
autocomplete(input10);
autocomplete(input11);
autocomplete(input12);
autocomplete(input13);
autocomplete(input14);
autocomplete(input15);

function autocomplete(input){
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
                // listItem.setAttribute("onclick", "displayNames('" + i + "')");
                listItem.classList.add("list-items");

                //display matched part in bold
                let word = "<b>" + i.substr(0, input.value.length) + "</b>";
                word += i.substr(input.value.length);
                
                //display the value in array
                listItem.innerHTML = word;
                listItem.addEventListener("click", () => {
                    displayNames(i); // On click, display the name in the input field
                })
                document.querySelector(".list").appendChild(listItem);
            }
        }
        function displayNames(value) {
            input.value = value; 
            removeElements();
        }
    });    
}

function removeElements() {
    //clear All elements
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    })
}