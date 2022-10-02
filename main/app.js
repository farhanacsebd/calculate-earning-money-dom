const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');
const thirdInput = document.getElementById('third');
const fourthInput = document.getElementById('fourth');
let balance = document.getElementById('balance');

function apply(){

    const first= parseFloat(firstInput.value);
    firstInput.value = first;

    const second= parseFloat(secondInput.value);
    secondInput.value = second;

    const third= parseFloat(thirdInput.value);
    thirdInput.value = third;
    
    const fourth= parseFloat(fourthInput.value);
    fourthInput.value = fourth;
  



    // expenses calculation
   const totalExpenses =  second + third + fourth;
   balance.innerText = first - totalExpenses;
   document.getElementById('total-Expenses').innerText = totalExpenses;
   




  // clear input field

   firstInput.value ='';
   secondInput.value ='';
   thirdInput.value ='';
   fourthInput.value ='';
}

function saveButton(){
    const saveInpute = document.getElementById("saveInpute");
    const saveValue = parseFloat(saveInpute.value);
    saveInpute.value = saveValue;
    

   const saveBalance = (balance.innerText * saveValue)/100; 
   const remainingBalance = balance.innerText - saveValue;

   document.getElementById('saving-value').innerText = saveBalance;   
   document.getElementById('remainingBalance').innerText = remainingBalance;



// clear input field

   saveInpute.value = "";
}

