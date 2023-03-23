import './App.css';
import RepositoryBackGround from './component/Repository/RepositoryBackGround';
import SearchBackGround from './component/search/SearchBackGround';
import { useSelector } from 'react-redux';

function App() {
  const isSelect = useSelector(state => state.search.isSelect);
  return (
    <div className="App">
      {
        !isSelect && <SearchBackGround />
      }
      <RepositoryBackGround />
    </div>
  );
}

export default App;
