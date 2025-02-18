const apiKey = '5b3feb27378b49a98f8f91c85300fc91'; // Replace with your NewsAPI API key

// Fetch news based on category
function fetchNews() {
    const category = document.getElementById('category').value;
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => displayNews(data.articles))
        .catch(error => console.log(error));
}

// Display the news articles
function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear any existing news

    if (articles.length === 0) {
        newsContainer.innerHTML = '<p>No news available at the moment. Please try again later.</p>';
        return;
    }

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');

        const articleTitle = document.createElement('h3');
        articleTitle.textContent = article.title;

        const articleDescription = document.createElement('p');
        articleDescription.textContent = article.description || 'No description available';

        const articleLink = document.createElement('a');
        articleLink.href = article.url;
        articleLink.target = '_blank';
        articleLink.textContent = 'Read more';

        articleElement.appendChild(articleTitle);
        articleElement.appendChild(articleDescription);
        articleElement.appendChild(articleLink);

        newsContainer.appendChild(articleElement);
    });
}

// Load news on page load
window.onload = fetchNews;
