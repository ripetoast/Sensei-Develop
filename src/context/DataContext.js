import React, { useState } from 'react';

const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [quotes, setQuote] = useState([]);

  const addQuote = () => {
    setQuote([...quotes, { quote: `quote #${quotes.length + 1}` }]);
  };

  return (
    <DataContext.Provider value={{ data: quotes, addQuote }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
