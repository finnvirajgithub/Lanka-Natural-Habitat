const form = document.querySelector("form"),
      allInputs = form.querySelectorAll(".first input");

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

let ul1 = document.getElementById("ul1");
let ul2 = document.getElementById("ul2");
let ul3 = document.getElementById("ul3");
let ul4 = document.getElementById("ul4");
let ul5 = document.getElementById("ul5");
let ul6 = document.getElementById("ul6");
let ul7 = document.getElementById("ul7");
let ul8 = document.getElementById("ul8");
let ul9 = document.getElementById("ul9");
let ul10 = document.getElementById("ul10");
let ul11 = document.getElementById("ul11");
let ul12 = document.getElementById("ul12");
let ul13 = document.getElementById("ul13");
let ul14 = document.getElementById("ul14");
let ul15 = document.getElementById("ul15");

autocomplete(input1,ul1);
autocomplete(input2,ul2);
autocomplete(input3,ul3);
autocomplete(input4,ul4);
autocomplete(input5,ul5);
autocomplete(input6,ul6);
autocomplete(input7,ul7);
autocomplete(input8,ul8);
autocomplete(input9,ul9);
autocomplete(input10,ul10);
autocomplete(input11,ul11);
autocomplete(input12,ul12);
autocomplete(input13,ul13);
autocomplete(input14,ul14);
autocomplete(input15,ul15);

function autocomplete(input,listElement){
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
                listElement.appendChild(listItem);
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

//Emailjs function for customize

function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        country : document.getElementById("country").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        arrivalDate : document.getElementById("arrivalDate").value,
        duration : document.getElementById("duration").value,
        count : document.getElementById("count").value,
        vehicle : document.getElementById("vehicle").value,
        day01 : document.getElementById("input1").value,
        day02 : document.getElementById("input2").value,
        day03 : document.getElementById("input3").value,
        day04 : document.getElementById("input4").value,
        day05 : document.getElementById("input5").value,
        day06 : document.getElementById("input6").value,
        day07 : document.getElementById("input7").value,
        day08 : document.getElementById("input8").value,
        day09 : document.getElementById("input9").value,
        day10 : document.getElementById("input10").value,
        day11 : document.getElementById("input11").value,
        day12 : document.getElementById("input12").value,
        day13 : document.getElementById("input13").value,
        day14 : document.getElementById("input14").value,
        day15 : document.getElementById("input15").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_rm60x8h","template_ghus0iq",params).then(alert("Your Plan Submitted Succesfully!"));
    form.reset()
}


