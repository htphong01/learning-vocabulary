import React from 'react';
import { Icon } from '@iconify/react';

function ListVocabulary({ vocabularies, handleClickPronounce, isShow }) {
  return (
    <ul>
      <li className="adobe-product">
        <div className="products">No.</div>
        <span className="status">English</span>
        <span className="status" style={{ textAlign: 'center' }}>
          Category
        </span>
        <span className="status">Vietnamese</span>
        <span className="action">Pronounce</span>
      </li>
      {vocabularies.length === 0 && (
        <li className="adobe-product">
          This collection doesn't have any words
        </li>
      )}
      {vocabularies.map((item, index) => (
        <li
          className={`adobe-product ${item.checked ? 'checked' : ''}`}
          onClick={() => handleClickPronounce(item.english)}
          key={index}
        >
          <div className="products">{index + 1}</div>
          <span className="status">{isShow ? item.english : ''}</span>
          <span className="status" style={{ textAlign: 'center' }}>
            {isShow ? item.category : ''}
          </span>
          <span className="status">{isShow ? item.vietnamese : ''}</span>
          <span className="action">
            <Icon icon="el:speaker" fontSize={20} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ListVocabulary;
