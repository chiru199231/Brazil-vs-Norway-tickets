const SECRET_CODE = "VINILAAND";

function unlockTickets() {

    const code = document.getElementById("code").value.trim().toUpperCase();

    if (code === SECRET_CODE) {

        alert("Unlocked!");

    } else {

        alert("Wrong code!");

    }

}
