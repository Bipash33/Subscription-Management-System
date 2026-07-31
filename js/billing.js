const invoicePlan = document.getElementById("invoicePlan");
const invoiceAmount = document.getElementById("invoiceAmount");
const paymentStatus = document.getElementById("paymentStatus");
const payBtn = document.getElementById("payBtn");

const selectedPlan = localStorage.getItem("selectedPlan");

let amount = 0;

if(selectedPlan){

    invoicePlan.textContent = selectedPlan;

    switch(selectedPlan){

        case "Basic":
            amount = 199;
            break;

        case "Pro":
            amount = 499;
            break;

        case "Premium":
            amount = 999;
            break;
    }

    invoiceAmount.textContent = amount;

}
else{

    invoicePlan.textContent = "No Subscription";

    invoiceAmount.textContent = 0;

    payBtn.disabled = true;

}

payBtn.addEventListener("click",()=>{

    paymentStatus.textContent="Paid";

    alert("Invoice Generated Successfully!");

});