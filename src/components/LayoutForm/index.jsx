import * as C from './styles.js';

export const LayoutForm = (props) => {
    return(
        <C.Container>
            <C.ContainerForm>
                <C.WrapForm>
                    {props.children}
                </C.WrapForm>
            </C.ContainerForm>
        </C.Container>
    )
}

export default LayoutForm;