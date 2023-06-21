import styled from '@emotion/styled';

export const TextAreaForm = styled.form`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

export const InputsWrapper = styled.div`
  flex-grow: 1;
`;

export const UserNameInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  background-color: transparent;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid #00000066;
  font-size: 18px;

  transition: color 250ms linear, border-color 250ms linear,
    background-color 250ms linear;

  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #ffffff;
    background-color: #00000066;
  }
`;
export const TextAreaField = styled.textarea`
  width: 100%;
  resize: none;
  background-color: transparent;
  border-radius: 20px;
  border-top-right-radius: 0;
  padding: 10px;
  border: 1px solid #00000066;
  font-size: 18px;

  transition: color 250ms linear, border-color 250ms linear,
    background-color 250ms linear;

  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #ffffff;
    background-color: #00000066;
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  background-color: transparent;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid #00000066;
  transition: color 250ms linear, border-color 250ms linear,
    background-color 250ms linear;

  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #ffffff;
    background-color: #00000066;
  }
`;
