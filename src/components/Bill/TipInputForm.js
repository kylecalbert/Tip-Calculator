import React, { useContext } from 'react';
import {
  BillContainer,
  BillSelectionContainer,
  SelectTipContainer,
  SelectTipGrid,
  SelectTipItems,
} from './TipInputForm.styled';
import { InputField } from '../InputField/InputField';
import dollarSign from '../../images/icon-dollar.svg';
import personIcon from '../../images/icon-person.svg';
import { CustomTipInput } from './TipInputForm.styled';
import { Text } from '../Text/Text';
import colors from '../colors/colors';
import { sizes } from '../sizes/sizes';
import { TipCalculatorContext } from '../TipCalculatorContext/TipCalculatorContext';

export const TipInputForm = () => {
  const tipPercentages = [5, 10, 15, 20, 25]; ///adding an arrya so values can be dynamic and updated easily
  //previously i as adding mutliple tip grid items which used up lots of unnesary code space

  const {
    selectedButton,
    setSelectedButton,
    customTip,
    setCustomTip,
    setTip,
    tip,
  } = useContext(TipCalculatorContext);

  ///if tip! = 0  disable button
  ///if tip = 0 enable

  const handleButtonClick = (percentage) => {
    if (selectedButton === percentage) {
      setSelectedButton(0);
      setTip(customTip);
    } else {
      setSelectedButton(percentage);
      setTip(percentage);
    }
  };

  console.log('tip');

  console.log(tip);

  return (
    <BillContainer>
      <BillSelectionContainer>
        <InputField
          title="Bill"
          placeholder="0"
          type="number"
          icon={dollarSign}
        />
        <SelectTipContainer>
          <Text padding="0 0 10px 0" color={colors.neutral.darkGrayishCyan}>
            Select Tip %
          </Text>
          <SelectTipGrid>
            {tipPercentages.map((percentage) => (
              <SelectTipItems
                onClick={() => handleButtonClick(percentage)}
                isSelected={selectedButton === percentage}
                key={percentage}
              >
                <Text size={sizes.small}>{percentage}%</Text>
              </SelectTipItems>
            ))}
            <CustomTipInput
              placeholder="Custom"
              type="number"
              onChange={(e) => {
                setCustomTip(e.target.value);
                setTip(Number(e.target.value));
              }}
              disabled={selectedButton !== 0}
            />
          </SelectTipGrid>
        </SelectTipContainer>
        <InputField
          placeholder="0"
          title="Number of People"
          type="number"
          icon={personIcon}
        />
      </BillSelectionContainer>
    </BillContainer>
  );
};

////do calculationof the tip amount per person is

///tip per person = bill amount x tip percentage / number of people

///place the data in a context