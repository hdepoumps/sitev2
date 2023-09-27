import '../style/home.css'
import data from '../data/neomorphismButton.json'
import NeomorphismButton,{heightCard,widthCard} from "../components/neomorphismButton";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';

const MainPage =styled.main`
  background-color: #ecf0f3;
  max-width: 100vw;
  height: calc(100vh - 40px) ;
  padding: 20px;
  .neo1{
    position: absolute;
    width: 50vw;
    height: 28vh;
    top: calc(50vh - 14vh);
    left: calc(50vw - 25vw);
  }
  .neo2{
    position: absolute;
    top: calc(100vh - ${heightCard}px - 40px);
    left: calc(50vw - 25vw);
  }
  .neo3{
    position: absolute;
    top: calc(100vh - ${heightCard}px - 40px);
    left: calc(50vw + 25vw - ${widthCard}px);
  }
  .neo4{
    position: absolute;
    top: 40px;
    left: 40px;
  }
  .neo5{
    position: absolute;
    top: 40px;
    left: calc(100vw - ${widthCard}px - 40px);
  }
`
function Home(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    // Now, 'id' contains the value of the "id" parameter from the URL
    console.log('ID from URL:', id);

    const neoButtons = data.map((item,index) => {
        return(
            <NeomorphismButton
                key={index}
                id={item.id}
                link={item.link}
                title={item.title}
            />
        )
    })

    return(
            <MainPage>
                <section>{neoButtons}</section>
            </MainPage>
        )

}
export default Home