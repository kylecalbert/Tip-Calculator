///tip per person = bill amount x tip percentage / number of people

export const tipPerPerson = (tip, customTip, noOfPersons, bill) => {
  console.log('Inputs:', { tip, customTip, noOfPersons, bill });
  const userTip = tip !== 0 ? tip / 100 : customTip / 100;

  console.log('User Tip:', userTip);

  // Checking if numberOfPeople is not 0 before performing the division
  const tipPerPerson = noOfPersons !== 0 ? (bill * userTip) / noOfPersons : 0;
  const roundedTipPerPerson = tipPerPerson.toFixed(3);

  console.log('Tip Per Person:', tipPerPerson);

  return roundedTipPerPerson;
};

///total per person = tipPerPerson + bill / number of people

export const totalPerPerson = (tip, customTip, noOfPersons, bill) => {
  console.log('Inputs:', { tip, customTip, noOfPersons, bill });
  const userTip = tip !== 0 ? tip / 100 : customTip / 100;
  console.log('User Tip:', userTip);
  // Checking if numberOfPeople is not 0 before performing the division
  const tipPerPerson = noOfPersons !== 0 ? (bill * userTip) / noOfPersons : 0;
  const totalPerPeron =
    noOfPersons !== 0 ? tipPerPerson + bill / noOfPersons : 0;

  console.log('Tip Per Person:', tipPerPerson);

  return totalPerPeron.toFixed(3);
};
