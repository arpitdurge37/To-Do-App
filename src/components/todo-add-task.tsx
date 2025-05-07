import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";


export function ToDoAddTask(){

    const [cookies, setCookie, removeCookie] = useCookies(['userid']);
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            Appointment_Id:0, 
            Title:'',
            Description:'',
            Date:'',
            UserId: cookies['userid']
        }, 
        onSubmit: (values) => {
             axios.post(`http://127.0.0.1:2020/add-task`, values)
             .then(()=>{
                alert('Task Added');
                navigate(`/dash/${values.UserId}`);
             })
        }
    })

    return(
        <div className="bg-light p-3">
            <h2> {cookies['userid']} - Add New Appointment</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Appointment Id</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="Appointment_Id" /></dd>
                    <dt>Title</dt>
                    <dd><input type="text" name="Title" onChange={formik.handleChange} /></dd>
                    <dt>Description</dt>
                    <dd> <textarea rows={4} cols={40} onChange={formik.handleChange} name="Description"></textarea></dd>
                    <dt>Date</dt>
                    <dd><input type="datetime-local" name="Date" onChange={formik.handleChange} /></dd>
                </dl>
                <button className="btn btn-primary" type="submit">Add Appointment</button>
            </form>
        </div>
    )
}