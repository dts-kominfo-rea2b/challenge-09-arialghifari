// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  return (
    <div className="wrapper">
      <section className="contact">
        <div className="photo">
          <img src={data.photo} alt={data.name} />
        </div>
        <div className="detail-contact">
          <p className="name">{data.name}</p>
          <p className="phone">{data.phone}</p>
          <p className="email">{data.email}</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
