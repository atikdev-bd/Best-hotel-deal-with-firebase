import React, { useContext } from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSvg from "../../Assets/svg/icons8-google.svg";
import { AuthContext } from "../../contextApi/UserContext";

const Register = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const Provider = new GoogleAuthProvider()
  const navigate = useNavigate();
  const { auth,setLoading, createUser } = useContext(AuthContext);


  const loginWithGoogle = () => {
    setLoading(true)
    signInWithPopup(auth, Provider).then((result) => {
      navigate('/');
    });
  };
  const registerUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Pleaser Register !</h1>
          </div>
          <form
            onSubmit={registerUser}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Already have an account :{" "}
                <button className="btn text-emerald-500 btn-active btn-link">
                  {" "}
                  <Link to="/login">Login Here</Link>
                </button>
              </p>
              <div onClick={loginWithGoogle} className="flex justify-center items-center cursor-pointer border bg-slate-800 rounded-full pl-4">
                <img className="w-12 " src={GoogleSvg} alt="" />
                <p className="px-4">continue with google</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
