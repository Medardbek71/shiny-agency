import styled from "styled-components"
import colors from '../../utils/style/color'
import { useTheme } from "../../utils/costumHooks/useTheme"

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`
const NightButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.primary};
`

function Footer(){
    
    const {theme , toggleTheme} = useTheme()
    return (
        <FooterContainer>
            <NightButton onClick={toggleTheme}> Changer de mode { theme == 'light' ? '🌞' : '🌙'} </NightButton>
        </FooterContainer>
    )
}

export default Footer