import styled from '@emotion/styled';
import React from 'react';
import { GREYS } from 'src/assets/theme';

const TimelineSection = () => {
  return (
    <Footer>
      <h3></h3>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Footer>
  );
};

const Footer = styled.footer`
  background: ${GREYS.grey1};
  color: white;
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;

export default TimelineSection;
