const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByTagName('button'));
// console.log(buttons);
let stringValue = '';
let stringText = '';
buttons.forEach(button => {
  button.addEventListener('click', input => {
    // console.log(button.value);
    switch (button.value) {
      case 'c':
        stringText = '';
        stringValue = '';
        break;
      case 'bs':
        stringText = stringText.slice(0, -1);
        stringValue = stringValue.slice(0, -1);
        break;
      case '=':
        try {
          //   display.innerText = eval(stringValue);
          stringText = eval(stringValue);
          //   console.log(eval(stringValue));
          stringValue = eval(stringValue);
        } catch {
          stringText = 'Error!';
        }
        break;
      default:
        stringValue += button.value;
        stringText += button.innerText;
    }

    display.innerText = stringText;
    // console.log(stringValue);
  });
});
