import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.View`
  ${(props) => (props.fullWidth ? 'flex: 1;' : '')}
  ${(props) => (props.topSpace ? 'margin-top: 32px;' : '')}
`;

export const ContentContainer = styled.View`
  background-color: white;
  width: 100%;
  padding: 24px;
`;

export const TransactionCard = styled.View``;

export const Title = styled.Text`
  font-size: 32px;
  font-family: SourceSansPro-SemiBold;
  text-align: center;
  padding-bottom: 12px;
`;

export const Price = styled.Text`
  font-size: 40px;
  font-family: SourceSansPro-Bold;
  text-align: center;
`;

export const Label = styled.Text`
  font-family: SourceSansPro-SemiBold;
  color: gray;
`;

export const DateText = styled.Text`
  font-size: 14px;
  font-family: SourceSansPro-Bold;
`;

export const PaidFrom = styled.Text`
  font-size: 14px;
  font-family: SourceSansPro-Bold;
`;

export const CategoryText = styled.Text`
  font-size: 12px;
  font-family: SourceSansPro-SemiBold;
`;

export const EditButton = styled.TouchableOpacity`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #62d9a2;
  border-radius: 4px;
`;

export const EditButtonText = styled.Text`
  font-size: 14px;
  font-family: SourceSansPro-Bold;
  color: white;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #f0f0f0;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 28px;
`;

export const Image = styled.Image`
  height: 18px;
  width: 18px;
`;
