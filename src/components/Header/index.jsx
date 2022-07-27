import {Link} from 'react-router-dom'
import logoIMG from '../../assets/fire_logo.png'
import Button from '../Button'
import * as C from './styles.js';

export const Header = () => {
    return(
        <C.Header>
            <C.HeaderTopSide>
                <C.ContainerButtons>
                    <Link className='link' to="/login">
                        <C.ContainerButton>
                            <Button>
                                <C.ButtonName>entrar</C.ButtonName>
                            </Button>
                        </C.ContainerButton>
                    </Link>
                    <Link className='link' to="/register">
                        <C.ContainerButton>
                            <Button>
                                <C.ButtonName>registrar</C.ButtonName>
                            </Button>
                        </C.ContainerButton>
                    </Link>
                </C.ContainerButtons>
            </C.HeaderTopSide>
            <C.HeaderBotSide>
                <C.ContainerLogo>
                    <C.LogoImage src={logoIMG} alt="logo"/>
                    <C.LogoName>BuyGO</C.LogoName>
                </C.ContainerLogo>
                <C.Subtitle>
                    A forma facilitada de adquirir seus produtos!
                </C.Subtitle>
            </C.HeaderBotSide>
        </C.Header>
    )
}

export default Header;