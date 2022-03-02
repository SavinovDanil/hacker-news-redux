import { ArrowRightOutlined, CommentOutlined, UserOutlined } from '@ant-design/icons';
import moment from 'moment';
import React from 'react';

import './News.scss';
export default function NewsItem({ newsProfile, commentsCount }) {
  const date = moment.unix(newsProfile.time);
  return (
    <div className="item">
      <div className="item-time">
        <div>
          <span>{date.format('DD, MMMM, YYYY')}</span>
        </div>
        <div>
          <span>{date.format('LTS')}</span>
        </div>
      </div>
      <div className="item-desc">
        <h2>
          <strong>{newsProfile.title}</strong>
        </h2>
        <div className="item_info">
          <div>
            <UserOutlined /> {newsProfile.by}
          </div>
          <div>
            <CommentOutlined /> {newsProfile.kids ? commentsCount : 0}{' '}
          </div>
        </div>
        <a rel="noreferrer" target="_blank" href={`${newsProfile.url}`}>
          <h2>
            <ArrowRightOutlined /> <span>{newsProfile.url}</span>
          </h2>
        </a>
      </div>
    </div>
  );
}
