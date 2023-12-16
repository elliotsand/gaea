// Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    dni: '',
    celular: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar datos, puedes imprimir en la consola para verificar
    console.log('Formulario enviado:', formData);
    // Puedes agregar aquí la lógica para enviar la información al servidor o realizar otras acciones
  };

  return (
    <div className="Contact">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          DNI:
          <input type="text" name="dni" value={formData.dni} onChange={handleChange} />
        </label>
        <br />
        <label>
          Celular:
          <input type="text" name="celular" value={formData.celular} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Comentario:
          <textarea name="comment" value={formData.comment} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
