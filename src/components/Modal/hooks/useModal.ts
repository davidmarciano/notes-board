import { useCallback, useState } from 'react'

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => setIsModalOpen(true), [setIsModalOpen]);

  const hideModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

  return {
    isModalOpen,
    showModal,
    hideModal,
  };
}

export default useModal;
