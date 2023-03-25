import React from 'react';
import RepositoryBackGround from './component/repository/RepositoryBackGround';
import SearchBackGround from './component/search/SearchBackGround';
import { useSelector } from 'react-redux';
import Footer from './component/layout/Footer';

function App() {
  const isSelect = useSelector(state => state.search.isSelect);
  return (
    <div className="App">
      {
        !isSelect ? <SearchBackGround /> : <RepositoryBackGround />
      }
      <Footer />
    </div>
  );
}

export default App;
