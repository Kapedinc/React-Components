/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Helmet } from 'react-helmet';
import VectorImage from 'src/assets/images/BalanceCard_Vector.png';
import Vector1Image from 'src/assets/images/BalanceCard_Vector_1.png';
import { styled } from '@mui/material/styles';
import { BalanceCardProps } from 'src/types';

const BalanceCard1: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `10px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `299px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Content: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `40px`,
  top: `20px`,
});

const Title: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(43, 43, 43, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  height: `29px`,
  width: `370px`,
  margin: `0px`,
});

const Value: any = styled('div')({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(43, 43, 43, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `370px`,
  margin: `10px 0px 0px 0px`,
});

const BalanceChart: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `150px`,
  width: `370px`,
  margin: `10px 0px 0px 0px`,
  overflow: `hidden`,
});

const PreviewInAnimaToSeeI: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `12px`,
  boxSizing: `border-box`,
  width: `370px`,
  height: `39px`,
  left: `0px`,
  top: `0px`,
  overflow: `hidden`,
});

const Frame: any = styled('div')({
  opacity: `0.4000000059604645`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `28px`,
  margin: `0px`,
  overflow: `hidden`,
});

const PreviewInAnima: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(59, 59, 59, 1)`,
  fontStyle: `normal`,
  fontFamily: `Mulish`,
  fontWeight: `600`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Group: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `370px`,
  height: `137.5px`,
  left: `0px`,
  top: `13px`,
});

const Group1: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `370px`,
  height: `137.5px`,
  left: `0px`,
  top: `0px`,
});

const Group2: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `370px`,
  height: `137.5px`,
  left: `0px`,
  top: `0px`,
});

const Group3: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `370px`,
  height: `137.5px`,
  left: `0px`,
  top: `0px`,
});

const Vector: any = styled('img')({
  height: `137.5px`,
  width: `370px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector1: any = styled('img')({
  height: `122.5px`,
  width: `370px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

function BalanceCard(props: BalanceCardProps): JSX.Element {
  return (
    <BalanceCard1 className={props.className}>
      <Helmet>
        <title>Balance Card</title>
      </Helmet>
      <Content>
        <Title>{`Balance`}</Title>
        <Value id={'balance'}>{`$76,528,112`}</Value>
        <BalanceChart>
          <PreviewInAnimaToSeeI>
            <Frame>
              <PreviewInAnima>{`Preview in Anima`}</PreviewInAnima>
            </Frame>
          </PreviewInAnimaToSeeI>
          <Group>
            <Group1>
              <Group2>
                <Group3>
                  <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
                  <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
                </Group3>
              </Group2>
            </Group1>
          </Group>
        </BalanceChart>
      </Content>
    </BalanceCard1>
  );
}

export default BalanceCard;
