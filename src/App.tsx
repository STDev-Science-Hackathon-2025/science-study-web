import styled from '@emotion/styled';

const App = () => {
  return (
    <Wrapper>
      <HeaderBanner>
        <div>
          <div>연금술사의 화학 원소 추리</div>
          <small>상대방이 어떤 원소인지 맞추세요</small>
        </div>
        <StartButton>시작하기</StartButton>
      </HeaderBanner>

      <ScoreBoxWrapper>
        <ScoreCard>
          <Value>54256</Value>
          <Label>친구들 최고 점수</Label>
        </ScoreCard>
        <ScoreCard>
          <Value>49823</Value>
          <Label>내 최고 점수</Label>
        </ScoreCard>
      </ScoreBoxWrapper>

      <TipsWrapper>
        <TipCard>
          <TipTitle>오늘의 지식 확인</TipTitle>
          <TipText>질소는 왜 비료에 적합할까요?</TipText>
          <ViewMoreButton>자세히 보기</ViewMoreButton>
        </TipCard>

        <TipCard>
          <TipTitle>오늘의 추천 연금술</TipTitle>
          <TipText>C(탄소)와 2개의 O(산소)가 결합되면 뭐가 될까요?</TipText>
          <ViewMoreButton>자세히 보기</ViewMoreButton>
        </TipCard>
      </TipsWrapper>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  padding: 1.5rem;
  background-color: #fafafa;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const HeaderBanner = styled.div`
  background: #1e1e1e;
  color: white;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StartButton = styled.button`
  background-color: #ffc107;
  color: black;
  font-weight: bold;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  cursor: pointer;
`;

const ScoreBoxWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ScoreCard = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: #888;
`;

const Value = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TipsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const TipCard = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 12px;
  padding: 1rem;
  text-align: left;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const TipTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const TipText = styled.p`
  font-size: 0.85rem;
  color: #555;
`;

const ViewMoreButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
