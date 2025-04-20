import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Backward from '../assets/backward.svg?react';
import Element1 from '../assets/banner_element_1.svg?react';
import Element2 from '../assets/banner_element_2.svg?react';

type ElementData = {
  elementId: number;
  elementName: string;
  elementDescription: string;
  elementCharacteristics: string;
  elementLife: string;
  elementUrl1: string;
  elementUrl2: string;
};

const CollectionDetail = () => {
  const { id } = useParams();
  const [element, setElement] = useState<ElementData | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchElement = async () => {
      const elementId = Number(id);
      if (isNaN(elementId)) return;

      try {
        const res = await axios.get(`/elements/${elementId}`);
        setElement(res.data);
      } catch (error) {
        console.error('Error fetching element:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchElement();
  }, [id]);

  if (loading) return <Wrapper>로딩 중...</Wrapper>;
  if (!element) return <Wrapper>데이터가 없습니다.</Wrapper>;

  // elementLife를 단락별로 나눔
  const lifeItems = element.elementLife
    .split(/\n(?=\d\.)/) // "1. ", "2. " 번호 앞에서 split
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <Wrapper>
      <TopBar>
        <BackwardIcon onClick={() => navigate(-1)} />
        <span>NO. {element.elementId}</span>
      </TopBar>

      <GradiantWrapper>
        <GradiantBox />
      </GradiantWrapper>
      {element.elementId === 1 ? (
        <>
          <Element1Icon />
          <Shadow />
        </>
      ) : (
        <>
          <Element2Icon />
          <Shadow />
        </>
      )}

      <TextBox>
        <div style={{ textAlign: 'center' }}>
          <Title>{element.elementName}</Title>
          <Description>{element.elementDescription}</Description>
        </div>

        <Section>
          <SectionTitle>✔ 나의 특징은?</SectionTitle>
          <TextBlock>{element.elementCharacteristics}</TextBlock>
        </Section>

        <Section>
          <SectionTitle>💧 일상생활 속 수소</SectionTitle>
          <LifeList>
            {lifeItems.map((item, index) => (
              <li key={index}>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br/>') }} />
              </li>
            ))}
          </LifeList>
        </Section>

        <Section>
          <SectionTitle>실험영상 보기</SectionTitle>
          <LinkList>
            <a href={element.elementUrl1} target="_blank" rel="noopener noreferrer">
              🔗 실험 영상 1
            </a>
            <a href={element.elementUrl2} target="_blank" rel="noopener noreferrer">
              🔗 실험 영상 2
            </a>
          </LinkList>
        </Section>
      </TextBox>
    </Wrapper>
  );
};

export default CollectionDetail;

const Wrapper = styled.div`
  position: relative;
  font-family: 'Pretendard', sans-serif;
  background: #f9f9f9;
`;

const TopBar = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  font-size: 14px;
  color: #888;

  span:last-of-type {
    color: #333;
    text-align: center;
    font-family: Pretendard;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 95.652% */
    letter-spacing: -0.408px;
  }
`;

const BackwardIcon = styled(Backward)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const GradiantWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 220px; // 적당히 위에서만 보여지게
  background: #fff;
`;

const GradiantBox = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -110px);

  width: 480px;
  height: 320px;
  margin: 0 auto;
  border-radius: 0px 0px 200px 200px;
  background: linear-gradient(180deg, #78ffdd 0%, #ffff71 100%);
`;

const Element1Icon = styled(Element1)`
  position: absolute;
  z-index: 2;
  left: 50%;
  width: 170px;
  height: 130px;
  transform: translate(calc(-50% + 12px), -100px) rotate(12.452deg);
`;
const Element2Icon = styled(Element2)`
  position: absolute;
  z-index: 2;
  left: 50%;
  width: 160px;
  height: 130px;
  transform: translate(calc(-50% - 16px), -100px) rotate(-9.942deg);
`;
const Shadow = styled.div`
  position: absolute;
  top: 250px; // 아이콘 높이에 맞춰 조절
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  filter: blur(4px);
  opacity: 0.7;
  z-index: 1;
`;

const TextBox = styled.div`
  position: absolute;
  top: 270px;
`;

const Title = styled.h2`
  margin: 12px 0 4px;
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
  white-space: pre-line;
  color: #555;
`;

const Section = styled.div`
  padding: 16px 20px;

  &:first-of-type {
    margin-top: 8px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const TextBlock = styled.div`
  padding: 20px;
  white-space: pre-line;
  color: #444;

  border-radius: 13px;
  border: 0.5px solid #d9d9d9;
  background: #fbfbfb;

  line-height: 1.6;
  font-size: 14px;
  white-space: pre-line;
`;

const LifeList = styled.ul`
  padding: 20px;
  color: #444;
  font-size: 14px;
  border-radius: 13px;
  border: 0.5px solid #d9d9d9;
  background: #fbfbfb;

  li {
    margin-bottom: 12px;
    line-height: 1.5;
  }

  font-size: 14px;
  line-height: 1.6;
  list-style: none;

  span {
    display: block;
    white-space: pre-line;
  }
`;

const LinkList = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
