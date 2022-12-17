import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import styled from '@emotion/styled';
import { JEJU_PICS, STUDIO_PICS } from 'src/assets/images';
import { VerticalCarousel } from 'src/components/VerticalCarousel';

const Heading = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 14px;
`;

const GallarySection = () => {
  return (
    <Section backgroundColor={COLORS.highlight3} title={`사진 구경하기`}>
      <Heading>
        셀프 촬영사진
      </Heading>
      <VerticalCarousel
        images={STUDIO_PICS}
        alt="셀프스튜디오 사진"
        showSmallerImageOnMobile={true}
      />
      <Heading style={{ marginTop: 48 }}>
        창경궁에서 한복입고 찍은 사진
      </Heading>
      <VerticalCarousel alt="제주도 웨딩 사진" images={JEJU_PICS} />
      <Heading style={{ marginTop: 48 }}>
        촬영 비하인드
      </Heading>

      <YouTubeEmbed />
    </Section>
  );
};

const YouTubeEmbed = () => (
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/SVtq2m0853s?controls=0&amp;autoplay=1&amp;mute=1"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);
export default GallarySection;
