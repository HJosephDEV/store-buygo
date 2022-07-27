import styled from "styled-components";

export const Form = styled.form`

`;

export const ContainerImageTitle = styled.span`
    margin: 0 auto;
    margin-bottom: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    width: 100%;
    height: 100%;

    h2 {
        color:#fff;
        
    }
`;

export const TextTitle = styled.h1`
    color: #FFF;
    font-size: 28px;

    @media only screen and (max-width: 420px) {
        font-size: 20px;
    }

    @media only screen and (max-width: 280px) {
        font-size: 14px;
    }

    
    @media only screen and (max-width: 175px) {
        font-size: 10px;
    }
`;

export const Image = styled.img`
    max-width: 50%;
    margin-top: 20px;
    
    @media only screen and (max-width: 280px) {
        display: none;
    }
`;

export const ContainerButton = styled.div`
    padding-bottom: 13px;
    width: 100%;
    height: 55px;
    
    @media only screen and (max-width: 420px) {
        height: 40px;
    }
`;

export const ButtonName = styled.span`
    font-size: 15px;
    color:#FFF;

    @media only screen and (max-width: 420px) {
        font-size:  12px;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;

export const Text1 = styled.span`
    font-size: 14px;
    color: #adadad;
    line-height: 1.5;
    padding-right: 5px;
    text-decoration: none;
    
    @media only screen and (max-width: 420px) {
        font-size:  10px;
    }
`;

export const Text2 = styled.span`
    font-size: 14px;
    color: #FF4F55;
    line-height: 1.5;
    text-decoration: none;

    @media only screen and (max-width: 420px) {
        font-size:  10px;
    }
`;