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

  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    dni: '',
    celular: '',
    email: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    let processedValue = value;

    if (name === 'dni') {
      const numericValue = value.replace(/\D/g, '');
      processedValue = numericValue.slice(0, 8);
    }
    if (name === 'celular') {
      const numericValue = value.replace(/\D/g, '');
      processedValue = numericValue.slice(0, 9);
    }

    setFormData((prevData) => ({ ...prevData, [name]: processedValue }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };


  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (formData.name.trim() === '') {
      newErrors.name = 'El nombre es obligatorio';
      valid = false;
    }

    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'El apellido es obligatorio';
      valid = false;
    }

    if (formData.dni.trim() === '') {
      newErrors.dni = 'El DNI es obligatorio';
      valid = false;
    }

    if (formData.celular.trim() === '') {
      newErrors.celular = 'El número de celular es obligatorio';
      valid = false;
    }

    if (!/^\d{8}$/.test(formData.dni.trim())) {
      newErrors.dni = 'El DNI debe contener 8 dígitos';
      valid = false;
    }

    if (!/^\d{9}$/.test(formData.celular.trim())) {
      newErrors.celular = 'El número de celular debe contener 9 dígitos';
      valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'El correo electrónico no es válido';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Formulario enviado:', formData);
      setFormSubmitted(true);
    } else {
      console.log('Formulario inválido. Por favor, corrige los errores.');
    }
  };

  return (
    <div className="Contact">
      <h2>Contacto</h2>
      {formSubmitted ? (
        <div>
          <p>¡Gracias por enviar el formulario!</p>
          {/* Puedes agregar más contenido o redirigir al usuario a otra página aquí */}
        </div>
      ) : (
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange}/>
          <span className="error">{errors.name}</span>
        </label>
        <br/>
        <label>
          Apellido:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
          <span className="error">{errors.lastName}</span>
        </label>
        <br/>
        <label>
          DNI:
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            maxLength="8"
          />
          <span className="error">{errors.dni}</span>
        </label>
        <br/>
        <label>
          Celular:
          <input type="text"
                 name="celular"
                 value={formData.celular}
                 onChange={handleChange}
                 maxLength="9"/>
          <span className="error">{errors.celular}</span>
        </label>
        <br/>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange}/>
          <span className="error">{errors.email}</span>
        </label>
        <br/>
        <label>
          Comentario:
          <textarea name="comment" value={formData.comment} onChange={handleChange}/>
          <span className="error">{errors.comment}</span>
        </label>
        <br/>
        <button type="submit">Enviar</button>
      </form> )}
    </div>
  );
};

export default Contact;
