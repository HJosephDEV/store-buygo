import { useState } from 'react';
import { Link } from "react-router-dom";
import Input from '../Input';
import Button from '../Button';
import * as C from '../FormLogin/styles.js';
import registerIMG from '../../assets/register_img.svg';

export const FormRegister = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    return (
        <C.Form>
            <C.ContainerImageTitle>
                <C.TextTitle>Registro</C.TextTitle>
                <C.Image src={registerIMG} alt="imagem de registro" />
            </C.ContainerImageTitle>
            <Input type={'text'} state={name} placeholder={"Nome"} onChange={e => setName(e.target.value)}/>
            <Input type={'email'} state={email} placeholder={"Email"} onChange={e => setEmail(e.target.value)}/>
            <Input type={'password'} state={password} placeholder={"Senha"} onChange={e => setPassword(e.target.value)}/>
            <C.ContainerButton>
                <Link className="link" to="/register">
                    <Button>
                        <C.ButtonName>registrar</C.ButtonName>
                    </Button>
                </Link>
            </C.ContainerButton>
            <C.ContainerText>
                <C.Text1>Já possui conta?</C.Text1>
                <Link className="link" to="/login">
                    <C.Text2>Entrar</C.Text2>
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

export default FormRegister;