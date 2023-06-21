import styled from '@emotion/styled';

export const CommentCard = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  border-top-right-radius: 0px;
  border: 1px solid #ffffff;
  box-shadow: #ffffff 5px 5px 5px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const CardInteractiveWrapper = styled.a`
  display: block;
  cursor: default;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 60px 40px 25px;

  &:hover button,
  &:focus button {
    opacity: 1;
  }
`;

export const UserLabel = styled.div`
  position: absolute;
  top: 15px;
  left: -20px;
  display: flex;
  align-items: center;
  flex-grow: 0;
`;

export const UserFirstLetters = styled.p`
  position: absolute;
  width: 70px;
  height: 70px;
  padding: 20px 0 0;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 50%;
  color: #ffffff;
  background-color: #00000066;
`;

export const UserName = styled.h3`
  position: absolute;
  left: 1px;
  text-transform: capitalize;
  white-space: nowrap;
  background-color: #00000066;
  font-size: 16px;
  min-width: 200px;
  padding: 5px;
  padding-left: 80px;
  border-radius: 10px;
  height: 30px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  opacity: 0;
  top: 5px;
  right: 5px;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: opacity 250ms linear, color 250ms linear;
  &:hover,
  &:focus {
    color: #ffffff;
  }
`;

export const UserComment = styled.p``;
