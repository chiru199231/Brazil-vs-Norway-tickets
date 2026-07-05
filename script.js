const SECRET_CODE = "VINILAAND";

const ticketsContainer = document.getElementById("tickets");
const status = document.getElementById("status");

function loadTickets() {

    ticketsContainer.innerHTML = "";

    tickets.forEach(ticket => {

        ticketsContainer.innerHTML += `

        <div class="ticket">

            <div class="ticketHeader">
                Ticket #${ticket.ticket}
            </div>

            <div class="locked" id="lock${ticket.ticket}">
                <h1>🔒</h1>
                <p>Enter VINILAAND to reveal players</p>
            </div>

            <div class="ticketContent" id="content${ticket.ticket}" style="display:none;">

                <div class="player">

                    <h3>🇧🇷 Brazil</h3>

                    <strong>${ticket.brazil.name}</strong>

                    <p>Jersey No. ${ticket.brazil.number}</p>

                </div>

                <div class="vs">
                    VS
                </div>

                <div class="player">

                    <h3>🇳🇴 Norway</h3>

                    <strong>${ticket.norway.name}</strong>

                    <p>Jersey No. ${ticket.norway.number}</p>

                </div>

            </div>

        </div>

        `;

    });

}

function unlockTickets() {

    const enteredCode = document.getElementById("code").value.trim().toUpperCase();

    if (enteredCode === SECRET_CODE) {

        tickets.forEach(ticket => {

            document.getElementById("lock" + ticket.ticket).style.display = "none";

            document.getElementById("content" + ticket.ticket).style.display = "block";

        });

        status.innerHTML = "✅ All 23 tickets unlocked!";
        status.style.color = "green";

    } else {

        status.innerHTML = "❌ Wrong Code!";
        status.style.color = "red";

    }

}

// Load all tickets when page opens
loadTickets();
