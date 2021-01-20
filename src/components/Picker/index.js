import React from 'react';
// import {Picker as PickerView} from 'react-native'
import {Picker as PickerView} from '@react-native-picker/picker';

import styles from './styles';

const Picker = (props) => {
  return (
    <PickerView
      selectedValue={props.value}
      style={styles.picker}
      itemStyle={styles.pickerText}
      mode={'dropdown'}
      onValueChange={(itemValue, itemIndex) => props.onChange(itemValue)}>
      {props.options.map((option) => {
        return <PickerView.Item label={option.label} value={option.value} />;
      })}
    </PickerView>
  );
};

export {Picker};
