import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const articles = useSelector(state => state.articles);

  return (
    <ul className='list-group list-group-flush'>
      {articles.map(article => (
        <li className='list-group-item' key={article.id}>
          {article.title}
        </li>
      ))}
    </ul>
  );
}

export default List;
