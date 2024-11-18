document.getElementById('searchButton').addEventListener('click', function() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure it: GET-request for the URL /superheroes.php
    xhr.open('GET', 'superheroes.php', true);

    // Set up a function to handle the response
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Parse the JSON response
            const superheroes = JSON.parse(xhr.responseText);
            // Create a string to display the superheroes
            const superheroList = superheroes.join(', ');
            // Show the list in an alert
            alert('Superheroes: ' + superheroList);
        } else {
            alert('Error fetching superheroes: ' + xhr.status);
        }
    };

    // Send the request
    xhr.send();
});