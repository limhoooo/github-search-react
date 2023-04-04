import React from 'react';
import RepositoryBackGround from './component/repository/RepositoryBackGround';
import SearchBackGround from './component/search/SearchBackGround';
import Footer from './component/layout/Footer';
import { useAppSelector } from './hook/hooks';
import Loading from './component/UI/Loading';

function App() {
  const isSelect = useAppSelector(state => state.search.isSelect);
  const isLoading = useAppSelector(state => state.search.loading);
  return (
    <div className="App">
      {!isSelect ? <SearchBackGround /> : <RepositoryBackGround />}
      <Footer />
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
