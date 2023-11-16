import React, { useContext } from 'react';
import {
  SelectTipContainer,
  SelectTipGrid,
  SelectTipItems,
  TipInputFormContainer,
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

  const { customTip, setCustomTip, setTip, tip, noOfPersons, bill } =
    useContext(TipCalculatorContext);

  const handleButtonClick = (percentage) => {
    if (customTip !== 0) {
      setCustomTip(0);
    }
    setTip(percentage);
  };

  console.log('custom tip', customTip);
  const handleOnChange = (e) => {
    if (tip !== 0) {
      setTip(0);
    }
    setCustomTip(Number(e.target.value));
  };

  return (
    <TipInputFormContainer>
      <InputField
        title="Bill"
        placeholder="0"
        type="number"
        icon={dollarSign}
        value={bill}
      />
      <SelectTipContainer>
        <Text padding="0 0 10px 0" color={colors.neutral.darkGrayishCyan}>
          Select Tip %
        </Text>
        <SelectTipGrid data-testid="tip-buttons">
          {tipPercentages.map((percentage) => (
            <SelectTipItems
              onClick={() => handleButtonClick(percentage)}
              isSelected={tip === percentage}
              key={percentage}
            >
              <Text size={sizes.small}>{percentage}%</Text>
            </SelectTipItems>
          ))}
          <CustomTipInput
            placeholder="Custom"
            type="number"
            onChange={(e) => handleOnChange(e)}
            value={customTip ? customTip : ''}
            data-cy="customInput-cy-btn"
          />
        </SelectTipGrid>
      </SelectTipContainer>
      <InputField
        placeholder="0"
        title="Number of People"
        type="number"
        icon={personIcon}
        value={noOfPersons}
      />
    </TipInputFormContainer>
  );
};
