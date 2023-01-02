import './TrickContainer.css'
import Card from '../Card/Card'

const TrickContainer = ({ tricks }) => {

  const displayTricks = tricks.map(trick => {
   return (
    <Card 
      stance={ trick.stance }
      name={ trick.name }
      obstacle={ trick.obstacle } 
      tutorial={ trick.tutorial }
      id={ trick.id }
      key={ trick.id }
    />  
   )
  })

  return ( 
    <div className="trick-container">
      { displayTricks }
  </div>
   );
}
 
export default TrickContainer;
