import styled from 'styled-components'

export const Button = (props) => {

    const ButtonClass = styled.button`

    border-radius: 10px;

    line-height: 1.2;

    text-transform: uppercase;
    text-decoration: none;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    transition: 0.4s;

    background: -webkit-linear-gradient(to left, #FFCD00, #FF4F55);
    background: -o-linear-gradient(to left, #FFCD00, #FF4F55);
    background: -moz-linear-gradient(to left, #FFCD00, #FF4F55);
    background: linear-gradient(260deg, #FFCD00 10%, #FF4F55 40%);

    &:hover{
        cursor: pointer;
        transform: scale(1.1);   
    }
`;
    return(<ButtonClass>{props.children}</ButtonClass>)
}

export default Button;