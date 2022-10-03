const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');
const thirdInput = document.getElementById('third');
const fourthInput = document.getElementById('fourth');
const balance = document.getElementById('balance');
const totalExpenses = document.getElementById('total-Expenses');
const calMsg = document.getElementById('cal-msg');
const incomeMsg = document.getElementById('income-msg');
const foodMsg = document.getElementById('food-msg');
const rentMsg = document.getElementById('rent-msg');
const clothesMsg = document.getElementById('clothes-msg');
const balanceMsg = document.getElementById('balance-msg');
const savingMsg = document.getElementById('saving-msg');



function apply(){
    debugger;
    const first= parseFloat(firstInput.value);
    firstInput.value = first;

    const second= parseFloat(secondInput.value);
    secondInput.value = second;

    const third= parseFloat(thirdInput.value);
    thirdInput.value = third;
    
    const fourth= parseFloat(fourthInput.value);
    fourthInput.value = fourth;
  



    // expenses calculation
  
   if(first<0){
    incomeMsg.innerHTML  = "you can't enter any negative value";
    setTimeout(function(){
        incomeMsg.innerHTML = ""
    },7000)
   }

   else if(second<0){
    foodMsg.innerHTML  = "you can't enter any negative value";
    setTimeout(function(){
        foodMsg.innerHTML = ""
    },7000)
   }

   else if(third<0){
    rentMsg.innerHTML  = "you can't enter any negative value";
    setTimeout(function(){
        rentMsg.innerHTML = ""
    },7000)
   }

   else if(fourth<0){
    clothesMsg.innerHTML  = "you can't enter any negative value";
    setTimeout(function(){
        clothesMsg.innerHTML = ""
    },7000)
   }

   else if(first>0 && second>=0 && third>=0 && fourth>=0){

   totalExpenses.innerText =  second + third + fourth;
   balance.innerText = first - totalExpenses.innerText;
  
  if(parseFloat(totalExpenses.innerText) > parseFloat(balance.innerText)){
    totalExpenses.innerText = "";
    balance.innerText ="";
    balanceMsg.innerHTML  = "You can't spend much without balance";
    setTimeout(function(){
        balanceMsg.innerHTML = ""
    },7000)
  } 

  else{
   
  }

   }

   else{
    calMsg.innerHTML  = "You have to enter the number in the input field";
    setTimeout(function(){
        calMsg.innerHTML = ""
    },7000)
   }
   

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
        const incomesTotal = parseFloat(totalExpenses.innerText) + parseFloat(balance.innerText);
        saveBalance.innerText = (incomesTotal * saveValue)/100; 
        remainingBalance.innerText = balance.innerText - saveBalance.innerText;
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

