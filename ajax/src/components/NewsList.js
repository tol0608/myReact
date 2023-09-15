import styled from 'styled-components';
import NewsItem from './NewsItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 2rem 0 auto 0;
  @media screen and(max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=0ec243e2e206446eb82206b00c516837',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기중
  if (loading) {
    return <NewsListBlock>대기중....</NewsListBlock>;
  }
  // 아직 articles 값이 설정되지 않았을때
  if (!articles) {
    return null;
  }
  // articles 값이 유효할때
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;