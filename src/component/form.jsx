"use client"
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Form = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        languages: [{ name: '', icon: '' }],
        details: [''],
        technologies: [{ name: '', description: '', icon: '' }],
        location: '',
    });

    const [responseMessage, setResponseMessage] = useState(null); // Success or error feedback

    const handleChange = (e, index, key, arrayKey) => {
        if (arrayKey) {
            const updatedArray = [...formData[arrayKey]];
            if (key) {
                updatedArray[index][key] = e.target.value;
            } else {
                updatedArray[index] = e.target.value;
            }
            setFormData({ ...formData, [arrayKey]: updatedArray });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const addField = (arrayKey, defaultValue) => {
        setFormData({
            ...formData,
            [arrayKey]: [...formData[arrayKey], defaultValue],
        });
    };

    const removeField = (arrayKey, index) => {
        const updatedArray = formData[arrayKey].filter((_, i) => i !== index);
        setFormData({ ...formData, [arrayKey]: updatedArray });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(process.env.NEXT_PUBLIC_API_BASE_URL)

            const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + '/project/';
            const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

            if (response.ok) {
                const result = await response.json();
                setResponseMessage({ type: 'success', text: 'Form submitted successfully!' });
                console.log('Success:', result);
            } else {
                const error = await response.text();
                setResponseMessage({ type: 'error', text: `Error: ${error}` });
                console.error('Error:', error);
            }
        } catch (err) {
            setResponseMessage({ type: 'error', text: 'Something went wrong. Please try again later.' });
            console.error('Request Failed:', err);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-0 rounded-4 p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <h2 className="text-center mb-4" style={{ color: '#343a40', fontWeight: 'bold' }}>
                    New Project Form
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Title */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label fw-bold">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="form-control"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label fw-bold">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="3"
                            className="form-control"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Languages */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Languages</label>
                        {formData.languages.map((language, index) => (
                            <div key={index} className="d-flex mb-2 align-items-center">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="form-control me-2"
                                    value={language.name}
                                    onChange={(e) => handleChange(e, index, 'name', 'languages')}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Icon"
                                    className="form-control me-2"
                                    value={language.icon}
                                    onChange={(e) => handleChange(e, index, 'icon', 'languages')}
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => removeField('languages', index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="btn btn-outline-primary mt-2"
                            onClick={() => addField('languages', { name: '', icon: '' })}
                        >
                            Add Language
                        </button>
                    </div>

                    {/* Details */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Details</label>
                        {formData.details.map((detail, index) => (
                            <div key={index} className="d-flex mb-2 align-items-center">
                                <input
                                    type="text"
                                    className="form-control me-2"
                                    value={detail}
                                    onChange={(e) => handleChange(e, index, null, 'details')}
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => removeField('details', index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="btn btn-outline-primary mt-2"
                            onClick={() => addField('details', '')}
                        >
                            Add Detail
                        </button>
                    </div>

                    {/* Technologies */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Technologies</label>
                        {formData.technologies.map((tech, index) => (
                            <div key={index} className="d-flex mb-2 align-items-center">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="form-control me-2"
                                    value={tech.name}
                                    onChange={(e) => handleChange(e, index, 'name', 'technologies')}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Description"
                                    className="form-control me-2"
                                    value={tech.description}
                                    onChange={(e) => handleChange(e, index, 'description', 'technologies')}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Icon"
                                    className="form-control me-2"
                                    value={tech.icon}
                                    onChange={(e) => handleChange(e, index, 'icon', 'technologies')}
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => removeField('technologies', index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="btn btn-outline-primary mt-2"
                            onClick={() => addField('technologies', { name: '', description: '', icon: '' })}
                        >
                            Add Technology
                        </button>
                    </div>

                    {/* Location */}
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label fw-bold">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            className="form-control"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-success px-4 py-2">
                            Submit
                        </button>
                    </div>
                </form>

                {/* Response Message */}
                {responseMessage && (
                    <div className={`mt-3 alert ${responseMessage.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                        {responseMessage.text}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Form;