import React, { useState } from "react";
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted.', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea 
                        type="message"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
}

export default Contact; 