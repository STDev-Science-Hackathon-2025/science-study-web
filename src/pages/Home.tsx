import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Element1 from '../assets/banner_element_1.svg?react';
import Element2 from '../assets/banner_element_2.svg?react';
import Search from '../assets/search.svg?react';
import TopBarHome from '../components/TopBarHome';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Background>
        <Layer>
          <TopBarHome />
          <Element1Icon />
          <Element2Icon />
          <Banner>
            <Title>
              <Bold>연금술사</Bold>의 <Emphasized>화학 원소</Emphasized> 추리
            </Title>
            <SubTitle>수상한 화학 원소가 누군지 맞춰보아요!</SubTitle>
            <StartButton onClick={() => navigate('/game')}>시작하기</StartButton>
          </Banner>
        </Layer>
      </Background>

      <BottomBox>
        <Section>
          <SectionTitle>🗺 4월 원소 탐험 지도 제작 점수</SectionTitle>
          <ScoreBoxWrapper>
            <ScoreCard>
              <Label>친구들 최고 점수</Label>
              <Score>54256</Score>
            </ScoreCard>
            <ScoreCard>
              <Label>내 최고 점수</Label>
              <Score>49823</Score>
            </ScoreCard>
          </ScoreBoxWrapper>
        </Section>

        <Section>
          <SectionTitle>💡 오늘의 TIP</SectionTitle>
          <TipList>
            <TipCard>
              {/* Text 여백은 margin. 카드나 요소 간격 관리는 gap. */}
              <TextBox>
                <TipLabel>오늘의 지식 확인</TipLabel>
                <TipText>질소는 왜 비료에 적합할까요?</TipText>
              </TextBox>
              <TipButton>
                <SearchIcon />
              </TipButton>
            </TipCard>

            <TipCard>
              <TextBox>
                <TipLabel>오늘의 추천 연금술</TipLabel>
                <TipText>C(탄소)와 2개의 O(산소)가 합쳐지면 뭐가 될까요?</TipText>
              </TextBox>
              <TipButton>
                <SearchIcon />
              </TipButton>
            </TipCard>
          </TipList>
        </Section>
      </BottomBox>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  font-family: 'Pretendard', sans-serif;
  overflow: hidden;
`;

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
  background: radial-gradient(207.76% 210.57% at 50% 50%, #817fff 0%, #4f4dcd 100%);
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 360px;
  background: linear-gradient(180deg, rgba(6, 6, 6, 0.5) -7.36%, rgba(129, 127, 255, 0) 54.26%);
  pointer-events: none; // 클릭 방지
`;

const Element1Icon = styled(Element1)`
  position: absolute;
  top: 26px;
  left: -30px;
  z-index: 1;
  transform: rotate(-9.942deg);
  width: 160px;
`;

const Element2Icon = styled(Element2)`
  position: absolute;
  top: 168px;
  left: 260px;
  transform: rotate(12.452deg);
  width: 160px;
`;

const Banner = styled.main`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 360px;
  text-align: center;
  pointer-events: auto;
`;

const Title = styled.h1`
  color: #fff;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: 'SB Aggro';
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.375px;
`;

const Bold = styled.span`
  color: #a3ff99;
`;

const Emphasized = styled.span`
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: #fbb03b; // 주황색
    z-index: -1;
  }
`;

const SubTitle = styled.p`
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.6);
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.225px;
`;

const StartButton = styled.button`
  margin-top: 18px;
  padding: 12px 24px;
  width: 180px;
  border-radius: 47.5px;
  background: #f7f7f7;
  color: #222;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

const BottomBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 20px 130px 20px;
  width: 100%;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  position: absolute;
  transform: translateY(-50px);
  z-index: 1;
`;

const Section = styled.article`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.255px;
`;

const ScoreBoxWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const ScoreCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  background: #f7f7f7;
`;

const Score = styled.span`
  color: #333;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -0.375px;
`;

const Label = styled.span`
  margin-bottom: 2px;
  color: #878787;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.195px;
`;

const TipList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background: #f7f7f7;
`;

const TipCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  border-radius: 12px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 16px;
    right: 16px;
    height: 1px;
    background-color: #e0e0e0;
  }

  &:last-of-type::after {
    display: none;
  }
`;

const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TipLabel = styled.span`
  color: #9c9c9c;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.15px;
`;

const TipText = styled.p`
  color: #333;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.225px;
`;

const TipButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #817fff;
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
`;
