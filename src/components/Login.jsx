import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THREE</SignUp>
        <Description>
          Disney+ is the streaming home of Disney, Pixar, Marvel, Star Wars,
          National Geographic, and more. From new releases to your favorite
          classics and exclusive Originals, there's something for everyone.
          Access unlimited entertainment with Disney+ for $7.99/month or
          $79.99/year
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: realative;
overflow-x: hidden;
display:flex;
align-items:center;
justify-content:center;

&:before {
  background-position:top;
  background-size:cover;
  background-repeat:no-repeat;
  background-image: url("/images/login-background.jpg");
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity:0.7;
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.div`
  font-size: 11px;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img``;
