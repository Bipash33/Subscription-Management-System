const planName = document.getElementById("planName");
const status = document.getElementById("status");
const renewDate = document.getElementById("renewDate");

const upgradeBtn = document.getElementById("upgradeBtn");
const downgradeBtn = document.getElementById("downgradeBtn");
const cancelBtn = document.getElementById("cancelBtn");

let plan = localStorage.getItem("selectedPlan");

function loadSubscription(){

    if(plan){

        planName.textContent = plan;

        status.textContent = "Active";

        renewDate.textContent = "30 August 2026";

    }

    else{

        planName.textContent = "No Plan";

        status.textContent = "Inactive";

        renewDate.textContent = "--";

    }

}

loadSubscription();

upgradeBtn.onclick = function(){

    if(plan==="Basic"){

        plan="Pro";

    }

    else if(plan==="Pro"){

        plan="Premium";

    }

    else{

        alert("Already using highest plan.");

        return;

    }

    localStorage.setItem("selectedPlan",plan);

    loadSubscription();

};

downgradeBtn.onclick=function(){

    if(plan==="Premium"){

        plan="Pro";

    }

    else if(plan==="Pro"){

        plan="Basic";

    }

    else{

        alert("Already using lowest plan.");

        return;

    }

    localStorage.setItem("selectedPlan",plan);

    loadSubscription();

};

cancelBtn.onclick=function(){

    localStorage.removeItem("selectedPlan");

    plan=null;

    loadSubscription();

    alert("Subscription Cancelled");

};