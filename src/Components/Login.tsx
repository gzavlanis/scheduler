import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useParams } from "react-router-dom";

type SomeComponentProps = typeof useParams;
const Login: FC<SomeComponentProps> = ({ history }): JSX.Element => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const login = (data: any) => {
        let params = {
            username: data.username,
            password: data.password
        };
        axios.post("http://localhost:4000/api/login", params).then(function (response) {
            if (response.data.success === false) {
                toast.error(response.data.error, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: 0,
                    toastId: "my_toast",
                });
            } else {
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: 0,
                    toastId: "my_toast",
                });
                localStorage.setItem("auth", response.data.token);
                setTimeout(() => {
                    history.push("/");
                }, 3000);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };

    return(
        <>
            <div className = "container">
                <div className = "row d-flex justify-content-center align-items-center" style = {{ height: "100vh" }}>
                    <div className="card mb-3" style={{ maxWidth: "320px" }}>
                        <div className="col-md-12">
                            <div className="card-body">
                                <h3 className="card-title text-center text-secondary mt-3">Login Form</h3>
                                <form autoComplete="off" onSubmit={handleSubmit(login)}>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}