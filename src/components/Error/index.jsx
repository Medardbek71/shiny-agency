import errorImage from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/style/color'

const ErrorPage = styled.div`
    display: flex;
    justify-content: center;
    align-content: center ;
    width: 70;
    background-color: ${colors.backgroundLight};
    padding: 50px;
`


function Error(){
    return (
        <ErrorPage>
            <img src={errorImage}/>
        </ErrorPage>
    )
}

export default Error