import { ContainerCard } from "./styledCard"

function CardGame(props){

    console.log('props', props)

    return(
        <ContainerCard>
            <h3>{props.game.name}</h3>
            <p><span>R$</span> {props.game.price}</p>
            <p><span>Plataforma: </span>{props.game.platform}</p>
        </ContainerCard>
    )
}

export default CardGame