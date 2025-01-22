import { useForm } from "react-hook-form";
import {
  Container,
  LoginButton,
  LoginForm,
  PasswordInput,
  RegisterLink,
  RegisterText,
  TextInputGroup,
  UsernameInput,
} from "./styles";
import { InputsInterface } from "./types";

export default function LoginPage() {
  const { register, handleSubmit } = useForm<InputsInterface>();

  function handleFormSubmit(data: InputsInterface) {
    //@TODO: call authencicate usecase
  }

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit(handleFormSubmit)}>
        <TextInputGroup>
          <UsernameInput {...register("username")} placeholder="Username" />
          <PasswordInput {...register("password")} placeholder="Password" />
        </TextInputGroup>
        <LoginButton>Login</LoginButton>
        <RegisterText>
          Não tem conta? <RegisterLink>Crie uma aqui!</RegisterLink>
        </RegisterText>
      </LoginForm>
    </Container>
  );
}
