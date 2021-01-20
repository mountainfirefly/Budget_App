import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  background-color: white;
  border-width: 0px;
  border-radius: 4px;
  color: black;
  font-size: 15px;
  letter-spacing: 0.5px;
  font-family: SourceSansPro-SemiBold;
  padding-left: 12px;
  padding-right: 12px;
  shadow-color: #000;
  shadow-opacity: 0.34;
  shadow-radius: 4px;
  flex: 1;
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding-left: 12px;
  padding-right: 12px;
`;

export const Image = styled.Image`
  height: 18px;
  width: 18px;
`;
