import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import { TimelineTable } from 'src/components/Table';

const TimelineSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight2} title="그 날의 일정">
      <TimelineTable>
        <tbody>
          <tr>
            <td>15:00</td>
            <td>
              <strong>본식 시작</strong>
              <ul>
                <li>오랜만에 만난 지인들과 인사해요.</li>
                <li>인생네컷 사진도 찍을 수 있어요.</li>
              </ul>
            </td>
          </tr>

        </tbody>
      </TimelineTable>
    </Section>
  );
};

export default TimelineSection;
