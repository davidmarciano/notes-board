import React, { memo, useMemo } from 'react'
import styled from 'styled-components';
import Content from './Content';
import ActionButtons from './ActionButtons';
import type { NoteType } from '../../types';
import { useForm } from './hooks';

const Wrapper = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ open }) => open ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  width: 800px;
  height: 500px;
  position: relative;
  z-index: 3;
  background-color: #ffffff;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0px;
  padding: 10px 20px;
  border-bottom: 1px solid #000000;
`;

const Outside = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;

interface Props {
  isOpen: boolean;
  onPost(author: string, message: string, id?: string): void;
  data: NoteType | null;
  onClose(): void;
}

const Modal = ({ isOpen, data, onPost, onClose }: Props) => {
  const { 
    author, onAuthorChange,
    message, onMessageChange,
    onPostClick, onCancelClick
  } = useForm({ data, onPost, onClose });

  const title = !!data ? `Note from ${data?.author}` : 'Post a new note';

  return (
    <Wrapper open={isOpen}>
      <InnerWrapper>
        <Title>{title}</Title>
        <Content 
          author={author} 
          onAuthorChange={onAuthorChange}
          message={message}
          onMessageChange={onMessageChange}
          isExisting={!!data}
        />
        <ActionButtons 
          onPostClick={onPostClick}
          onCancelClick={onCancelClick}
        />
      </InnerWrapper>
      <Outside onClick={onCancelClick} />
    </Wrapper>
  )
}

export default memo(Modal);
