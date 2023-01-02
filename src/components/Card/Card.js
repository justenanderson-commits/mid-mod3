import './Card.css'

const Card = ({ stance, obstacle, id, name, tutorial }) => {
  return ( 
    <div className="card" id= { id } key={ id }>
      <p>{ name }</p>
      <p>Obstacle: { obstacle }</p>
      <p>Link to tutorial: <a href={ tutorial }>{ tutorial }</a></p>
    </div>
   );
}
 
export default Card;