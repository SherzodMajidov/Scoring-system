"use strict";

let saveBtn = document.querySelectorAll("#save");

let scoreMassive = [];
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let score3 = document.querySelector(".score3");
let score4 = document.querySelector(".score4");
let score5 = document.querySelector(".score5");
let allScore = document.querySelectorAll(".allScore")
let overall = document.querySelector(".overall");
let myOverallMax = document.querySelector(".myOverallMax");
let myOverallMin = document.querySelector(".myOverallMin");
let numberGroup = document.querySelector(".numberGroup");
let maxScoreGroupIndex = 0;
if (scoreMassive.length === 0) {
  myOverallMax.innerHTML = 0;
  myOverallMin.innerHTML = 0;
}

numberGroup.innerHTML = 1;

let myScore1 = "";
allScore.forEach(input => {
  input.addEventListener("input", e => {
    if (e.target.value <= 10 && e.target.value>=0) {
      myScore1 = +e.target.value;
    } else {
      e.target.value = myScore1;
    }
    // console.log(e.target.value);
  });
});


saveBtn.forEach(btn => {
  btn.addEventListener("click", addScore);
});

function addScore() {
  if (
    myScore1 !== "" &&
    score2.value !== "" &&
    score3.value !== "" &&
    score4.value !== "" &&
    score5.value !== ""
  ) {
    scoreMassive.push({
      id: scoreMassive.length + 1,
      score1: +myScore1,
      score2: +score2.value,
      score3: +score3.value,
      score4: +score4.value,
      score5: +score5.value,
      overall:
        +myScore1 +
        +score2.value +
        +score3.value +
        +score4.value +
        +score5.value,
    });
    myScore1 = "";
    score1.value = "";
    score2.value = "";
    score3.value = "";
    score4.value = "";
    score5.value = "";
    for (let i = 0; i < scoreMassive.length; i++) {
      if (scoreMassive[i].overall > scoreMassive[maxScoreGroupIndex].overall) {
        maxScoreGroupIndex = i;
        myOverallMax.innerHTML = scoreMassive[i].overall;
      }
    }
    for (let i = 0; i < scoreMassive.length; i++) {
      if (scoreMassive[i].overall < scoreMassive[maxScoreGroupIndex].overall) {
        maxScoreGroupIndex = i;
        myOverallMin.innerHTML = scoreMassive[i].overall;
      }
    }

    numberGroup.innerHTML = scoreMassive.length + 1;
    getScore();
  }
}
addScore();

let tbody = document.querySelector("tbody");
let xit;
function getScore() {
  tbody.innerHTML = "";
  xit = "";
  for (let i = 0; i < scoreMassive.length; i++) {
    xit += `<tr>
        <th scope="row">${scoreMassive[i].id}</th>
        <td>
            <div>
                <button type="button" class="btn btn-success btn1" data-toggle="modal" data-target="#exampleModal">${scoreMassive[i].score1}</button>
                
            </div>
        </td>
        <td>
            <div>
                <button type="button" class="btn btn-success btn1" data-toggle="modal" data-target="#exampleModal">${scoreMassive[i].score2}</button>
                
            </div>
        </td>
        <td>
            <div>
                <button type="button" class="btn btn-success btn1" data-toggle="modal" data-target="#exampleModal">${scoreMassive[i].score3}</button>
                
            </div>
        </td>
        <td>
            <div>
                <button type="button" class="btn btn-success btn1" data-toggle="modal" data-target="#exampleModal">${scoreMassive[i].score4}</button>
                
            </div>
        </td>
        <td>
            <div>
                <button type="button" class="btn btn-success btn1" data-toggle="modal" data-target="#exampleModal">${scoreMassive[i].score5}</button>
            </div>
        </td>
        <td>
            <button type="button" class="btn btn-light btn1" data-toggle="modal" data-target="#exampleModal">${scoreMassive[i].overall}</button>
        </td>
        </tr>`;
  }
  tbody.innerHTML = xit;
}
getScore();

let counter = 0;
let save = document.querySelector("#save");
let close = document.querySelector(".close");
save.addEventListener("click", () => {
  counter++;
  if (counter === 4) {
    close.click();
    counter = 0;
  }
});





