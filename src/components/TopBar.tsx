import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import Backward from '../assets/backward.svg?react';
import Setting from '../assets/setting.svg?react';

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;
  const showBack = ['/chats'].includes(path);

  return (
    <BarWrapper showBack={showBack}>
      {showBack && <BackwardIcon onClick={() => navigate(-1)} />}
      <SettingIcon />
    </BarWrapper>
  );
};

export default TopBar;

// 타입 지정
const BarWrapper = styled.header<{ showBack: boolean }>`
  position: relative;
  z-index: 4;
  height: 48px;
  display: flex;
  justify-content: ${({ showBack }) => (showBack ? 'space-between' : 'flex-end')};
  align-items: center;
  padding: 20px 20px 0;
  background-color: transparent;
`;

const BackwardIcon = styled(Backward)`
  font-size: 20px;
  cursor: pointer;
`;

const SettingIcon = styled(Setting)`
  font-size: 20px;
  cursor: pointer;
`;
