import { List } from './CommentsList.styled';
import { Comment } from 'components/Comment/Comment';

export const CommentsList = ({ comments }) => {
  return (
    <List>
      {comments.length &&
        comments.map(comment => (
          <Comment key={comment.id} commentData={comment} />
        ))}
    </List>
  );
};
