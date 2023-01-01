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

      </Heading>


    </Section>
  );
};


export default GallarySection;
