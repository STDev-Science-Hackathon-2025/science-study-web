import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import ChatsOff from '../assets/nav_chats_off.svg?react';
import ChatsOn from '../assets/nav_chats_on.svg?react';
import CollectionsOff from '../assets/nav_collections_off.svg?react';
import CollectionsOn from '../assets/nav_collections_on.svg?react';
import HomeOff from '../assets/nav_home_off.svg?react';
import HomeOn from '../assets/nav_home_on.svg?react';

interface Props {
  active?: boolean;
}

const BottomBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  return (
    <BarWrapper>
      <Tab active={currentPath === '/collections'} onClick={() => navigate('/collections')}>
        {currentPath === '/collections' ? <CollectionsOnIcon /> : <CollectionsOffIcon />}
        <Label>실험실</Label>
      </Tab>

      <CenterTab active={currentPath === '/'} onClick={() => navigate('/')}>
        {currentPath === '/' ? <HomeOnIcon /> : <HomeOffIcon />}
        <Label>홈</Label>
      </CenterTab>

      <Tab active={currentPath === '/chats'} onClick={() => navigate('/chats')}>
        {currentPath === '/chats' ? <ChatsOnIcon /> : <ChatsOffIcon />}
        <Label>내 채팅</Label>
      </Tab>
    </BarWrapper>
  );
};

export default BottomBar;

const BarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 28px;
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  padding: 12px 24px;
  width: 320px;
  background-color: #444;
  border-radius: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 42.5px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2.5px);
`;

const Tab = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;
  width: 60px;
  height: 60px;
  color: ${({ active }) => (active ? 'black' : 'white')};
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  border-radius: ${({ active }) => (active ? '999px' : '0')};

  font-size: 12px;
  cursor: pointer;
`;

const CenterTab = styled(Tab)`
  margin-top: -20px;
`;

const HomeOnIcon = styled(HomeOn)`
  font-size: 20px;
`;
const HomeOffIcon = styled(HomeOff)`
  font-size: 20px;
`;
const CollectionsOnIcon = styled(CollectionsOn)`
  font-size: 20px;
`;
const CollectionsOffIcon = styled(CollectionsOff)`
  font-size: 20px;
`;
const ChatsOnIcon = styled(ChatsOn)`
  font-size: 20px;
`;
const ChatsOffIcon = styled(ChatsOff)`
  font-size: 20px;
`;

const Label = styled.div`
  margin-top: 4px;
  font-size: 11px;
`;
