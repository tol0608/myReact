import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

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

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0ec243e2e206446eb82206b00c516837`,
    );
  }, [category]);

  // 대기중
  if (loading) {
    return <NewsListBlock>대기중....</NewsListBlock>;
  }
  // 아직 response 값이 설정되지 않았을때
  if (!response) {
    return null;
  }
  // 에러가 발생할때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }
  // response 값이 유효할때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;