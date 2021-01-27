import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Page>
      <FooterDiv id='footer'>
        <Text>
          <b>Sign in</b>
          <span>
            {' '}
            to add this item to your wishlist, follow it, or mark it as not
            interested
          </span>
        </Text>
      </FooterDiv>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
`;

const FooterDiv = styled.div`
  width: 940px;
  height: 45px;
  margin: auto;
  /* margin-top: 428px; */

  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(198, 212, 223);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
`;

const Text = styled.div`
  padding-left: 15px;
  padding-top: 15px;
  b {
    cursor: pointer;
  }
  b:hover {
    color: rgb(102, 192, 244);
  }
`;
export default Footer;
