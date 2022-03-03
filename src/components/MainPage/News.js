import React from 'react';
import Update from '../updateButton/Update';
import NewsItem from './NewsItem';

export default function News({ news, getNewsIds }) {
  return (
    <div className="container">
      <div className="heading">
        <h2 className="">Hacker News</h2>
        <Update onClick={getNewsIds} />
      </div>
      {news.map((item, index) => (
        <NewsItem news={item} key={item.id} index={index} />
      ))}
    </div>
  );
}
