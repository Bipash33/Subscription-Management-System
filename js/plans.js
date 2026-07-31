const container = document.getElementById("plansContainer");

async function loadPlans() {
    try {

        const response = await fetch("http://localhost:5000/api/plans");

        const plans = await response.json();

        container.innerHTML = "";

        plans.forEach(plan => {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${plan.name}</h3>

                <h1>₹${plan.price}</h1>

                <span>/${plan.duration}</span>

                <ul>
                    ${plan.features.map(feature => `<li>✔ ${feature}</li>`).join("")}
                </ul>

                <button class="choose-btn">
                    Choose Plan
                </button>
            `;

            container.appendChild(card);
            
            const button = card.querySelector(".choose-btn");

button.addEventListener("click", async () => {

    try {

        const response = await fetch("http://localhost:5000/api/subscription", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                planName: plan.name,

                price: plan.price,

                duration: plan.duration

            })

        });

        if (response.ok) {

            alert("Plan Selected Successfully!");

            window.location.href = "portal.html";

        }

    } catch (err) {

        console.log(err);

    }

});

        });

    } catch (error) {

        console.error("Error loading plans:", error);

    }
}

loadPlans();