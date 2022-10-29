import React, { useState, useEffect } from 'react';
import ListVocabulary from './List';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  getAllVocabularies,
  getVocabulariesByCollection,
} from '@api/vocabulary';
import { convertArrayToObject } from '@utils';

function Vocabulary() {
  const { slug } = useParams();

  const collectionList = useSelector((state) => state.collection);

  const [isShow, setIsShow] = useState(true);
  const [vocabularies, setVocabularies] = useState({});

  const fetchVocabulary = async (collectionId) => {
    try {
      let result = {};
      if (collectionId) {
        result = await getVocabulariesByCollection(collectionId);
      } else {
        result = await getAllVocabularies();
      }
      setVocabularies(
        convertArrayToObject(result.data.sort(() => Math.random() - 0.5))
      );
    } catch (error) {
      alert('Error fetch vocabulary');
    }
  };

  const handleClickPronounce = (word) => {
    const msg = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(msg);
    setVocabularies((pre) => ({
      ...pre,
      [word]: {
        ...pre[word],
        checked: true,
      },
    }));
  };

  useEffect(() => {
    const collectionId = collectionList[slug] ? collectionList[slug]._id : null;
    fetchVocabulary(collectionId);
  }, [slug]);

  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="content-section">
          <div className="content-section-heading">
            <div className="content-section-title">
              {Object.keys(vocabularies).length}{' '}
              {Object.keys(vocabularies).length >= 2
                ? 'vocabularies'
                : 'vocabulary'}
            </div>
            <div>
              <button 
                className="content-button status-button"
                onClick={() => setVocabularies(convertArrayToObject(Object.values(vocabularies).sort(() => Math.random() - 0.5)))}
              >Shuffle</button>
              <button
                className="content-button status-button"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? 'Hide' : 'Show'}
              </button>
              <button className="content-button status-button">Create</button>
            </div>
          </div>
          <ListVocabulary
            vocabularies={Object.values(vocabularies)}
            isShow={isShow}
            handleClickPronounce={handleClickPronounce}
          />
        </div>
      </div>
    </div>
  );
}

export default Vocabulary;
