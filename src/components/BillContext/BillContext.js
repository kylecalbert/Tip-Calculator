import React, { createContext, useState } from 'react';

export const BillContext = createContext();

export const BillProvider = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [person, setPerson] = useState(0);

  return (
    <BillContext.Provider value={{ bill, setBill, person, setPerson }}>
      {children}
    </BillContext.Provider>
  );
};
