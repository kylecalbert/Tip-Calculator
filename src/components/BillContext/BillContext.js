import React, { createContext, useState } from 'react';

export const BillContext = createContext();

export const BillProvider = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [person, setPerson] = useState(0);
  const [selectedButton, setSelectedButton] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [tip, setTip] = useState(0);

  return (
    <BillContext.Provider
      value={{
        bill,
        setBill,
        person,
        setPerson,
        selectedButton,
        setSelectedButton,
        customTip,
        setCustomTip,
        setTip,
        tip,
      }}
    >
      {children}
    </BillContext.Provider>
  );
};
