import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

export function ToDoRegister() {
    const formik = useFormik({
        initialValues: {
            UserId: "",
            Password: ""
        },
       onSubmit: async (values) => {
    try {
        const response = await axios.post("http://127.0.0.1:2020/register-user", values);
        
        console.log("Full response:", response);
        console.log("Response data:", response.data);
        console.log("Response status:", response.status);
        console.log("Content type:", response.headers['content-type']);

        // Ensure response.data is defined
        if (response.data && response.data.message) {
            alert(response.data.message);
        } else {
            alert("User Registered!");
        }
    } catch (error) {
        console.error("Registration failed:", error);
        alert("Registration failed.");
    }
}

    });

    return (
        <div className="bg-light p-4 w-25">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" name="UserId" onChange={formik.handleChange} value={formik.values.UserId} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange} value={formik.values.Password} /></dd>
                </dl>
                <button type="submit" className="btn btn-warning">Register</button>
            </form>
            <p>
                <Link to="/login">Existing User Login</Link>
            </p>
        </div>
    );
}
