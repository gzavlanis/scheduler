import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthService from "../services/auth.service";

type Props = {};
type State = { username: string, password: string, firstName: string, lastName: string, successful: boolean, message: string };

export default class Register extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.state = { username: "", password: "", firstName: "", lastName: "", successful: false, message: ""};
    }

    validationSchema() {
        return Yup.object().shape({
            username: Yup.string().test("len", "The username must be between 4 and 20 characters.", (val: any) =>
                val && val.toString().length >= 4 && val.toString().length <= 20
            ).required("This field is required!"),
            password: Yup.string().test("len", "The password must be between 8 and 40 characters.", (val: any) =>
                val && val.toString().length >= 8 && val.toString().length <= 40
            ).required("This field is required"),
            firstName: Yup.string().test("len", "The first name must be between 3 and 15 characters.", (val: any) =>
                val && val.toString().length >= 8 && val.toString().length <= 40
            ),
            lastName: Yup.string().test("len", "The last name must be between 3 and 15 characters.", (val: any) =>
                val && val.toString().length >= 8 && val.toString().length <= 40
            ),
        });
    }

    handleRegister(formValue : { username: string; password: string; firstName: string; lastName: string }) {
        const { username, password, firstName, lastName } = formValue;
        this.setState({ message: "", successful: false });

        AuthService.register(username, password, firstName, lastName).then(response => {
            this.setState({ message: response.data.message, successful: true });
        }, error => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            this.setState({ successful: false, message: resMessage});
            }
        );
    }

    render() {
        const { successful, message } = this.state;
        const initialValues = { username: "", password: "", firstName: "", lastName: ""};

        return(
            <div className = "col-md-12">
                <div className = "card card-container">
                    <Formik initialValues = {initialValues} validationSchema = {this.validationSchema} onSubmit = {this.handleRegister}>
                        <Form>
                            {!successful && (
                                <div>
                                    <div className = "form-group">
                                        <label htmlFor = "username">Username</label>
                                        <Field name = "username" type = "text" className = "form-control"/>
                                        <ErrorMessage name = "username" component = "div" className = "alert alert-danger"/>
                                    </div>
                                    <div className = "form-group">
                                        <label htmlFor = "password">Password</label>
                                        <Field name = "password" type = "text" className = "form-control"/>
                                        <ErrorMessage name = "password" component = "div" className = "alert alert-danger"/>
                                    </div>
                                    <div className = "form-group">
                                        <label htmlFor = "firstName">First Name</label>
                                        <Field name = "firstName" type = "text" className = "form-control"/>
                                        <ErrorMessage name = "firstName" component = "div" className = "alert alert-danger"/>
                                    </div>
                                    <div className = "form-group">
                                        <label htmlFor = "lastName">Last Name</label>
                                        <Field name = "lastName" type = "text" className = "form-control"/>
                                        <ErrorMessage name = "lastName" component = "div" className = "alert alert-danger"/>
                                    </div>
                                    <div className = "form-group">
                                        <button type = "submit" className = "btn btn-primary btn-block">Sign up</button>
                                    </div>
                                </div>
                            )}
                            {message && (
                                <div className = "form-group">
                                    <div className = { successful ? "alert alert-success" : "alert alert-danger" } role = "alert">{message}</div>
                                </div>
                            )}
                        </Form>
                    </Formik>
                </div>
            </div>
        );
    };
}