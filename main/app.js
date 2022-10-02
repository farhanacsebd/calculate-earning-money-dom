function apply(){

    const firstInput = document.getElementById('first');
    const first= parseFloat(firstInput.value);
    firstInput.value = first;

    const secondInput = document.getElementById('second');
    const second= parseFloat(secondInput.value);
    secondInput.value = second;

    const thirdInput = document.getElementById('third');
    const third= parseFloat(thirdInput.value);
    thirdInput.value = third;

    const fourthInput = document.getElementById('fourth');
    const fourth= parseFloat(fourthInput.value);
    fourthInput.value = fourth;
    



    // expenses calculation
   const totalExpenses =  second + third + fourth;
   const balance = first - totalExpenses;
   document.getElementById('total-Expenses').innerText = totalExpenses;
   document.getElementById('balance').innerText = balance;




// remove the input values

   firstInput.value ='';
   secondInput.value ='';
   thirdInput.value ='';
   fourthInput.value ='';
}

