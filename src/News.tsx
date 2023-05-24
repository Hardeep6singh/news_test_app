import React, { useEffect, useState } from 'react';

interface Article {
  title: string;
  description: string;
  url: string; // New property for the article URL
}

const News: React.FC = () => {
  const [newsData, setNewsData] = useState<Article[]>([]);

  const apiKey = '68ed7f661295425eb0c50aa0d95473ba'; // Replace with your actual NewsAPI key

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then(response => response.json())
      .then(data => setNewsData(data.articles))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>News</h1>
      <ul>
        {newsData.map((article, index) => (
          <li key={index}>
            <h2>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
