/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useMemo, useRef, useState } from 'react';

import ChatElement from '../assets/chat_element.svg?react';
import TopBarGame from '../components/TopBarGame';

const sampleQuestions = [
  '너는 우리 몸 속에도 있어?',
  '너는 물 속에도 숨어 있어?',
  '넌 풍선에 담겨서 날아가기도 해?',
  '넌 대기 오염이랑 관련이 있어?',
  '넌 우리가 숨을 쉴 때 내뱉는 공기 속에 들어 있어?',
  '너는 불이 붙을 수 있어?',
];

const Game = () => {
  const [sessionId, setSessionId] = useState<number | null>(null);
  const [score, setScore] = useState<number>(100);
  const [question, setQuestion] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [answer, setAnswer] = useState('');
  const [messages, setMessages] = useState<{ question: string; answer: string }[]>([]);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const randomQuestions = useMemo(() => {
    return sampleQuestions
      .sort(() => Math.random() - 0.5) // 무작위 섞기
      .slice(0, 4); // 앞에서 4개만 자르기
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    axios.post('/sessions').then((res) => {
      const id = res.data?.sessionId ?? 1;
      setSessionId(id);
    });
  }, []);

  const handleSubmit = async (input?: any) => {
    const q = input ?? question;
    if (!sessionId || !q.trim()) return;

    const res = await axios.post(`/llama/ask-gpt/${sessionId}`, { message: q });
    const { answer, score: newScore, done } = res.data;

    setMessages((prev) => [...prev, { question: q, answer }]);
    setScore(newScore);
    setAnswer(answer);
    setQuestion('');
    if (done === 1) setShowModal(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const toggleSuggestions = () => setShowSuggestions((prev) => !prev);

  const handleSuggestionClick = (selected: string) => {
    setShowSuggestions(false);
    setQuestion(''); // 입력창 비우기 (UX상 안 남기려면)
    handleSubmit(selected);
  };

  return (
    <Wrapper>
      <TopBarGame />
      <IntroBox>
        <ChatElementIcon />
        <TextBox>
          <SystemText>
            아래의 <strong>호감도가 0으로 떨어지면</strong> 실험에 실패합니다.
          </SystemText>
          <SystemText>
            <strong>예 / 아니오로 대답할 수 있는 질문</strong>으로 원소를 맞춰보세요!
          </SystemText>
        </TextBox>
      </IntroBox>
      <ScoreBox>호감도: {score}</ScoreBox>

      <MessageSection>
        <CharacterMessage>
          <MessageText>[실험 기록 · #1]</MessageText>
          <MessageText>액체로 만들어졌더니 너무 차가워서 몸감을 잃었다...</MessageText>
        </CharacterMessage>
        <EmptyMessage>질문을 이어가보세요!</EmptyMessage>

        {messages.map(({ question, answer }, idx) => (
          <div key={idx} style={{ width: '100%', marginBottom: '8px' }}>
            <UserMessage>{question}</UserMessage>
            <AIMessage>{answer}</AIMessage>
          </div>
        ))}
        <div ref={messageEndRef} />
      </MessageSection>

      {showSuggestions && (
        <SuggestionBox>
          {randomQuestions.map((q, i) => (
            <SuggestionItem key={i} onClick={() => handleSuggestionClick(q)}>
              {q}
            </SuggestionItem>
          ))}
        </SuggestionBox>
      )}

      <ChatInput>
        <Input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="질문을 입력해보세요!"
        />
        <SendButton onClick={toggleSuggestions}>📘</SendButton>
        <SendButton onClick={handleSubmit}>➤</SendButton>
      </ChatInput>

      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent>
            <p>🎉 정답을 맞췄어요!</p>
            <p>정답 해설을 여기에 적어주세요.</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};

export default Game;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  background: #fff;
  font-family: 'Pretendard', sans-serif;
`;

const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  background: #817fff;
  color: #fff;
  padding: 10px 16px;
  width: 100%;
  font-size: 12px;
  border: 1px solid #817fff;
`;

const ChatElementIcon = styled(ChatElement)`
  width: 32px;
  height: 32px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SystemText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.408px;
  opacity: 0.9;
`;

const ScoreBox = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const MessageSection = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  padding-bottom: 120px;
`;

const CharacterMessage = styled.div`
  width: calc(100% - 40px);
  background: #fff3cd;
  color: #856404;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 13px;
  transform: rotate(-4.5deg);
`;

const MessageText = styled.div`
  position: relative;
  padding: 8px 0 4px;
  margin-bottom: 4px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0px;
    height: 1px;
    background-color: #e0e0e0;
  }

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

const EmptyMessage = styled.div`
  position: relative;
  margin-top: 50px;
  width: calc(100% - 40px);
  text-align: center;
  color: #cecece;
  font-size: 13px;

  &::before {
    content: '';
    position: absolute;
    top: -16px;
    left: 0px;
    right: 0px;
    height: 1px;
    background-color: #e0e0e0;
  }
`;

const AIMessage = styled.div`
  margin: 12px auto 4px 20px;
  background: #f1f1f1;
  color: #333;
  padding: 10px 16px;
  max-width: 80%;
  border-radius: 16px;
  font-size: 14px;
`;
const UserMessage = styled.div`
  margin: 12px 20px 4px auto;
  background: #f1f1f1;
  color: #333;
  padding: 10px 16px;
  max-width: 80%;
  border-radius: 16px;
  font-size: 14px;
`;

const ChatInput = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  display: flex;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 24px;
  padding: 8px 12px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  font-size: 14px;
  outline: none;
`;

const SendButton = styled.button`
  background: #7b61ff;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 8px 12px;
  margin-left: 8px;
  cursor: pointer;
  font-size: 16px;
`;

const SuggestionBox = styled.div`
  position: fixed;
  bottom: 80px; // 입력창 위에
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  background-color: #ffa733;
  border-radius: 16px 16px 0 0;
  padding: 12px 0;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const SuggestionItem = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  width: 80%;
  text-align: center;
  font-weight: bold;
`;
