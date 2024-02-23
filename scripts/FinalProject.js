document.addEventListener("DOMContentLoaded", function() {
    const usersList = document.getElementById("users-list")

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
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
        .catch(error => console.log("Error fetching data:", error));
});