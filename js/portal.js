async function loadSubscription() {

    try {

        const response = await fetch("http://localhost:5000/api/subscription");

        const subscription = await response.json();

        if (!subscription) return;

        document.getElementById("planName").textContent = subscription.planName;

        document.getElementById("status").textContent = subscription.status;

        const today = new Date();

        today.setMonth(today.getMonth() + 1);

        document.getElementById("renewDate").textContent =
            today.toLocaleDateString();

    } catch (err) {

        console.log(err);

    }

}

loadSubscription();

document.getElementById("upgradeBtn").addEventListener("click", async () => {

    await fetch("http://localhost:5000/api/subscription/upgrade", {
        method: "PUT"
    });

    loadSubscription();

});

document.getElementById("downgradeBtn").addEventListener("click", async () => {

    await fetch("http://localhost:5000/api/subscription/downgrade", {
        method: "PUT"
    });

    loadSubscription();

});

document.getElementById("cancelBtn").addEventListener("click", async () => {

    const confirmCancel = confirm("Are you sure you want to cancel your subscription?");

    if (!confirmCancel) return;

    await fetch("http://localhost:5000/api/subscription/cancel", {
        method: "PUT"
    });

    loadSubscription();

});