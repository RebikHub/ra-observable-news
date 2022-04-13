import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchGetMoreRequest } from '../store/actions';
import News from './News';

export default function ListNews({news}) {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setList((prev) => ([...prev, ...news]))
  }, [news])

  function getMore() {
    dispatch(fetchGetMoreRequest());
  }

  return (
    <>
      <ul className='list-news'>
        {list.map((el) => (
          <li className='item-news' key={el.id}>{<News item={el}/>}</li>
        ))}
      </ul>
      <button type='button' onClick={getMore}>к предыдущим записям</button>
    </>
  )
}
