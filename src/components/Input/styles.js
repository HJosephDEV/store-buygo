import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    position: relative;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;

    @media only screen and (max-width: 420px) {
        margin-bottom: 25px;
    }
`;

export const Span = styled.span.attrs(props => ({
    placeholder: props.placeholder,
}))`

    position: absolute;
    display: block;
    width: 100%;
    height: 100%;

    top: 0;
    right: 0;

    pointer-events: none;

    &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;

        transition: all 0.4s;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;

        background: -webkit-linear-gradient(to left, #FFCD00, #FF4F55);
        background: -o-linear-gradient(to left, #FFCD00, #FF4F55);
        background: -moz-linear-gradient(to left, #FFCD00, #FF4F55);
        background: linear-gradient(to left, #FFCD00, #FF4F55);
    }

    &::after {
        font-size: 15px;
        color: #999999;
        line-height: 1.2;

        content: attr(placeholder);

        display: block;
        width: 100%;
        position: absolute;
        top: 16px;
        right: 0;

        transition: all 0.4s;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
    }

    @media only screen and (max-width: 420px) {
        &::after {
            font-size: 10px;
            top:13px;
        }
    }
`;

export const Input = styled.input.attrs(props => ({
    type: props.type,
    value: props.var,
    onChange: props.onChange,
}))`

    font-size: 15px;
    color: #FFF;
    line-height: 1.2;
    border: None;
    display: block;

    width: 100%;
    height: 45px;

    background-color: transparent;

    padding: 0 5px;

    &:focus {
        outline: 0;  
    }

    &:focus + ${Span}:after {
        top: -15px;
    }

    &:focus + ${Span}:before {
        width: 100%;
    }

    @media only screen and (max-width: 420px) {
        font-size: 10px;
        height: 30px;

        &:focus + ${Span}:after {
            top: -8px;
        }
    }
`;

export const InputHasVal = styled(Input).attrs(({autoFocus: 'true',}))`
    & + ${Span}::after {
        top: -15px;
    }

    & + ${Span}::before {
        width:100%;
    }

    @media only screen and (max-width: 420px) {
    & + ${Span}::after {
        top: -8px;
    }
    
}
`;