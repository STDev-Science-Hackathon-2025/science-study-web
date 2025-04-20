import styled from '@emotion/styled';

import Setting from '../assets/setting.svg?react';

const TopBarCollections = () => {
  return (
    <BarWrapper>
      <SettingIcon />
    </BarWrapper>
  );
};

export default TopBarCollections;

const BarWrapper = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  padding: 20px;
`;

const SettingIcon = styled(Setting)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
