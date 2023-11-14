import React, { createContext, useState } from 'react';

export const TipCalculatorContext = createContext();

export const TipCalculatorProvider = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [noOfPersons, setNoOfPersons] = useState(0);
  const [selectedButton, setSelectedButton] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [tip, setTip] = useState(0);

  return (
    <TipCalculatorContext.Provider
      value={{
        bill,
        setBill,
        noOfPersons,
        setNoOfPersons,
        selectedButton,
        setSelectedButton,
        customTip,
        setCustomTip,
        setTip,
        tip,
      }}
    >
      {children}
    </TipCalculatorContext.Provider>
  );
};
