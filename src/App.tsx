import React from 'react';
import RepositoryBackGround from './component/repository/RepositoryBackGround';
import SearchBackGround from './component/search/SearchBackGround';
import Footer from './component/layout/Footer';
import { useAppSelector } from './hook/hooks';

function App() {
  const isSelect = useAppSelector(state => state.search.isSelect);
  return (
    <div className="App">
      {!isSelect ? <SearchBackGround /> : <RepositoryBackGround />}
      <Footer />
    </div>
  );
}

export default App;
