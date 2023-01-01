import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import Image from 'next/image';
import { BorderedTable } from 'src/components/Table';
import avatarImage from 'public/couple.png';

const IntroSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight1}>
      <WelcomeText />
      <FromInfo />
      <div style={{ position: 'relative' }}>
        <AvatarImage />
        <InfoTable />
      </div>
    </Section>
  );
};

const AvatarImage = () => {
  return (
    <div
      style={{
        maxWidth: '230px',
        position: 'absolute',
        width: '100%',
        bottom: '-12rem',
        right: 0,
      }}
    >
      <Image
        src={avatarImage}
        alt=""
        // sizes="(min-width: 75em) 10vw,
        //         (min-width: 48em) 10vw,
        //         10vw"
        // layout="responsive"
        style={{ transform: 'scaleX(-1)' }}
      />
    </div>
  );
};

const WelcomeText = () => {
  return (
    <div>
      <p>
        약 2년 연애 끝에 결혼합니다.
        <br />
        서로가 없는 시간을 상상하기 어려워
        <br />
        새로운 시작을해보려 합니다.
      </p>
    </div>
  );
};

const FromInfo = () => {
  return (
    <div>
      이영호, 윤성미 의 장남 승진
      <br />
      길성용, 이민자 의 장녀 미영
    </div>
  );
};

const InfoTable = () => {
  return (
    <BorderedTable style={{ margin: '3rem 0 9rem', position: 'relative' }}>
      <tbody>
        <tr>
          <td>언제</td>
          <td>
            2023년 3월 18일 토요일
            <br />오후 3시
          </td>
        </tr>
        <tr>
          <td>어디서</td>
          <td>
            부천역 채림웨딩홀 <br />
            경기도 부천시 부천로 3-1
          </td>
        </tr>
      </tbody>
    </BorderedTable>
  );
};

export default IntroSection;
