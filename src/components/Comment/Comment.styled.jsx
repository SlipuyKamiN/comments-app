import styled from '@emotion/styled';

export const CommentCard = styled.li`
  position: relative;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const UserLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: tomato;
`;

export const UserName = styled.h3``;

export const DeleteButton = styled.button`
  cursor: pointer;
  border: 1px solid tomato;
  background-color: transparent;
`;

export const UserComment = styled.p``;
