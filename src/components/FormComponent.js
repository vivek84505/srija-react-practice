
import { useEffect, useState } from "react";

function FormComponent() {

 
    const [errors, setErrors] = useState({});
    
    const [formData, setFormData] = useState({
        firstname: "vivek",
        lastname: "",
        email: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        console.log("Form data updated:", formData);
    }, [formData]);

    const resetForm = () => {
        setFormData({
            firstname: "",
            lastname: "",
            email: ""
        });

        setErrors({});
        setIsSubmitted(false);
    };
 

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        // Clear individual field error while typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ""
        }));
    };

    const validateForm = () => {

        let newErrors = {};

        if (!formData.firstname.trim()) {
            newErrors.firstname = "Firstname is required";
        }

        if (!formData.lastname.trim()) {
            newErrors.lastname = "Lastname is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Please enter a valid email address";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (validateForm()) {

            console.log("Form submitted successfully:", formData);
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    };

    return (
        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8 col-md-10">

                    {/* Form Card */}
                    <div className="card shadow border-0">

                        <div className="card-header bg-primary text-white py-3">
                            <h4 className="mb-0">
                                User Registration Form
                            </h4>
                            <small>
                                Please enter your personal details
                            </small>
                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>

                                {/* Firstname & Lastname */}
                                <div className="row mb-3">

                                    <div className="col-md-6 mb-3 mb-md-0">

                                        <label className="form-label">
                                            Firstname <span className="text-danger">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name="firstname"
                                            value={formData.firstname}
                                            onChange={handleChange}
                                            className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
                                            placeholder="Enter firstname"
                                        />

                                        <div className="invalid-feedback">
                                            {errors.firstname}
                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Lastname <span className="text-danger">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name="lastname"
                                            value={formData.lastname}
                                            onChange={handleChange}
                                            className={`form-control ${errors.lastname ? "is-invalid" : ""}`}
                                            placeholder="Enter lastname"
                                        />

                                        <div className="invalid-feedback">
                                            {errors.lastname}
                                        </div>

                                    </div>

                                </div>

                                {/* Email */}
                                <div className="mb-4">

                                    <label className="form-label">
                                        Email Address <span className="text-danger">*</span>
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        placeholder="Enter email address"
                                    />

                                    <div className="invalid-feedback">
                                        {errors.email}
                                    </div>

                                </div>

                                {/* Buttons */}
                                <div className="d-flex gap-2">

                                    <button
                                        type="submit"
                                        className="btn btn-primary px-4"
                                    >
                                        Submit
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary px-4"
                                        onClick={resetForm}
                                    >
                                        Reset
                                    </button>

                                </div>

                            </form>

                            {/* Success Message */}
                            {isSubmitted && (
                                <div className="alert alert-success mt-4 mb-0">
                                    Form submitted successfully!
                                </div>
                            )}

                        </div>

                    </div>

                    {/* Submitted Data Card */}
                    <div className="card shadow-sm border-0 mt-4">

                        <div className="card-header bg-light">
                            <h5 className="mb-0">
                                Form Data Preview
                            </h5>
                        </div>

                        <div className="card-body">

                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <small className="text-muted">
                                        FIRSTNAME
                                    </small>
                                    <h6>{formData.firstname || "-"}</h6>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <small className="text-muted">
                                        LASTNAME
                                    </small>
                                    <h6>{formData.lastname || "-"}</h6>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <small className="text-muted">
                                        EMAIL
                                    </small>
                                    <h6>{formData.email || "-"}</h6>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

     

        </div>
    );
}

export default FormComponent;


