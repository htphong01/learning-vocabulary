import React, { useEffect, useState } from 'react';
import { getAllCollections } from '@api/collection';
import { useSelector } from 'react-redux';
import { setCollections as setCollectionRedux } from '@app/slices/collection';
import { convertArrayToObject } from '@utils'
import CustomLink from './CustomLink'

function SideBar() {

  const collections = useSelector(state => state.collection);

  return (
    <div className="left-side">
      <div className="side-wrapper">
        <div className="side-title">Collections</div>
        <div className="side-menu">
          <CustomLink to="/">
            <svg viewBox="0 0 512 512">
              <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path
                  d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                  data-original="#bfc9d1"
                />
              </g>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M192 192h128v128H192zm0 0"
                fill="currentColor"
                data-original="#82b1ff"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                fill="currentColor"
                data-original="#bfc9d1"
              />
            </svg>
            All
          </CustomLink>
          {Object.values(collections).map((item) => (
            <CustomLink to={`/collections/${item.slug}`} key={item._id}>
              <svg viewBox="0 0 512 512">
                <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path
                    d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                    data-original="#bfc9d1"
                  />
                </g>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M192 192h128v128H192zm0 0"
                  fill="currentColor"
                  data-original="#82b1ff"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                  fill="currentColor"
                  data-original="#bfc9d1"
                />
              </svg>
              {item.title}
            </CustomLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
