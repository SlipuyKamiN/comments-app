import {
  CommentCard,
  DeleteButton,
  UserComment,
  UserLabel,
  UserName,
} from './Comment.styled';

export const Comment = ({
  commentData: {
    body,
    user: { username },
  },
}) => {
  return (
    <CommentCard>
      <UserLabel>
        <UserName>{username}</UserName>
      </UserLabel>
      <UserComment>{body}</UserComment>
      <DeleteButton>Delete</DeleteButton>
    </CommentCard>
  );
};
