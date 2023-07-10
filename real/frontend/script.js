function fetchContacts() {
    return fetch("https://randomuser.me/api/?inc=email,phone,cell,nat&results=10")
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error fetching contacts:", error);
        });
}

const contactsTableBody = document.getElementById("contactsTableBody");

fetchContacts()
    .then((contactsList) => {
        console.log(contactsList.results)
        contactsList.results.forEach((contact) => {
            const row = contactsTableBody.insertRow();
            Object.values(contact).forEach((contactInfo) => {
                const cell = row.insertCell();
                cell.textContent = contactInfo;
            });
        });
    })
    .catch((error) => {
        console.error("Error fetching contacts:", error);
    });
