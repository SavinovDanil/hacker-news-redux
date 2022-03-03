import React from 'react';
// import Media from 'react-bootstrap/Media';
import moment from 'moment';
import KidsItem from './KidsIem';
import { CommentText } from './CommetText';
import { ClockCircleOutlined, CommentOutlined } from '@ant-design/icons';

const CommentsItem = ({ comment, kids, getKidsComments}) => {
	const date = moment.unix(comment.time);

	return (
		<div className='comment'>
			<b>{comment.by}</b>
			<div className='comment-text'>
				<CommentText text={comment.text}/>
			</div>
			<div className='comment-descr'>
				<div className='comment-time'>
					<div className='hours'>
						<ClockCircleOutlined/> {date.format('LTS')}
					</div>
				📅 {date.format('LL')}
				</div>
				  {comment.kids 
						? <div className='btn__more' onClick={ () => {getKidsComments(comment.kids)} }>
							 <CommentOutlined/> {comment.kids.length}</div>
						: <div className='btn-def'><CommentOutlined/> 0</div>
						}
			</div>
			{kids.length && kids[0].parent === comment.id
				? kids.map(item => <KidsItem kid={item} key={item.id} />)
				: <div></div>
			}
		</div>
	)
}

export default CommentsItem;