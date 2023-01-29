import { useState, ChangeEvent, useCallback, useEffect } from 'react'
import type { NoteType } from '../../../types';

interface Props {
  data: NoteType | null;
  onPost(author: string, message: string, id?: string): void;
  onClose(): void;
}

const useForm = ({ data, onPost, onClose }: Props) => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
      if(data) {
        setAuthor(data.author);
        setMessage(data.message);
      }
    }, [data]
  );

  const onAuthorChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => setAuthor(target.value),
    [setAuthor]
  );

  const onMessageChange = useCallback(
    ({ target }: ChangeEvent<HTMLTextAreaElement> ) => setMessage(target.value),
    [setMessage]
  );

  const clearInputs = useCallback(
    () => {
      setAuthor('');
      setMessage('');
    }, [setAuthor, setMessage]
  );

  const onPostClick = useCallback(
    () => {
      onPost(author, message, data?.id);
      clearInputs();
      onClose();
    },
    [clearInputs, author, message, onPost, data, onClose]
  );

  const onCancelClick = useCallback(
    () => {
      clearInputs();
      onClose();
    }, [onClose, clearInputs]
  );

  return {
    author,
    onAuthorChange,
    message,
    onMessageChange,
    onPostClick,
    onCancelClick,
  };
}

export default useForm;
