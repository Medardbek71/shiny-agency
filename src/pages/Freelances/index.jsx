import Card from "../../components/Card"
import styled from "styled-components"
import Loader from '../../utils/Loader.jsx'
import { useFetch } from "../../utils/costumHooks/useFetch.jsx"

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px , 350px;
    grid-template-columns: repeat(2,1fr);
`
const BaseLine = styled.p`
    width: 100%;
    color: #8186a0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const H1 = styled.h1`
    width: 75%;
    color:black;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 50px;
`
const PageProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    line-height: 75px;
`

function Freelances(){
    const { data , isLoading } = useFetch('http://localhost:8000/freelances')
    isLoading && console.log('chargement...') ; !data && console.log('pas de chargement ')
    const {freelancersList} = data

    return (
        <>
            <PageProfile>
                <H1>Trouver votre prestataire</H1>
                <BaseLine>Chez Shiny nous réunissons les meilleurs profils pour vous.</BaseLine>
                { isLoading ? <Loader/> :
                    <CardsContainer>
                    {
                        freelancersList.map((profile)=>(
                            <Card 
                            key={profile.id}
                            label={profile.job}
                            picture={profile.picture}
                            title={profile.name}
                            />)
                            
                        )
                    }
                    </CardsContainer>   
                }
            </PageProfile>
        </>
    )
}

export default Freelances