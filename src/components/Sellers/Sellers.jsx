import React, {Component} from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'
//Librerias
import DataTable from 'react-data-table-component';
import {Modal, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import axios from "axios";
import {ApiUrl, TokenFixed_of_UserRoot} from "../../services/apirest";

const columns = (openModal) => [
    {
        name: 'id',
        selector: row => row.id,
    },
    {
        name: 'Nombre de usuario',
        selector: row => row.username,
    },
    {
        name: 'Nombres y Apellidos',
        selector: row => row.full_name,
    },
    {
        name: 'Acciones',
        cell: (row) => {
            return <div className="row gap-2">
                <a className="link-warning">
                    <Link className="btn btn-primary btn-sm rounded-pill"
                          to={{pathname: "/editar_vendedor", contact_name: row.contact_name}}>Editar</Link>
                </a>
                <a className="link-warning">
                    <button type="button" onClick={() => {
                        openModal(row.username)
                    }}
                            className="btn btn-danger btn-sm rounded-pill">Eliminar
                    </button>
                </a>

            </div>
        }
    },
];


class Sellers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            show: false,
            username: "",
        };
        this.openModal = this.openModal.bind(this);
    }
    async componentDidMount() {
        const UrlProviders = "api/users/"
        const res = await axios.get(ApiUrl + UrlProviders, {
            headers: {
                Authorization: 'Token ' + TokenFixed_of_UserRoot
            }
        }).catch(function (error) {
            console.log(error.response)
            console.log(error.request)
            console.log(error.response)

        })
        await this.setState({data: res.data});
    };

     name(name) {
        const new_Data = this.state.data.filter(Seller =>Seller.username !== name);
        this.setState({data: new_Data})
    }

    openModal(name) {
        this.setState({show: true});
        this.setState({username: name});
    }

     async deleteProvider(name) {
        const UrlProvider = "api/users/" + name+"/"
        const res = await axios.delete(ApiUrl + UrlProvider, {
            headers: {
                Authorization: 'Token ' + TokenFixed_of_UserRoot
            }
        })
        console.log("Respuesta del DELETE:", res)
        this.updateDataProvider(name)
        this.handleClose()
    }


    render() {
         const {data, show, username} = this.state
        return (
            <div>
                <Header/>
                <div className='row'>
                    <Layout/>
                    <div className="col-sm-11 bg-light">
                        <div className="bg-white">
                            <div className="d-flex m-3 pt-3 justify-content-between">
                                <div>
                                    <h5>Vendedores</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/crear_vendedor">
                                            <button type="button" className="btn"
                                                    style={{backgroundColor: '#663399', color: 'white'}}>+Nuevo Vendedor
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr
                                style={{background: 'F8F9FA'}}
                            />
                            <div class="d-flex justify-content-center">
                                <div style={{width: '60%'}}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Buscar vendedor"
                                        aria-label="Recipient's username with two button addons"
                                    />
                                </div>
                            </div>
                            <hr
                                style={{background: 'F8F9FA'}}
                            />
                            <div>
                                <table className="table mt-5">
                                    {(data !== null &&
                                        <DataTable
                                            columns={columns(this.openModal)}
                                            data={data}
                                        />
                                    )}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminar el vendedor {username} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¿Estas seguro que quieres eliminar el vendedor?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="danger" onClick={() => {
                            this.deleteProvider(username)
                        }}>
                            Continuar
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}

export default Sellers;