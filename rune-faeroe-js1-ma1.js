// Question 1
var cat = {
  complain: function() {
    console.log("Meow!");
  }
};

cat.complain();

// Question 2
const heading = document.querySelector("h3");

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subheading");

// Question 5
let paragraphs = document.querySelectorAll("p");

// Question 6
let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;

// Question 7
const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

function arrayOfCats(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}

arrayOfCats(cats);

// Question 8
function domArrayofCats(catArray) {
  let newHTML = ``;
  for (let i = 0; i < catArray.length; i++) {
    newHTML += `<h5>${cats[i].name}</h5>`;
  }
  return newHTML;
}

let myCatsArrayElements = domArrayofCats(cats);

// Question 9
function addToResultCats(catArray) {
  let newHTML = ``;
  for (let i = 0; i < catArray.length; i++) {
    newHTML += `<h5>${cats[i].name}</h5>`;
  }
  return newHTML;
}

resultsContainer.innerHTML += addToResultCats(cats);

// Question 10
function addAgeOfCats(catArray) {
  let newHTML = ``;
  let catAge;
  for (let i = 0; i < catArray.length; i++) {
    if (catArray[i].age) {
        catAge = catArray[i].age;
    } else {
      catAge = "Age unknown";
    }

    newHTML += `<div>
                      <h5>${cats[i].name}</h5>
                      <p>${catAge}</p>
                    </div>`;
  }

  return newHTML;
}

resultsContainer.innerHTML += addAgeOfCats(cats);
