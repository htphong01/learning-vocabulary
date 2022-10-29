import React, { useEffect, useState } from 'react';
import Header from '@components/layouts/Header';
import SideBar from '@components/layouts/SideBar';
import Vocabulary from '@components/Vocabulary';
import LoadingScreen from '@components/LoadingScreen';
import { getAllCollections } from '@api/collection';
import { useDispatch } from 'react-redux';
import { setCollections as setCollectionRedux } from '@app/slices/collection';
import { convertArrayToObject } from '@utils'

function App() {

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const fetchCollection = async () => {
    try {
      const { data } = await getAllCollections();
      dispatch(setCollectionRedux(convertArrayToObject(data, 'slug')))
      setIsLoading(false);
    } catch (error) {
      alert('An error occurred while fetching collections');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCollection();
  }, []);

  if(isLoading) return <LoadingScreen />

  return (
    <>
      <div className="app">
        <Header />
        <div className="wrapper">
          <SideBar />
          <Vocabulary />
        </div>
        <div className="overlay-app"></div>
      </div>
    </>
  );
}

export default App;
