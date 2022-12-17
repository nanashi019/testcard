import React from 'react';
import styled from '@emotion/styled';

const SplashSection = () => {
  return (
    <div style={{ height: '100vh', color: 'white' }}>
      <JejuVideo />
      <FlexContainer>
        <MainHeading>승진, 미영 결혼해요!</MainHeading>
        <div>
          2023년 3월 18일 토요일 오후 3시
          <br />
          부천역 채림웨딩홀
        </div>
        <HorizontalLine style={{ marginTop: '5vh' }} />
      </FlexContainer>
    </div>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  text-align: center;
`;

const MainHeading = styled.h1`
  margin: 10vh 0 24px;
`;

const HorizontalLine = styled.div`
  height: 40vh;
  border-left: 1px solid white;
`;

const JejuVideo = () => {
  return (
    <video
      controls={false}
      loop
      muted
      autoPlay
      playsInline
      style={{
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'absolute',
        zIndex: -1,
      }}
    >
      <source src={'/jejuVideo.mp4'} />
    </video>
  );
};

export default SplashSection;
