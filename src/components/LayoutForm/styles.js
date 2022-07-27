import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const ContainerForm = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    background-color: #111;
`;

export const WrapForm = styled.div`
    width: 390px;
    background-color: rgb(26, 26, 26);
    border-radius: 10px;

    overflow: hidden;
    padding: 25px 50px;

    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);

    @media only screen and (max-width: 420px) {

        width: 90%;

    }

    @media only screen and (max-width: 247px) {

            padding: 30px;

    }
`;