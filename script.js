function displayCurrentDate() {
    let today = new Date();

    document.getElementById("date").innerHTML = today.toLocaleDateString();
}

displayCurrentDate(); 