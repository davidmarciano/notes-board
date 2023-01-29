import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../../utils';
import type { NotesType } from '../../types';

const useNotes = () => {
  const storageNotes = useRef(storage.getItem('notes'));
  const defaultNotes: NotesType = JSON.parse(storageNotes.current);
  const [notes, setNotes] = useState<NotesType>(defaultNotes);
  const [selectedNoteId, setSelectedNoteId] = useState('');

  useEffect(() => {
    const stringify = JSON.stringify(notes);
    storage.setItem('notes', stringify);
  }, [notes]);

  const postNote = useCallback(
    (author: string, message: string, id?: string) => {
      const uniqueId = id || uuidv4();
  
      const newNote = {
        id: uniqueId,
        author,
        message,
        date: new Date(),
      };
  
      setNotes((prevState) =>({...prevState, [uniqueId]: newNote}));
    }, [setNotes]
  )

  const deleteNote = useCallback(
    (id: string) => {
      setNotes((prevState) => {
        const newNotes = {...prevState};
        delete newNotes[id];
        return newNotes;
      });
    },
    [setNotes]
  )

  const selectedNote = useMemo(() => notes[selectedNoteId], [notes, selectedNoteId]);

  const sortedNotes = useMemo(() => {
    return Object.values(notes).sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf())
  }, [notes])

  return {
    notes: sortedNotes,
    postNote,
    deleteNote,
    selectedNote,
    setSelectedNoteId,
  };
}

export default useNotes;
