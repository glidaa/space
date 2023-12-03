"use client"
import styles from './conponet.module.css';
import React, { createContext, useState, useMemo } from 'react';

const SalesFormContext = createContext();

export function SalesForm() {
  const [formData, setFormData] = useState({
    clientName: '',
    shippingAddress: '',
    billingAddress: '',
    email: '',
    phoneNumber: '',
    product: 'product1',
    quantity: 1,
    paymentMethod: 'creditCard',
  });

  const handleFormSubmit = () => {
    console.log('Datos del formulario:', formData);
    alert(`Venta realizada con los datos del cliente:\n${JSON.stringify(formData)}`);
  };

  return (
    <div className={styles['sales-form-container']}>
      <h2>Formulario de Ventas</h2>
      <input type="text" name="clientName" placeholder="Nombre del Cliente" onChange={(e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }} />
      <input type="text" name="shippingAddress" placeholder="Dirección de Envío" onChange={(e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }} />
      <input type="text" name="billingAddress" placeholder="Dirección de Facturación" onChange={(e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }} />
      <input type="email" name="email" placeholder="Correo Electrónico" onChange={(e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }} />
      <input type="tel" name="phoneNumber" placeholder="Número de Teléfono" onChange={(e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }} />

  
      <select name="product" onChange={(e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }}>
        <option value="product1">Producto 1</option>
        <option value="product2">Producto 2</option>
 
      </select>

   
      <input type="number" name="quantity" placeholder="Cantidad" onChange={(e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }} />


      <input type="radio" name="paymentMethod" value="creditCard" onChange={(e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }} /> Tarjeta de Crédito
      <input type="radio" name="paymentMethod" value="paypal" onChange={(e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }} /> PayPal
 
      <button type="button" onClick={handleFormSubmit}>
        Realizar Compra
      </button>
    </div>
  );
}

export interface ConponetProps {}

export function Conponet(props: ConponetProps) {
  const [isSalesFormVisible, setIsSalesFormVisible] = useState(false);

  const handleOpenSalesForm = () => {
    setIsSalesFormVisible(true);
  };

  const handleCloseSalesForm = () => {
    setIsSalesFormVisible(false);
  };

  const salesFormContextValue = useMemo(() => ({}), []);

  return (
    <div className={styles['container']}>
      <h1>Welcome to Conponet!</h1>
      <button onClick={handleOpenSalesForm}>Abrir Formulario de Ventas</button>

      <SalesFormContext.Provider value={salesFormContextValue}>
        {isSalesFormVisible && <SalesForm />}

        {isSalesFormVisible && <button onClick={handleCloseSalesForm}>Cerrar Formulario</button>}
      </SalesFormContext.Provider>
    </div>
  );
}

export default Conponet;