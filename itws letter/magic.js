
function checkPassword() {

    const answer = document.getElementById("password")
        .value
        .trim()
        .toLowerCase()
        .replace(/[.,!?]/g, "");

    const correctPassword = "jacky";

    const feedback = document.getElementById("feedback");

    if (answer === correctPassword) {

        document.getElementById("login").classList.add("hidden");

        document.getElementById("greeting").classList.remove("hidden");

    } else if (answer === "") {

        feedback.textContent = "Ihhhhhh.";

    } else {

        feedback.textContent =
            "Luh, hindi po iyan ang sinabi mo sa amin!";

    }

}
