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
        <h4>
          {newsProfile.title}
        </h4>
        <div className="item_info">
          <div className='item_icon'>
            <div>
              <UserOutlined /> <span>{newsProfile.by}</span>  
            </div>
            <div>
              <CommentOutlined /> {newsProfile.kids ? <span>{commentsCount}</span> : <span>{0}</span>}{' '}
            </div>
          </div>
            <a rel="noreferrer" target="_blank" href={`${newsProfile.url}`}>
              <div className='item-link'>
                  <ArrowRightOutlined /> <span>Link</span>
              </div>
            </a>
        </div>
      </div>
    </div>
  );
}
