import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name}
        placeholder="Name"
        onChange={({target}) => {setName(target.value)}}
        required
      />
      <input 
        type="tel"
        value={phone}
        placeholder="Telephone"
        // pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)"
        onChange={({target}) => {setPhone(target.value)}}
        required
      />
      <input 
        type="email"
        value={email}
        placeholder="Email"
        onChange={({target}) => {setEmail(target.value)}}
        required
      />
      <input
        type="submit"
      />
    </form>
  );
};

