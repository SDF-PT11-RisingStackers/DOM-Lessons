const container = document.getElementById('articles-container');

fetch('http://localhost:3000/articles')
  .then(response => response.json())
  .then(articles => {
    articles.forEach(article => {
      const div = document.createElement('div');
      div.classList.add('article');

      div.innerHTML = `
        <h2>${article.title}</h2>
        <p><strong>Author:</strong> ${article.author}</p>
        <p><strong>Date:</strong> ${article.date}</p>
        <p>${article.content}</p>
        <p class="tags"><strong>Tags:</strong> ${article.tags.join(', ')}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(error => {
    container.innerHTML = `<p style="color:red;">Failed to load articles. Please check the server.</p>`;
    console.error('Error fetching articles:', error);
  });
