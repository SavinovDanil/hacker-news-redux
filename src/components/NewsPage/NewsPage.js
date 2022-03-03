import { SyncOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';
import BackButton from '../back/BackButton';
import Comments from './Comments/Comments';
import NewsItem from './NewsItem';

export default function NewsPage({
  newsProfile,
  comments,
  kids,
  commentsCount,
  updateComments,
  getKidsComments,
  deleteCommentsCount,
}) {
  return (
    <Layout.Content style={{ margin: '10px 100px' }}>
      <BackButton path="/" />
      <NewsItem newsProfile={newsProfile} commentsCount={commentsCount} />
      <div className='com-list'>
        <div className='com-list-heading'>
          <h3>Comments</h3>
          <button className="update" onClick={() => updateComments(newsProfile.kids)}>
            <SyncOutlined />
            <b> update comments</b>
          </button>
        </div>
      <div className='com-list-main'>
          {comments.length ? (
            <Comments
              comments={comments}
              getKidsComments={getKidsComments}
              kids={kids}
              commentsLength={newsProfile.kids.length}
              deleteCommentsCount={deleteCommentsCount}
            />
          ) : (
            <h2>No comments</h2>
          )}
      </div>

      </div>
    </Layout.Content>
  );
}
