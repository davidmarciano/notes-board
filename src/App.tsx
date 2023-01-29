import React, { useCallback } from 'react';
import styled from 'styled-components';
import { NotesBoard, Modal } from './components';
import { useModal } from './components/Modal/hooks';
import useNotes from './components/NotesBoard/useNotes';

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0px;
`;

const App = () => {
  const { notes, postNote, deleteNote, selectedNote, setSelectedNoteId } = useNotes();
  const { isModalOpen, showModal, hideModal } = useModal();

  const onModalClose = useCallback(() => {
    setSelectedNoteId('');
    hideModal();
  }, [setSelectedNoteId, hideModal]);

  const onNoteClick = useCallback(
    (noteId: string) => {
      setSelectedNoteId(noteId);
      showModal();
    },
    [setSelectedNoteId, showModal]
  );

  const onPost = useCallback((author: string, message: string, id?: string) => {
    postNote(author, message, id);
    hideModal();
  }, [postNote, hideModal]);

  return (
    <Wrapper>
      <Title>Welcome to post board</Title>
      <NotesBoard 
        notes={notes}
        onAddClick={showModal}
        onNoteClick={onNoteClick}
        onDeleteClick={deleteNote}
      />
      <Modal 
        data={selectedNote}
        isOpen={isModalOpen}
        onPost={onPost}
        onClose={onModalClose}
      />
    </Wrapper>
  );
}

export default App;
