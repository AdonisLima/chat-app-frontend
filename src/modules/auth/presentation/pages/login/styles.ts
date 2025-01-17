import styled from "styled-components";
import { spacing } from "../../../../common/presentation/styles/spacing";
import { colors } from "../../../../common/presentation/styles/colors";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.x6};
  padding: ${spacing.x8};
  max-width: 338px;
  margin-top: 20vh;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;

  background-color: ${colors.extraLightGray};
`;

export const TextInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.x6};
`;

export const Input = styled.input.attrs({
  className: "input",
})`
  height: 48px;

  padding-left: ${spacing.x4};

  color: ${colors.almostBlack};
`;

export const UsernameInput = styled(Input)`
  width: 274px;
`;

export const PasswordInput = styled(Input)``;

export const Button = styled.button.attrs({ type: "submit" })`
  cursor: pointer;
`;

export const LoginButton = styled(Button)`
  max-width: 274px;
  height: 48px;
  color: ${colors.almostBlack};

  background-color: ${colors.midGray};
  border: 0;
`;

export const RegisterText = styled.span`
  color: ${colors.almostBlack};
  text-align: center;
  font-size: 11px;
`;

export const RegisterLink = styled.a`
  color: ${colors.darkGray};
  font-weight: 700;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
