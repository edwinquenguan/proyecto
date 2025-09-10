
/*import React from "react";*/
import { Form, Button, Container, Alert, Spinner, Row, Col, Table } from 'react-bootstrap';
const ClienteListar=() =>{
    return (
        <Container>
            <Row className="mb-4">
                <Col>
                  <h2>Lista de clientes</h2>
                </Col>
                <Col className="text=end">
                    <Button variant="btn btn-primary">agregar</Button>
                </Col>
            </Row>
            <Form className="mb-3">
                <Row>
                    <Col md={8}>
                        <Form.Control
                            type="text"
                            placeholder="buscar por documento de identidad"
                        />
                    </Col>
                    <Col md={4}>
                        <Button type="submit" variant = "outline-segundary">Buscar</Button>
                        <Button type="button" variant = "outline-segundary">Mostrar todos</Button>
                    </Col>
                </Row>              
            </Form>
            <Table class= "table table-stripad table-hover">
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Documento</td>
                        <td>Apellido</td>
                        <td>email</td>
                        <td>Direccion</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Edwin</td>
                        <td>164626545945</td>
                        <td>Quenguan</td>
                        <td>edwinquenguan14@gmail.com</td>
                        

                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
export default ClienteListar;
        
        
        
        
            
        