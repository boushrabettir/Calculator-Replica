const output = document.getElementById('display');
const inputBtn = document.querySelectorAll('button').forEach((button) => {
  button.onclick = () => { // for each button click
    if(button.id === 'backspace'){
        let theinput = output.innerHTML.toString();
        output.innerHTML = theinput.substr(0, theinput.length - 1); // we can look at the length of the entire string or input, then minues the number input every time the button was clicked.
    } else if (button.id === 'clear') {
        output.innerHTML = '';
    } else if (button.id === 'equal' && output.innerHTML !== '') {
      output.innerHTML = (eval(output.innerText)).toFixed(3);
    } else {
      output.innerHTML += button.id; // for all the other numbers
    }
  }
});
/* MY NOTES
* the query selector all is strictly targetting all tag names with <button>
* specifically doing the clear backspace and equal buttons in this function because they have specific needs
* the equal button will just know what to evaluate according to the buttons id!
* side-note: originally had classes -- didnt work. research later why.
*/