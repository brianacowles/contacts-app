const contacts = [
    {
        name: "Michael Johnson",
        phoneNumber: "+1 505-644-8872",
        location: "New York, USA",
        status: "Active",
    },
    {
        name: "Emily Davis",
        phoneNumber: "+44 7911 290267",
        location: "London, UK",
        status: "Inactive",
    },
    {
        name: "Michael Johnson",
        phoneNumber: "+61 493 510 954",
        location: "Sydney, Australia",
        status: "Inactive",
    },
    {
        name: "Maria Garcia",
        phoneNumber: "+34 590 10 08 51",
        location: "Madrid, Spain",
        status: "Active",
    },
    {
        name: "Alex Nguyen",
        phoneNumber: "+84 559 078 533",
        location: "Ho Chi Minh City, Vietnam",
        status: "Inactive",
    },
    {
        name: "Luis Silva",
        phoneNumber: "+55 86 96195-2873",
        location: "Sao Paulo, Brazil",
        status: "Inactive",
    },
    {
        name: "Sophia Kim",
        phoneNumber: "+82 12-4603-6979",
        location: "Seoul, South Korea",
        status: "Active",
    },
    {
        name: "Mohammed Khan",
        phoneNumber: "+91 61282 96372",
        location: "Mumbai, India",
        status: "Active",
    },
    {
        name: "Marta Gonzalez",
        phoneNumber: "+34 625 29 61 52",
        location: "Barcelona, Spain",
        status: "Inactive",
    },
    {
        name: "Andrei Petrov",
        phoneNumber: "+7 937 362-17-35",
        location: "Moscow, Russia",
        status: "Active",
    },
];

function fetchContacts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(contacts);
        }, 500);
    });
}

const contactsTableBody = document.getElementById("contactsTableBody");

fetchContacts()
    .then((contactsList) => {
        contactsList.forEach((contact) => {
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
