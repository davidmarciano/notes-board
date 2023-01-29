import React, { useMemo, MouseEvent, memo } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import type { NoteType } from '../../../../types';

const Wrapper = styled.fieldset`
  min-height: 250px;
  position:relative;
  cursor: pointer;
`;

const Title = styled.legend`
  padding: 0px 10px;
`;

const MessageWrapper = styled.div`
  height: 200px;
`;

const Message = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  white-space: pre-wrap;
`;

const Date = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0.625em;
  font-size: 12px;
`;

const DeleteButton = styled.button`
  position:  absolute;
  bottom: 0px;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #000000;
  font-size: 12px;
  &:hover {
    background-color: #eeeeee;
  }
`;

interface Props extends NoteType {
  onNoteClick(id: string): void;
  onDeleteClick(id: string): void;
}

const Note = ({ id, author, message, date, onNoteClick, onDeleteClick }: Props) => {
  const stringifyDate = useMemo(
    () => moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a'),
    [date]
  );

  const onDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDeleteClick(id);
  };

  return (
    <Wrapper onClick={() => onNoteClick(id)}>
      <Title>{author}</Title>
      <MessageWrapper>
        <Message>{message}</Message>
      </MessageWrapper>
      <Date>{stringifyDate}</Date>
      <DeleteButton onClick={onDelete}>Remove</DeleteButton>
    </Wrapper>
  )
}

export default memo(Note);
