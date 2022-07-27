import styled from "styled-components";

export const Li = styled.li`
    width: 200px;
    height: 250px;
    background-color: #FFF;
    border-radius: 15px;
    border: 3px solid #FFF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    cursor: pointer;

    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;

    &:hover {
        transform: scale(1.05);
        border: 3px solid #FF4F55;  
    }

    @media only screen and (max-width: 930px) {
        width: 150px;
    }
`;

export const Div = styled.div`
    width: 140px;
    height: 140px;
    display: flex;
    justify-content: center;
`;

export const Img = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt
}))`
    max-width: 100%;
    max-height: 100%;

    @media only screen and (max-width: 930px) {
        width: 130px;
        height: 130px;
    }
`;

export const ItemName = styled.span`
    margin: 20px 0 3px 0;
    display: block;
    width: 100%;
    word-wrap: break-word;
    overflow: hidden;
    font-size: 15px;
    text-align: center;
    color: #000;
`;

export const ItemPrice = styled.span`
    font-size: 13px;
    color: #000;
`;