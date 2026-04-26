import { Link } from 'react-router-dom';

const CardPizza = ({ pizza }) => {
  return (
    <div className='card'>
      <img src={pizza.img} alt={pizza.name} className='card-img-top' />
      <div className='card-body'>
        <h5>{pizza.name}</h5>
        <p>${pizza.price}</p>
        <Link to='/pizza/p001' className='btn btn-dark'>Ver más</Link>
      </div>
    </div>
  );
};

export default CardPizza;