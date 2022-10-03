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
const savings = document.getElementById('savings');


// calcutate button using onclick
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
  



    // expenses or balance calculating

//sending error messages only   
   if(first<0){
    incomeMsg.innerHTML  = "you can't enter any negative value";
    setTimeout(function(){
        incomeMsg.innerHTML = ""
    },7000)
   }
//sending error messages only
   else if(second<0){
    foodMsg.innerHTML  = "you can't enter any negative value";
    setTimeout(function(){
        foodMsg.innerHTML = ""
    },7000)
   }
//sending error messages only
   else if(third<0){
    rentMsg.innerHTML  = "you can't enter any negative value";
    setTimeout(function(){
        rentMsg.innerHTML = ""
    },7000)
   }
//sending error messages only
   else if(fourth<0){
    clothesMsg.innerHTML  = "you can't enter any negative value";
    setTimeout(function(){
        clothesMsg.innerHTML = ""
    },7000)
   }

// main calculation in here
   else if(first>0 && second>=0 && third>=0 && fourth>=0){

   totalExpenses.innerText =  second + third + fourth;
   balance.innerText = first - totalExpenses.innerText;

// try to catch the mainus balance
  if(parseFloat(balance.innerText)<=0){
    totalExpenses.innerText = "";
    balance.innerText ="";
    balanceMsg.innerHTML  = "You can't spend much without balance";
    setTimeout(function(){
        balanceMsg.innerHTML = ""
    },7000)
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



// saving button also here use onclick function
function saveButton(){
   debugger;
    const saveInpute = document.getElementById("saveInpute");
    const saveValue = parseFloat(saveInpute.value);
    const saveBalance = document.getElementById('saving-value');
    const remainingBalance = document.getElementById('remainingBalance');
    

    if(saveValue>0){
        saveInpute.value = saveValue;
        const incomesTotal = parseFloat(totalExpenses.innerText) + parseFloat(balance.innerText);
        saveBalance.innerText = (incomesTotal * saveValue)/100; 
        remainingBalance.innerText = balance.innerText - saveBalance.innerText;

// if saving balance is more then balance then need apply this formula
        if(parseFloat(balance.innerText)<parseFloat(saveBalance.innerText)){
            saveBalance.innerText ="";
            remainingBalance.innerText ="";
            savingMsg.innerHTML  = "Not enough money for savings";
            setTimeout(function(){
                savingMsg.innerHTML = ""
            },7000)
        }

    }   
  
    // try to catch empty field
     else{
        savingMsg.innerHTML  = "You have to enter the number in the input field";
        setTimeout(function(){
            savingMsg.innerHTML = ""
        },7000)
    } 
    

// clear input field

   saveInpute.value = "";
}