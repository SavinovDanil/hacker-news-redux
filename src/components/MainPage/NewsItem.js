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
          <UserOutlined /> <span className="by name">{news.by}</span> <CommentOutlined />{' '}
          {news.kids ? (
            <span className="by">{news.kids.length}</span>
          ) : (
            <span className="by">{0}</span>
          )}{' '}
          <StarOutlined /> <span className="by">{news.score}</span>
        </div>
        <div>
          <ClockCircleOutlined /> {date.format('LTS')} 📅 {date.format('LL')}
        </div>
      </div>
    </div>
  );
}
