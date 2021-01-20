import React from 'react';

import SearchIcon from 'assets/icons/search.png';

import {Wrapper, StyledInput, Image} from './styles';

const SearchBar = (props) => {
  return (
    <Wrapper>
      <Image source={SearchIcon} />
      <StyledInput {...props} />
    </Wrapper>
  );
};

export {SearchBar};
