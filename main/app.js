const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');
const thirdInput = document.getElementById('third');
const fourthInput = document.getElementById('fourth');


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
   const balance = first - totalExpenses;
   document.getElementById('total-Expenses').innerText = totalExpenses;
   document.getElementById('balance').innerText = balance;




  // clear input field

   firstInput.value ='';
   secondInput.value ='';
   thirdInput.value ='';
   fourthInput.value ='';
}

