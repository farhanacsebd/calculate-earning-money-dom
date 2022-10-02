const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');
const thirdInput = document.getElementById('third');
const fourthInput = document.getElementById('fourth');
let balance = document.getElementById('balance');
const savingMsg = document.getElementById('saving-msg');

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
    const saveBalance = document.getElementById('saving-value');
    const remainingBalance = document.getElementById('remainingBalance');
   
   
    if(saveValue>0){
        
    saveInpute.value = saveValue;
   saveBalance.innerText = (balance.innerText * saveValue)/100; 
   remainingBalance.innerText = balance.innerText - saveValue;

    }
   
    
    
    else{
        savingMsg.innerHTML  = "You have to give the number.";
        setTimeout(function(){
            savingMsg.innerHTML = ""
        },7000)
    }
    

   




// clear input field

   saveInpute.value = "";
}

