import { useState } from 'react';
import './Game.css'
import { FcAlarmClock, FcBinoculars, FcFilmReel, FcGlobe, FcLock, FcNightLandscape, FcVideoCall, FcVideoProjector, FcBiohazard} from "react-icons/fc";


function Game() {

  const vetor = [<FcAlarmClock />, <FcBinoculars />, <FcFilmReel />, <FcGlobe />, <FcLock />, <FcNightLandscape />, <FcVideoCall />, <FcVideoProjector />, <FcBiohazard />]

  
  const [icon, setIcon] = useState([<FcBiohazard />]);
  
  function TrocarIcone(){
    const newIcons = vetor.map((() => {
      const randomIcon = Math.floor(Math.random() * vetor.length)
      return vetor[randomIcon]
    }));
    setIcon(newIcons);

  }

  // i= Math.floor(Math.random()*vetor.length)

  return (
    <div className='container-main-content'>
       <div className='container-cubes'>
          <div className='cube-style-content icon-size'>{icon[0]}</div>
       </div>

       <div className='container-btn'>
          <button className='button' onClick={TrocarIcone}>clique</button>
       </div>
    </div>
  )
}

export default Game