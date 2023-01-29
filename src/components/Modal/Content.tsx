import React, { ChangeEvent, memo } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 7px;
`;

const AuthorInput = styled.input`
  padding: 5px 10px;
  height: 30px;
`;

const MessageTextArea = styled.textarea`
  padding: 10px;
  height: 200px;
  resize: none;
`;

interface Props {
  author: string;
  onAuthorChange:(e: ChangeEvent<HTMLInputElement>) => void;
  message: string;
  onMessageChange:(e: ChangeEvent<HTMLTextAreaElement>) => void;
  isExisting?: boolean;
}

const Content = ({ author, onAuthorChange, message, onMessageChange, isExisting } : Props) => {
  console.log('Modal Content render!');
  return (
    <Wrapper>
      {!isExisting && (
        <InputWrapper>
          <Label>Author Name</Label>
          <AuthorInput value={author} onChange={onAuthorChange} />
        </InputWrapper>
      )}
      <InputWrapper>
        <Label>What would you like to say?</Label>
        <MessageTextArea value={message} onChange={onMessageChange} />
      </InputWrapper>
    </Wrapper>
  )
}

export default memo(Content);
