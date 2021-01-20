import {Dimensions} from 'react-native';

import styled from 'styled-components/native';

const windowHeight = Dimensions.get('window').height;

export const Header = styled.View`
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 18px;
  padding-top: ${windowHeight / 8}px;
`;

export const HeaderText = styled.Text`
  font-family: SourceSansPro-Bold;
  font-size: 35px;
  color: white;
`;
