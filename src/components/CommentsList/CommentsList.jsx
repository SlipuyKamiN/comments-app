import { useEffect, useRef } from 'react';
import { List } from './CommentsList.styled';
import { Comment } from 'components/Comment/Comment';

export const CommentsList = ({ comments, handleDeleteComment }) => {
  const bottomEl = useRef(null);

  useEffect(() => {
    bottomEl.current.scrollIntoView({ behavior: 'smooth' });
  }, [comments]);

  return (
    <List>
      {comments.length === 0 ? (
        <p>There are no comments yet.</p>
      ) : (
        comments.map(comment => (
          <Comment
            key={comment.id}
            commentData={comment}
            handleDeleteComment={handleDeleteComment}
          />
        ))
      )}
      <div ref={bottomEl}></div>
    </List>
  );
};
