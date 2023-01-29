import React, { memo } from 'react'
import styled from 'styled-components';
import { Note, AddButton } from './components';
import type { NoteType } from '../../types';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px 0px;
  gap: 20px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface Props {
  notes: NoteType[],
  onAddClick(): void;
  onNoteClick(id: string): void;
  onDeleteClick(id: string): void;
}

const NotesBoard = ({ notes, onAddClick, onNoteClick, onDeleteClick }: Props) => {
  return (
    <Wrapper>
      <AddButton onClick={onAddClick} />
      {notes.length > 0 && notes.map((note) => (
        <Note 
          key={note.id}
          {...note}
          onNoteClick={onNoteClick}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </Wrapper>
  )
}

export default memo(NotesBoard);
