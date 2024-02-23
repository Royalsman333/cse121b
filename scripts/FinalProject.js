document.addEventListener("DOMContentLoaded", function() {
    const usersList = document.getElementById("users-list");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(users => {
            users.forEach(user => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <strong>Name:</strong> ${user.name} <br>
                    <strong>Email:</strong> ${user.email} <br>
                    <strong>Phone:</strong> ${user.phone}
                `;
                usersList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching or parsing data:", error);
        });
});
