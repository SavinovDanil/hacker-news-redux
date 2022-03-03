import React from 'react';
import {
  ClockCircleOutlined,
  CommentOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

export default function NewsItem({ news, index }) {
  const date = moment.unix(news.time);
  const router = useHistory();
  return (
    <div className="news">
      <div className="title" onClick={() => router.push(`/news/${news.id}`)}>
        <b className="index">{index + 1}</b>
        <p>{news.title}</p>
      </div>
      <div className="info">
        <div className="info-r">
          <div className='info-user name'>
            <UserOutlined /> 
            <span className="by">{news.by}</span> 
          </div>
          <div className='info-user'>
            <div className='info-user'>
              <CommentOutlined />{' '}
              {news.kids ? (
                <span className="by">{news.kids.length}</span>
              ) : (
                <span className="by">{0}</span>
              )}{' '}
            </div>
            <div className='info-user'>
              <StarOutlined /> 
              <span className="by">{news.score}</span>
            </div>
          </div>

        </div>
        <div className='info-time'>
          <div>
            <ClockCircleOutlined /> {date.format('LTS')}
          </div>
          <div>
            📅 {date.format('LL')}
          </div>
           
        </div>
      </div>
    </div>
  );
}
