import React from 'react';
// import Media from 'react-bootstrap/Media';
import moment from 'moment';
import { CommentText } from './CommetText';
import './Comments.scss';
import { ClockCircleOutlined } from '@ant-design/icons';
const KidsItem = ({ kid }) => {
  const date = moment.unix(kid.time);

  return (
    <div className="kid">
      <i>{kid.by}</i>
      <div id={`parentKid${kid.id}`}>
        <CommentText text={kid.text} />
      </div>
      <div className="comment-time">
        <div className="hours">
          <ClockCircleOutlined /> {date.format('LTS')}{' '}
        </div>
        <div>📅 {date.format('LL')} </div>
      </div>
    </div>
  );
};

export default KidsItem;
