

const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const greenCheckMark = document.getElementById("greenCheckMark");
const redWrongMark = document.getElementById("redWrongMark")

greenCheckMark.remove();
redWrongMark.remove();

const numberRegex = /1?\s?(\d{3}[\s\-]?|\(\d{3}\)\s?)\d{3}[\s\-]?\d{4}/;       //* ispod.

const inputCheck = () => {
    if (input.value === "") {
        alert("Please provide a phone number");
    } else if (input.value.match(numberRegex) === null || input.value !== input.value.match(numberRegex)[0]) {
        result.textContent = `Invalid US number: ${input.value}`;
        result.prepend(redWrongMark);
    }
     else  {                                                 
        result.textContent = `Valid US number: ${input.value.match(numberRegex)[0]}`
        result.prepend(greenCheckMark);           
    }
}    //Nije moglo samo input.value===numberRegex. Ivde ima sa cime regex koristim...(ctrl+f) "Using regular expressions in JavaScript" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions 


const removeInputAndResult = () => {
    input.value = "";
    result.textContent = "";
}


check.addEventListener("click", inputCheck);
clear.addEventListener("click", removeInputAndResult);

input.addEventListener("keydown", (e) => {          //Ovde moram event listener na input element da dodam. Gore sam zadao sta je input.
    if (e.key === "Enter") {
        inputCheck();
    }
  });

input.addEventListener("keydown", (e) => {          
    if (e.key === "Delete") {
        removeInputAndResult();
    }
  });





// *
// const numberRegex = /1?\s?(\d{3}[\s\-]?|\(\d{3}\)\s?)\d{3}[\s\-]?\d{4}/;
// 1?                              -trazi "1" ali je optional (znaci trazi "1" da se pojavljuje jednom ili nula puta).
// \s?                             -trazi razmak ali je optional.
// (\d{3}[\s\-]?|\(\d{3}\)\s?)     -trazi trocifreni broj posle koga ide razmak ili crta(povlaka) ali optional, to je ovaj deo "\d{3}[\s\-]?" ispred "|" ili trazi trocifreni broj u zagradi posle koga ide razmak ali optional. To je ovaj deo "\(\d{3}\)\s?".
// \d{3}[\s\-]?                    -trazi trocifreni broj posle koga ide razmak ili crta(povlaka) ali optional.
// \d{4}                           -trazi cetvorocifreni broj.