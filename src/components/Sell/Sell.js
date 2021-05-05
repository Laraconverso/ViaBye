import React, {useState} from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import {db} from '../Firebase/Firebase'
import './Sell.css'


const Sell =()=> {
    const [productoIngreso , setProductoIngreso] = useState({
        titulo: '',
        imagen: '',
        precio: 0,
        descripcion: ''
       })

    const handleChange = (e) =>{
        setProductoIngreso({
            ...productoIngreso, [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            await db.collection("sell").add(productoIngreso)
            console.log("upload success")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
           <h3 className='tituloPagina'>¿Queres vender la ropa que ya no usas?</h3>
           <p>Llena este formulario con los detalles y nosotros te ayudamos.</p>
            <div className='form'>
                
            <Form onSubmit={handleSubmit}>
                <h5 className='formInfo'>Datos personales</h5>
                <Form.Row>
                    <Col>
                        <Form.Control placeholder="Nombre" onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Apellido" onChange={handleChange}/>
                    </Col> 
                </Form.Row>
                <Form.Row className='tituloPagina'>
                    <Col>
                        <Form.Control placeholder="Email" onChange={handleChange}/>
                    </Col>
                </Form.Row>
                <br/>
                <h5 className='formInfo'>Sobre tu prenda</h5>
                <Form.Row >
                    <Col>
                        <Form.Control placeholder="Nombre que le pones a tu prenda" onChange={handleChange}/>
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <h6 className='formInfo'>Tipo de prenda</h6>
                            <Form.Control as="select">
                                <option>Tops</option>
                                <option>Abrigos</option>
                                <option>Bottoms</option>
                                <option>Calzado</option>
                                <option>Accesorios</option>
                                <option>Mochilas</option>
                                <option>Otro</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row >
                    <Col>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Seleccione foto del articulo" className='formInfo' />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Button variant="outline-success" type="submit" >Enviar</Button>
            </Form>
            </div>
        </div>
    );
}

export default Sell;