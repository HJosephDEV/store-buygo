import { Link } from 'react-router-dom';
import { useState } from 'react';
import loginIMG from '../../assets/login_img.svg';
import Input from '../Input';
import Button from '../Button';
import * as C from './styles.js';

export const FormLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <C.Form>
            <C.ContainerImageTitle>
                <C.TextTitle>Bem Vindo(a)!</C.TextTitle>
                <C.Image src={loginIMG} alt="imagem de login" />
            </C.ContainerImageTitle>
            <Input type={'email'} state={email} placeholder={"Email"} onChange={e => setEmail(e.target.value)} />
            <Input type={'password'} state={password} placeholder={"Senha"} onChange={e => setPassword(e.target.value)} />
            <C.ContainerButton>
                <Link className="link" to="/login">
                    <Button>
                        <C.ButtonName>entrar</C.ButtonName>
                    </Button>
                </Link>
            </C.ContainerButton>
            <C.ContainerText>
                <C.Text1>Não possui conta?</C.Text1>
                <Link className="link" to="/register">
                    <C.Text2>Criar Conta.</C.Text2>
                </Link>
            </C.ContainerText>
            <C.ContainerText>
                <Link className="link" to="/">
                    <C.Text2>voltar ao início</C.Text2>
                </Link>
            </C.ContainerText>
        </C.Form>
    );
}

export default FormLogin;
