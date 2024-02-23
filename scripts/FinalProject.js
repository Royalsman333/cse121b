document.addEventListener("DOMContentLoaded", function() {
    const usersList = document.getElementById("users-list");

    //The website will then fetch the information from jsonplaceholder.com
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
    //The information will then be put into "users" groups which will then be separated in my css code
            users.forEach(user => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <div><strong>Name:</strong> ${user.name}</div>
                    <div><strong>Email:</strong> ${user.email}</div>
                    <div><strong>Phone:</strong> ${user.phone}</div>
                `;
    //This will create a new list which I can call upon later
                usersList.appendChild(li);
            });
        })
    //This is used to help me catch an error if the program is running correctly, but there was a problem getting an error. I read that its good practice to use.
        .catch(error => console.log("Error fetching data:", error));
});
