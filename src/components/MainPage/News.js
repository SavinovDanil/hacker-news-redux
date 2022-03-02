import React from 'react';
import Update from '../updateButton/Update';
import NewsItem from './NewsItem';
import styles from './News.module.scss';

export default function News({ news, getNewsIds }) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className="">Hacker News</h2>
        <Update onClick={getNewsIds} />
      </div>
      {news.map((item, index) => (
        <NewsItem news={item} key={item.id} index={index} />
      ))}
    </div>
  );
}
