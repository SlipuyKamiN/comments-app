import {
  CardInteractiveWrapper,
  CommentCard,
  DeleteButton,
  UserComment,
  UserFirstLetters,
  UserLabel,
  UserName,
} from './Comment.styled';
import { CiCircleRemove } from 'react-icons/ci';

export const Comment = ({
  commentData: {
    id,
    body,
    user: { username },
  },
  handleDeleteComment,
}) => {
  const makeFirstLetters = username => {
    username = username.split(' ');
    const FirstNameLetter = username[0].split('')[0];
    const SecondNameLetter = username[1]?.split('')[0] || '';

    return `${FirstNameLetter} ${SecondNameLetter}`;
  };

  return (
    <CommentCard>
      <CardInteractiveWrapper>
        <UserLabel>
          <UserName>{username}</UserName>
          <UserFirstLetters>{makeFirstLetters(username)}</UserFirstLetters>
        </UserLabel>
        <UserComment>{body}</UserComment>
        <DeleteButton type="button" onClick={() => handleDeleteComment({ id })}>
          <CiCircleRemove size={30} />
        </DeleteButton>
      </CardInteractiveWrapper>
    </CommentCard>
  );
};
