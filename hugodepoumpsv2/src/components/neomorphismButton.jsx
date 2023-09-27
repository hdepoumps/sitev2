import styled from "styled-components";
import { Link } from 'react-router-dom'
const Title = styled.p`
  width: auto;
`
const heightCard= 80;
const widthCard = 190;

const Neomorphism = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${heightCard}px;
  width: ${widthCard}px;
  border-radius: 15px;
  background: #ecf0f3;
  box-shadow:  ${heightCard/10}px ${heightCard/10}px ${heightCard/10*2}px #c9cccf,
    -${heightCard/10}px -${heightCard/10}px ${heightCard/10*2}px #ffffff;
  transition: 0.3s;
  color: black;
  &.neo1{
    font-size: 90px;
  }
  
`
function handleClick() {
    console.log('✨ Ceci est un clic ✨')
}

function neoButton(props) {

    return(
        <Link to={`/?id=${props.link}`}>
            <Neomorphism  className={`neo${props.id}`} onClick={handleClick}>
                <Title>{props.title}</Title>
            </Neomorphism>
        </Link>

    )
}

export default neoButton;
export {heightCard,widthCard}