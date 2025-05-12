import PropTypes from "prop-types"
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from "../../utils/style/color"


function Card({ label , picture , title }) {

    const CardLabel = styled.span`
        color:#5843e4;
        font-size: 22px;
        font-weight: bold;
    `
    const CardImage = styled.img`
        height: 80px;
        width: 80px;
        border-radius: 50%;
    `
    const CardWrapper = styled.div`
        display: flex;
        padding: 15px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: ${colors.backgroundLight};
        border-radius: 30px;
        width: 350px;
        transition: 200ms;
        &:hover{
            cursor: pointer;
            box-shadow: 2px 2px 10px #e2e3e9;
        }

    `

    return (
    <CardWrapper>
        <CardLabel>{ label }</CardLabel>
        <CardImage src = { picture } alt = 'freelance' />
        <CardLabel>{ title }</CardLabel>
    </CardWrapper>       
    )
}

Card.defaultProps = {
    title: '',
    label:'',
    picture: DefaultPicture

}
Card.propTypes = {
    label:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    picture:PropTypes.string.isRequired
}

export default Card