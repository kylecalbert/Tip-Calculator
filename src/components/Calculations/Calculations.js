///tip per person = bill amount x tip percentage / number of people

export const tipPerPerson = (tip, customTip, noOfPersons, bill) => {
  if (noOfPersons === 0 || tip === 0) {
    return 0;
  }

  console.log('Inputs:', { tip, customTip, noOfPersons, bill });
  const userTip = tip / 100;

  console.log('User Tip:', userTip);

  const tipPerPerson = (bill * userTip) / noOfPersons;
  const roundedTipPerPerson = tipPerPerson.toFixed(2);

  console.log('Tip Per Person:', tipPerPerson);

  return roundedTipPerPerson;
};

///total per person = tipPerPerson + bill / number of people

export const totalPerPerson = (tip, customTip, noOfPersons, bill) => {
  if (noOfPersons === 0) {
    console.log('Invalid input: numberOfPeople must be greater than 0.');
    return 0;
  }

  console.log('Inputs:', { tip, customTip, noOfPersons, bill });
  const userTip = tip !== 0 ? tip / 100 : customTip / 100;
  console.log('User Tip:', userTip);

  const tipPerPerson = (bill * userTip) / noOfPersons;
  const totalPerPerson = tipPerPerson + bill / noOfPersons;

  console.log('Tip Per Person:', tipPerPerson);

  return totalPerPerson.toFixed(2);
};
