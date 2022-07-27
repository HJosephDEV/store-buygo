import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: auto;
    background-color: #111;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.header`
    width: 100%;
    height: 50px;
    background-color: #111;
    display: flex;
    justify-content: center;
`;


export const Input = styled.input`
    background-color: #FFF;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 20px;
    padding: 15px 25px;

    &:focus {
        outline: none;
    }
`;

export const Form = styled.form`
    width: 900px;
    height: 80%;
    @media only screen and (max-width: 930px) {
        width: 525px;
    }

    @media only screen and (max-width: 552px) {
        width: 340px;
    }

    @media only screen and (max-width: 552px) {
        grid-template-columns: 150px 150px;
    }

`;

export const Ul = styled.ul`
    display: grid;
    margin-top: 65px;
    grid-template-columns: 200px 200px 200px 200px;
    grid-gap: 60px 30px;

    
    @media only screen and (max-width: 930px) {
        grid-template-columns: 150px 150px 150px;
    }

    @media only screen and (max-width: 552px) {
        grid-template-columns: 150px 150px;
    }

    @media only screen and (max-width: 359px) {
        grid-template-columns: 150px;
    }
`;