import React,{Component}  from "react";
import Layout from '../Layout/Layout'
import Header from '../Layout/Header'

class CreateProvider extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='row'>
                    <Layout />
                    <div className="col-sm-11 bg-light">
                        <div className="bg-white">
                        <div className="d-flex m-3 pt-3 justify-content-between">
                                <div>
                                    <h5>Crear Vendedor</h5>
                                </div>
                                <div className="d-flex gap-2">
                                    <div>
                                        <a href="/vendedores">
                                            <button type="button" className="btn" style={{backgroundColor:'#663399', color:'white'}}>Regresar</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr
                                style={{background:'F8F9FA'}}
                            />
                            <div className="d-flex justify-content-center text-center p-5 m-5">
                                <form>
                                    <div className="form-group row gap-5">
                                        <div>
                                            <label
                                            style={{width:'180px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Nombres y Apellidos: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="company"
                                            type="text"
                                            placeholder="Ingrese nombres y apellidos"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <label
                                            style={{width:'180px',
                                                clear:'left',
                                                textAlign:'left',
                                                paddingRight:'10px'}}> Usuario: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="contact"
                                            type="text"
                                            placeholder="Usuario"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <label
                                            style={{width:'180px',
                                            clear:'left',
                                            textAlign:'left',
                                            paddingRight:'10px'}}> Contraseña: </label>
                                            <input
                                            style={{width:'250px'}}
                                            name="ruc"
                                            type="password"
                                            placeholder="Contraseña"
                                            required
                                            />
                                        </div>
                                        <div>
                                            <a href="#modificar">
                                                <button type="button" className="btn btn-primary">Agregar Vendedor</button>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateProvider;