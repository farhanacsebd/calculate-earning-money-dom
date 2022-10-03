const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');
const thirdInput = document.getElementById('third');
const fourthInput = document.getElementById('fourth');
let balance = document.getElementById('balance');
const calMsg = document.getElementById('cal-msg');
const incomeMsg = document.getElementById('income-msg');
const foodMsg = document.getElementById('food-msg');
const rentMsg = document.getElementById('rent-msg');
const clothesMsg = document.getElementById('clothes-msg');
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
  
   if(first<=0){
    incomeMsg.innerHTML  = "Enter a number in the Income field";
    setTimeout(function(){
        incomeMsg.innerHTML = ""
    },7000)
   }

   else if(second<=0){
    foodMsg.innerHTML  = "Enter a number in the Food field";
    setTimeout(function(){
        foodMsg.innerHTML = ""
    },7000)
   }

   else if(third<=0){
    rentMsg.innerHTML  = "Enter a number in the Rent field";
    setTimeout(function(){
        rentMsg.innerHTML = ""
    },7000)
   }

   else if(fourth<=0){
    clothesMsg.innerHTML  = "Enter a number in the Clothe field";
    setTimeout(function(){
        clothesMsg.innerHTML = ""
    },7000)
   }

   else if(first>0 && second>0 && third>0 && fourth>0){
    firstInput.value = first;
    secondInput.value = second;
    thirdInput.value = third;
    fourthInput.value = fourth;

   const totalExpenses =  second + third + fourth;
   balance.innerText = first - totalExpenses;
   document.getElementById('total-Expenses').innerText = totalExpenses;

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
   
   
   
  /*   if(balance.innerText >! saveBalance.innerTex && balance.innerText >! remainingBalance.innerText){
        savingMsg.innerHTML  = "you can't do this.";
        setTimeout(function(){
            savingMsg.innerHTML = ""
        },7000)
    } */
    
   if(saveValue>0){
        
       saveInpute.value = saveValue;
       saveBalance.innerText = (balance.innerText * saveValue)/100; 
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

