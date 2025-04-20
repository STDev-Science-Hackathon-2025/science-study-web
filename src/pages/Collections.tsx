import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Element1 from '../assets/banner_element_1.svg?react';
import Element2 from '../assets/banner_element_2.svg?react';
import Search from '../assets/search.svg?react';
import TopBarCollections from '../components/TopBarCollections';
// 회색 silhouette 이미지는 임시로 div 처리

const Collections = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <TopBarCollections />

      <Header>
        <Title>나의 컬렉션</Title>
        <SubTitle>귀여운 원소 친구들을 모아봐요!</SubTitle>
      </Header>

      <SearchBox>
        <SearchIcon />
        <SearchInput placeholder="원소 검색하기" />
      </SearchBox>

      <TabMenu>
        <Tab active>획득순</Tab>
        <Tab>번호순</Tab>
      </TabMenu>

      <CardGrid>
        <Card onClick={() => navigate('/collection/1')}>
          <Element1Icon />
        </Card>
        <Card onClick={() => navigate('/collection/2')}>
          <Element2Icon />
        </Card>
        <Card>
          <GrayBox />
        </Card>
        <Card>
          <GrayBox />
        </Card>
        <Card>
          <GrayBox />
        </Card>
      </CardGrid>
    </Wrapper>
  );
};

export default Collections;

// Styles

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #464490 -6.52%, #7775f6 12.91%);
  padding: 24px;
  font-family: 'Pretendard';
`;

const Header = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 800;
`;

const SubTitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 400;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 24px;
  padding: 8px 16px;
  margin-bottom: 16px;
`;

const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  fill: #bbbbbb;
  margin-right: 8px;
`;

const SearchInput = styled.input`
  border: none;
  flex: 1;
  font-size: 14px;
  outline: none;
`;

const TabMenu = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const Tab = styled.button<{ active?: boolean }>`
  background: transparent;
  border: none;
  color: ${({ active }) => (active ? '#fff' : '#ccc')};
  font-weight: ${({ active }) => (active ? '700' : '500')};
  font-size: 14px;
  cursor: pointer;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc((100% - 32px) / 3));
  gap: 16px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GrayBox = styled.div`
  width: 48px;
  height: 48px;
  background: #ccc;
  border-radius: 50%;
`;

const Element1Icon = styled(Element1)`
  width: 100px;
  height: 80px;
  transform: translateX(12px);
`;
const Element2Icon = styled(Element2)`
  width: 90px;
  height: 80px;
  transform: translateX(-10px);
`;
