import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Backward from '../assets/backward.svg?react';
import Setting from '../assets/setting.svg?react';

const TopBarGame = () => {
  const navigate = useNavigate();

  return (
    <BarWrapper>
      <BackwardIcon onClick={() => navigate(-1)} />
      <Title>화학 원소 추리하기</Title>
      <SettingIcon />
    </BarWrapper>
  );
};

export default TopBarGame;

const BarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 48px;
  background: #817fff;
  border: 1px solid #817fff;
`;

const BackwardIcon = styled(Backward)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  flex-grow: 1;
  text-align: center;
`;

const SettingIcon = styled(Setting)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
