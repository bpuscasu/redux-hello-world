import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchArticles } from '../thunk';

const List = () => {
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles);
  }, []);

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
