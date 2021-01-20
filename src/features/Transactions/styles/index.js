import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const StyledText = styled.Text`
  text-align: center;
`;

export const List = styled.SectionList`
  padding-left: 16px;
  padding-right: 16px;
`;

export const ListItem = styled.TouchableWithoutFeedback``;

export const ListItemContent = styled.View`
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  padding-top: 8px;
  background-color: white;
  margin-bottom: 8px;
  border-radius: 4px;
`;

export const ListItemTitle = styled.Text`
  font-size: 16px;
  padding-bottom: 4px;
  font-family: SourceSansPro-SemiBold;
  flex: 1;
`;

export const ListItemSubText = styled.Text`
  font-size: 12px;
  font-family: SourceSansPro-Regular;
`;

export const ListItemRightText = styled.Text`
  font-size: 13px;
  padding-bottom: 4px;
  font-family: SourceSansPro-SemiBold;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: SourceSansPro-SemiBold;
  padding-bottom: 8px;
  margin-top: 16px;
`;

export const SearchBarContainer = styled.View`
  padding: 16px;
`;

export const PickerContainer = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  justify-content: flex-end;
  align-items: flex-end;
`;
