document.addEventListener("DOMContentLoaded", function() {
    const usersList = document.getElementById("users-list");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <div><strong>Name:</strong> ${user.name}</div>
                    <div><strong>Email:</strong> ${user.email}</div>
                    <div><strong>Phone:</strong> ${user.phone}</div>
                `;
                usersList.appendChild(li);
            });
        })
        .catch(error => console.log("Error fetching data:", error));
});
