import React from 'react'   
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardPizza = ({name, price, ingredients, img, onAddToCart }) => {
    return (
        <Card className='my-3'>
            <Card.Img variant="top" src={img} />
            <Card.Header>
                <Card.Title>🍕 Pizza {name}</Card.Title>
            </Card.Header>
            <Card.Body className='text-center p-3'>
                <Card.Subtitle>Ingredientes:</Card.Subtitle>
                <Card.Text>
                    {/* Método anterior con join() */}
                    {/* {ingredients.join(', ')} */}

                    {/* Método nuevo como lista, en lo personal me gusta mas como se ve con join() pro aproveché el uso de la lista para ponerle emojis a los ingredientes jaja */}
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='p-3'>
                <Card.Title className='text-center'>Precio: ${price}</Card.Title>
                <div className="card-btn d-flex gap-2 justify-content-around">
                    <Link to="/pizza/p001">
                        <Button variant="outline-dark">Ver más</Button>
                    </Link>
                    <Button variant="dark" onClick={onAddToCart}>Añadir 🛒</Button>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default CardPizza