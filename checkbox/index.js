const Mycheckbox = document.getElementById("Mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCard = document.getElementById("masterCard");
const PaypalBtn = document.getElementById("PaypalBtn");
const mysubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");



mysubmit.onclick = function(){

    if(Mycheckbox.checked){
        subResult.textContent = `You Are Subcribe`;
    }
    else{
        subResult.textContent = `You Are Not Subcribe`;

    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are Paying Visa`;

    } else if (masterCard.checked){
        paymentResult.textContent = ` you are paying with masterCard`;
 
    }
    else if(PaypalBtn.checked){
        paymentResult.textContent = ` you paying with paypal`;

    } else{
        console.log('pick payemnt');
        
        paymentResult.textContent = `You Must select a payment type` ; 
    }
    
}