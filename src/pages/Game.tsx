import styled from '@emotion/styled';

const Game = () => {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>💡 오늘의 TIP</SectionTitle>
        <TipList>
          <TipCard>
            <TipLabel>오늘의 지식 확인</TipLabel>
            <TipText>질소는 왜 비료에 적합할까요?</TipText>
            <TipButton>🔍</TipButton>
          </TipCard>

          <TipCard>
            <TipLabel>오늘의 추천 연금술</TipLabel>
            <TipText>C(탄소)와 2개의 O(산소)가 합쳐지면 뭐가 될까요?</TipText>
            <TipButton>🔍</TipButton>
          </TipCard>
        </TipList>
      </Section>
    </Wrapper>
  );
};

export default Game;

const Wrapper = styled.div`
  padding: 1.5rem;
  background: linear-gradient(to bottom, #7ec8e3, #f5f5f5);
  min-height: 100vh;
  font-family: 'Pretendard', sans-serif;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const TipList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TipCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
`;

const TipLabel = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const TipText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const TipButton = styled.button`
  background-color: #e0e0f0;
  border: none;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  border-radius: 8px;
  cursor: pointer;
`;
