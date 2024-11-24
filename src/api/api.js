export const api = {
  readList: {
    update: (readList) => {
      localStorage.setItem('readingBooks', JSON.stringify(readList));
    },
    onChange: (callback) => {
      const getReadList = () => {
        const readList = JSON.parse(
          localStorage.getItem('readingBooks') ?? '[]'
        );
        callback(readList);
      };

      window.addEventListener('storage', getReadList);

      getReadList();

      return () => window.removeEventListener('storage', getReadList);
    },
  },
};
