import styled from 'styled-components/native';

export const StyledView = styled.View`
  flex: 1;
`;

export const StyledText = styled.Text`
  text-align: center;
`;

export const Container = styled.View`
  flex: 1px;
`;

export const List = styled.FlatList`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
`;

export const Card = styled.TouchableWithoutFeedback`
  margin-bottom: 12px;
`;

export const CardContent = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: white;
  margin-bottom: 12px;
  border-radius: 4px;
`;

export const CardTitle = styled.Text`
  flex: 1;
  font-size: 24px;
  font-family: SourceSansPro-Bold;
  padding-bottom: 8px;
`;

export const CardSubText = styled.Text`
  font-size: 14px;
  font-family: SourceSansPro-SemiBold;
`;
