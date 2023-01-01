import React from 'react';
import { COLORS } from 'src/assets/theme';
import { RSVPButton, YoutubeButton } from 'src/components/Button';
import Section from 'src/components/Section';
import Image from 'next/image';
import tobox from 'public/tobox.png';
import gift from 'public/gift.png';

const NoticeSection = () => {
  return (
    <Section
      backgroundColor={COLORS.highlight3}
      title={`결혼식 참고사항`}
    >
      <p>미리 알아두면 편한 것들을 말씀드려요.</p>
      <ul style={{ listStyle: 'none', margin: 0 }}>

        <QnA
          question="식장은 어디에 있나요?"
          answer="자차로 오시면 채림웨딩홀로 검색해서 오시면되고, 도보로 오시면 부천역 3번출구로 나오면 바로 보여요."
        />
        <QnA
          question="주차는 어디에 하나요?"
          answer="웨딩홀 바로 옆에 주차장이 있어요. 식이 끝나면 로비에서 주차권을 받아가시면 되요."
        />
        <QnA
          question="몇시까지 가면 돼요?"
          answer={
            <>
              식은 15시부터 시작하니깐 15시 전에 오시면 되요.
            </>
          }
        />
        <QnA
          question="식사는 어떻게 하나요?"
          answer={
            <>
              웨딩홀 붸페에서 드시면 되고 식사가능 시각은 ~ 이에요.
            </>
          }
        />
      </ul>
    </Section>
  );
};

function QnA({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  return (
    <li>
      <strong>Q. {question}</strong>
      <div style={{ padding: '0 0 1.6rem' }}>{answer}</div>
    </li>
  );
}

export default NoticeSection;
