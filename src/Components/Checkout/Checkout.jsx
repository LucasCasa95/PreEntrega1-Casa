import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Checkout = () => {
    let navigate = useNavigate()
    const datosForm = useRef()
    const consultarForm = (e) =>{
        e.preventDefault()
        const data = new FormData(datosForm.current)
        const cliente = Object.fromEntries(data)
        e.target.reset()
        toast.success('Muchas gracias por realizar su compra')
        navigate('/')
    }

    return (
        <div className='container contForm'>
            <form onSubmit={consultarForm} ref={datosForm}>
                <div className="mb-3">
                    <label htmlFor="nombre" className='form-label'>Nombre y Apellido</label>
                    <input type="text" className='form-control' name='nombre' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" className='form-control' name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className='form-label'>Documento</label>
                    <input type="number" className='form-control' name='dni' />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className='form-label'>Número telefonico</label>
                    <input type="number" className='form-control' name='celular' />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className='form-label'>Dirección</label>
                    <input type="text" className='form-control' name='direccion' />
                </div>
                <button type='submit' className='btn btn-primary'>Finalizar Compra</button>
            </form>
        </div>
    );
}

