import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import colors from '../../utils/style/color'
import logo from '../../assets/dark-logo.png'

const StyledLink = Styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    width: 80px;
    height: 22px;
    top: 49px;
    left: 990px;
    gap: 0px;
    opacity: 0px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary}`}
`
const TopBar = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 20px;
`
const LogoDiv = Styled.div`
    width: 187.63px;
    height: 70px;
    top: 3000px;
    left: 33px;
    gap: 0px;
    opacity: 0px;
    transform:scale(0.5)
`

function Header() {
    return (
        <TopBar>
            <LogoDiv>
                <a href="/">
                    <img src={logo} alt="logo shiny-agency" />
                </a>
            </LogoDiv>
            <nav>
                <StyledLink to="/">Acceuil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire un test
                </StyledLink>
            </nav>
        </TopBar>
    )
}
export default Header
