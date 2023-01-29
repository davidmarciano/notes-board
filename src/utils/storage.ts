const storage = () => {

  const getItem = (key: string) => {
    const item = localStorage.getItem(key);
    return item || '';
  };

  const setItem = (key: string, value: string) => localStorage.setItem(key, value);

  return {
    getItem,
    setItem,
  };
};

export default storage();