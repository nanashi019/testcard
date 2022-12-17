import React, { useEffect, useRef } from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';

const RouteSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight1} title="본식 오시는 길">
      <div style={{ marginBottom: 22 }}>
        <span style={{ fontSize: '1.2rem' }}>
          부천역 채림웨딩홀
        </span>
        <br />
        <span style={{ fontSize: '0.9rem' }}>
          경기도 부천시 부천로 3-1
        </span>
      </div>
      <KakaoMap />
    </Section>
  );
};

const KakaoMap = () => {
  let rendered = useRef(0);

  useEffect(() => {
    if (rendered.current !== 0) {
      return;
    }
    new daum.roughmap.Lander({
      timestamp: '1671296643838',
      key: '2d3e9',
      mapHeight: '200',
    }).render();
    rendered.current += 1;
  }, []);

  return (
    <div
      id="daumRoughmapContainer1671296643838"
      className="root_daum_roughmap root_daum_roughmap_landing"
      style={{ width: '100%' }}
    ></div>
  );
};

export default RouteSection;
