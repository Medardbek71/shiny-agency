import { useParams , Link} from 'react-router'
import { useContext } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import Loader from '../../utils/Loader.jsx'
import { SurveyContext } from '../../context/SurveyContext.jsx'
import { useFetch } from '../../utils/costumHooks/useFetch.jsx'

function Survey(){

    const SurveyContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    const QuestionTitle = styled.h2`
        text-decoration: underline;
        text-decoration-color: ${colors.primary};
    `
    const QuestionContent = styled.p`
        margin: 30px;
    `
    const LinkWrapper = styled.div`
        & a {
        color: black;
        }
        & a:first-of-type {
            margin-right: 20px;
        }
    `
    const ReplyBox = styled.button`
        border: none;
        height: 100px;
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${colors.backgroundLight};
        border-radius: 30px;
        cursor: pointer;
        box-shadow: ${(props) =>
        // eslint-disable-next-line react/prop-types
        props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
        &:first-child {
            margin-right: 15px;
        }
        &:last-of-type {
            margin-left: 15px;
        }
  `
    const ReplyWrapper = styled.div`
        display: flex;
        flex-direction: row;
        `

var { questionNumber } = useParams()
var nextQuestion,previousQuestion
questionNumber = parseInt(questionNumber)
const {answers , saveAnswers} = useContext(SurveyContext)

    switch (questionNumber) {
        case 1:
            previousQuestion = `/survey/${questionNumber}`
            nextQuestion = `/survey/${questionNumber+1}`
            break;
        case 6:
            previousQuestion = `/survey/${questionNumber-1}`
            nextQuestion = '/result'
            break;
        default:
            previousQuestion = `/survey/${questionNumber-1}`
            nextQuestion = `/survey/${questionNumber+1}`
            break;
    }
    
    function saveReply(answer){
        saveAnswers({[questionNumber]:answer})
    }
        const {data , isLoading} = useFetch('http://localhost:8000/survey')
            
        if(isLoading){
            console.log('chargement...')
        }else{
            ''
        }
            
    return (
        <SurveyContainer>
            <QuestionTitle>Question:{questionNumber}</QuestionTitle>
            {
                isLoading ? <Loader/> : 
                <>
                    <QuestionContent>{data.surveyData[questionNumber]}</QuestionContent>
                        <ReplyWrapper>
                            <ReplyBox onClick={() => saveReply(true)} isSelected={answers[questionNumber] === true}> Oui </ReplyBox>
                            <ReplyBox onClick={() => saveReply(false)} isSelected={answers[questionNumber] === false} > Non </ReplyBox>
                        </ReplyWrapper>

                        <LinkWrapper>
                            <Link to= {`${previousQuestion}`} >Precedent</Link>
                            <Link to= {`${nextQuestion}`} >Suivant</Link>
                        </LinkWrapper>
                </>
            }
        </SurveyContainer>
    )
}
export default Survey