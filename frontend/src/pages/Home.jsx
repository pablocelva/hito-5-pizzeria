import { useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import Cart from './Cart'
//import { pizzaCart, pizzas } from '../data/pizzas'
import { pizzaCart } from '../data/pizzas'

export default function Home() {
    const [cart, setCart] = useState(pizzaCart || [])
    const [pizzas, setPizzas] = useState([])
    const [error, setError] = useState(null)
    
    const getPizzas = async () => {
        try {
            const url = "http://localhost:5000/api/pizzas"
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`)
            }

            const data = await response.json()
            setPizzas(data)

        } catch (err) {
            setError(err.message)
        }
    }

    useEffect(() => {
        getPizzas()
    }, [])

    const agregarAlCarrito = (pizza) => {
        const existingPizza = cart.find(item => item.name === pizza.name)
        if (existingPizza) {
            setCart(cart.map(item =>
                item.name === pizza.name
                    ? { ...item, count: item.count + 1 }
                    : item
            ))
        } else {
            setCart([...cart, { ...pizza, count: 1 }])
        }
    }

    const sumarCantidad = (index) => {
        const newCart = [...cart]
        newCart[index].count += 1
        setCart(newCart)
    }

    const restarCantidad = (index) => {
        const newCart = [...cart]
        if (newCart[index].count > 1) {
            newCart[index].count -= 1
        } else {
            newCart.splice(index, 1)
        }
        setCart(newCart)
    }
    
    return (
        <>
            <Header/>
            <Container fluid className="productos my-5 border-warning">
                {error && <p>Error: {error}</p>}
                <Row className="cards d-flex margin-cards">
                    {pizzas.map((pizza, index) => (
                        <Col key={index} xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                            <CardPizza
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                                onAddToCart={() => agregarAlCarrito(pizza)}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Cart 
                cart={cart}
                onSuma={sumarCantidad}
                onResta={restarCantidad}
            />
        </>
    )
}
