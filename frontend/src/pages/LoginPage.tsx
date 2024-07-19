import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { FONT_SIZE } from '~/styles/common';
import LoginButton from '~/components/common/LoginButton';

function LoginPage() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };

  return (
    <StyledContainer>
      <StyledLoginButtonBox>
        <StyledHomeButton onClick={onClick}>비회원으로 이용하기</StyledHomeButton>
        <StyledLine> or </StyledLine>
        <LoginButton type="kakao" />
      </StyledLoginButtonBox>
    </StyledContainer>
  );
}


export default LoginPage;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.6rem;

  height: calc(100dvh - 88px);

  background-color: var(--primary-6);
`;


const StyledLoginButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  width: 100%;

  padding: 2rem;
`;

const StyledHomeButton = styled.button`
  width: 100%;
  height: 48px;

  border: none;
  border-radius: 8px;
  background-color: var(--white);

  font-size: ${FONT_SIZE.md};
  font-weight: 600;
  box-shadow: var(--shadow);
`;

const StyledLine = styled.div`
  margin: 1.2rem 0;

  color: var(--white);
  font-size: ${FONT_SIZE.md};
`;
