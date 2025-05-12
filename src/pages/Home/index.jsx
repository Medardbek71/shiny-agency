import HomeIllustion from '../../assets/home-illustration.svg'
import styled from 'styled-components'
import colors from '../../utils/style/color'

const FirstSection = styled.div`
    display: flex;
    /* background-color: ${colors.backgroundLight}; */
    padding-top: 50px;
    padding-bottom: 50px;
`
const TextAndButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 40%;
    gap: 0px;
    opacity: 0px;
    font-family: Trebuchet MS;
    font-size: 40px;
    font-weight: 700;
    line-height: 60.25px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin-left: 100px;
    margin-top: 50px;
`
const Button = styled.a`
    color: white;
    background-color: ${colors.primary};
    width: 50%;
    border-radius: 50px;
    text-decoration: none;
    font-size: large;
    display: flex;
    align-items: center;
    justify-content: center;
`

export function sum(a, b) {
    return a + b
}

function App() {
    return (
        <FirstSection>
            {sum(2, 3)}
            <TextAndButton>
                <h3>
                    Repérez vos besoins, on soccupe du reste, avec les meilleurs
                    talents
                </h3>
                <Button href="./survey/1">Faire les test</Button>
            </TextAndButton>
            <div>
                <img src={HomeIllustion} />
            </div>
        </FirstSection>
    )
}

export default App
