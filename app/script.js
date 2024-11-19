function searchRecipes() {
    const apiKey = 'YOUR_API_KEY';
    const query = document.getElementById('query').value;
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayResults(data.results);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayResults(recipes) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        const title = document.createElement('h2');
        title.textContent = recipe.title;
        recipeDiv.appendChild(title);

        const image = document.createElement('img');
        image.src = recipe.image;
        recipeDiv.appendChild(image);

        const summary = document.createElement('p');
        summary.innerHTML = recipe.summary;
        recipeDiv.appendChild(summary);

        resultsDiv.appendChild(recipeDiv);
    });
}
