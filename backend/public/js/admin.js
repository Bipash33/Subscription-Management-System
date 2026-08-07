const planInput = document.getElementById("planInput");
const addBtn = document.getElementById("addBtn");
const planList = document.getElementById("planList");
const subCount = document.getElementById("subCount");

let plans = JSON.parse(localStorage.getItem("plans"));

if(!plans){

plans = ["Basic","Pro","Premium"];

}

function displayPlans(){

planList.innerHTML="";

plans.forEach((plan,index)=>{

const li=document.createElement("li");

li.innerHTML=`
${plan}

<button class="deleteBtn">
Delete
</button>
`;

li.querySelector("button").onclick=()=>{

plans.splice(index,1);

localStorage.setItem("plans",JSON.stringify(plans));

displayPlans();

};

planList.appendChild(li);

});

subCount.textContent=plans.length;

}

displayPlans();

addBtn.onclick=()=>{

const newPlan=planInput.value.trim();

if(newPlan==="") return;

plans.push(newPlan);

localStorage.setItem("plans",JSON.stringify(plans));

planInput.value="";

displayPlans();

};  