import { styled, css } from 'styled-components';
import React from 'react';
import { Oauth } from '~/types/oauth.types';
import Kakao from '~/assets/icons/oauth/kakao.svg'
import Google from '~/assets/icons/oauth/google.svg';
import { OAUTH_BUTTON_MESSAGE, OAUTH_LINK } from '~/constants/api';
import { FONT_SIZE } from '~/styles/common';

interface LoginButtonProps {
  type : Oauth;
}

const LoginIcon: Record<string, React.ReactNode> = {
  kakao: <Kakao width={24} />,
  google: <Google width={24} />,
}

const doLogin = (type: Oauth) => {
  window.location.href = OAUTH_LINK[type];
}

function LoginButton({type} : LoginButtonProps) {
  const onClick = () => {
    doLogin(type);
  }

  return (
    <StyledLoginButtonWrapper type={type} onClick={onClick}>
      <div>{LoginIcon[type]}</div>
      <StyledLoginButtonText>{OAUTH_BUTTON_MESSAGE[type]}</StyledLoginButtonText>
    </StyledLoginButtonWrapper>
  );
}


export default LoginButton;

const StyledLoginButtonWrapper = styled.button<LoginButtonProps>`
  display: flex;
  align-items: center;

  width: 100%;
  height: fit-content;

  padding: 2.4rem 1.6rem;

  border: none;
  border-radius: 12px;
  background: var(--white);

  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;

  & + & {
    margin-top: 1.2rem;
  }

  ${({ type }) =>
    type === 'kakao' &&
    css`
      background: #fee500;
    `}

  ${({ type }) =>
  type === 'google' &&
  css`
      border: 1px solid var(--gray-3);
    `}

  cursor: pointer;
  transition: box-shadow 0.2s cubic-bezier(0.2, 0, 0, 1), transform 0.1s cubic-bezier(0.2, 0, 0, 1);
`;

const StyledLoginButtonText = styled.span`
  margin: 0 auto;

  color: inherit;
  font-size: ${FONT_SIZE.md};
`;
