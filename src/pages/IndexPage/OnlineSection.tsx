import React from 'react';
import { COLORS } from 'src/assets/theme';
import { YoutubeButton } from 'src/components/Button';
import Section from 'src/components/Section';

const OnlineSection = () => {
  return (
    <Section
      backgroundColor={COLORS.highlight3}
      title={`대구 출발 미니버스`}
    >
      <div>
        <p>
          대구에서 오시는분들은
          <br />
          미니버스를 타고 오시면 됩니다
        </p>
        <p>
          타는 장소 : 대구
          <br />
          인솔자 연락처
        </p>
      </div>
    </Section>
  );
};

export default OnlineSection;
