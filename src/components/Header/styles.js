import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 385px;

    @media only screen and (max-width: 359px) {
        height: 340px;
    }
`;

export const HeaderTopSide = styled.div`
    width: 95%;
    margin: 0 auto;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const ContainerButtons = styled.div`
    width: 280px;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .link {
        text-decoration: none;
    }

    @media only screen and (max-width: 359px) {
        width: 100%;
    }
`;

export const ContainerButton = styled.div`
    width: 100px;
    height: 35px;
    text-decoration: none;
`;

export const ButtonName = styled.span`
    color: #FFF;

    @media only screen and (max-width: 359px) {
        font-size: 12px;
    }
`;

export const HeaderBotSide = styled.div`
    width: 95%;
    margin: 15px auto 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerLogo = styled.div`
    width: 400px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 552px) {
        width: 100%;
        height: 200px;
    }

    @media only screen and (max-width: 359px) {
        height: 150px;
    }
`;

export const LogoImage  = styled.img`
    width: 150px;
    height: 200px;

    @media only screen and (max-width: 552px) {
        width: 120px;
        height: 170px;
    }

    @media only screen and (max-width: 359px) {
        width: 80px;
        height: 110px;
    }
`;

export const LogoName = styled.h1`
    color: #FFF;
    font-weight: 700;
    font-size: 48px;
    margin-left: 10px;

    @media only screen and (max-width: 359px) {
        font-size: 28px;
    }
`;

export const Subtitle = styled.h2`
    margin-top: 20px;
    color: #FFF;
    letter-spacing: 1px;
    font-weight: 700;

    @media only screen and (max-width: 724px) {
        font-size: 20px;
    }
    
    @media only screen and (max-width: 552px) {
        font-size: 18px;
        text-align: center;
        word-wrap: break-word;
    }

    @media only screen and (max-width: 359px) {
        font-size: 14px;
    }

`;

