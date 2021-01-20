import AsyncStorage from '@react-native-async-storage/async-storage';

export const validateForm = (validationSchema, data) => {
  const requiredFields = Object.keys(validationSchema).filter((key) => {
    return validationSchema[key].required;
  });
  let valid = true;

  requiredFields.forEach((field) => {
    if (!data[field]) {
      valid = false;
    }
  });

  return valid;
};

export const updateStorage = async (value) => {
  try {
    await AsyncStorage.setItem('budgetLoginDetails', JSON.stringify(value));
  } catch (e) {
    // save error
  }
};

export const getStorageData = async (value) => {
  try {
    const result = await AsyncStorage.getItem('budgetLoginDetails');
    const parsedResult = JSON.parse(result) || {};

    return parsedResult.loggedIn;
  } catch (err) {
    // err
    return false;
  }
};
