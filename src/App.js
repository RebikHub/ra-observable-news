import ListNews from './components/ListNews';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGetRequest } from './store/actions';

function App() {
  const state = useSelector((state) => state.newsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetRequest());
  }, [dispatch])

  console.log(state);

  return (
    <ListNews news={state.news}/>
  );
}

export default App;
