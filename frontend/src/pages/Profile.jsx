import { Link } from "react-router-dom";
import {Card, Button, Container} from 'react-bootstrap'

const Profile = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center my-5 py-5">
    <Card className='cart my-5'>
        <Card.Header>
            <Card.Title className='text-center p-2'>🔓 Tu Perfil</Card.Title>
        </Card.Header>
        <Card.Body className='text-center'>
            <Card.Text>
              {/* <h3>usuario.correo@email.com</h3> */}
              <p>Correo: usuario.correo@email.com</p>
              <p>Historial de Pedidos</p>
              <p>Información de Pago</p>
            </Card.Text>
        </Card.Body>
        <Card.Footer className='p-3'>
            {/* <Card.Title className='text-center'>Cerrar Sesion</Card.Title> */}
            <div className="card-btn d-flex gap-2 justify-content-around">
              <Link to='/'>
                <Button variant="dark">Cerrar Sesión</Button>
              </Link>
            </div>
        </Card.Footer>
    </Card>
</Container>
  );
};
export default Profile;
