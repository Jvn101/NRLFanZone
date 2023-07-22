// import React, { useState } from "react";


// export const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [password, setPass] = useState('');
//     const [username, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Register</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//             <label htmlFor="name">Full name</label>
//             <input value={username} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
//             <label htmlFor="email">email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <label htmlFor="password">password</label>
//             <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//             <button type="submit">Log In</button>
//         </form>
//         <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
//     </div>
//     )
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = (props) => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data.addUser);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }


  return (
    <div className="auth-form-container App">
        <h2>Register</h2>
        <form className="login-form" onSubmit={handleFormSubmit}>
            <label htmlFor="email">username</label>
            <input value={formState.username} onChange={handleChange}type="username" placeholder="username" id="username" name="username" />
            <label htmlFor="email">email</label>
            <input value={formState.email} onChange={handleChange}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={formState.password} onChange={handleChange} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
        <a href="/login"><button className="link-btn">Already an NRLFanZone Member</button></a>
        <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register here.</button>
        {/* { currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} */}
    </div>
    // </div>
    
)
}


export default Signup;

//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-lg-10">
//         <div className="card">
//           <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
//           <div className="card-body">
//             {data ? (
//               <p>
//                 Success! You may now head{' '}
//                 <Link to="/">back to the homepage.</Link>
//               </p>
//             ) : (
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   className="form-input"
//                   placeholder="Your username"
//                   name="username"
//                   type="text"
//                   value={formState.username}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="Your email"
//                   name="email"
//                   type="email"
//                   value={formState.email}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="******"
//                   name="password"
//                   type="password"
//                   value={formState.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   className="btn btn-block btn-primary"
//                   style={{ cursor: 'pointer' }}
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </form>
//             )}

//             {error && (
//               <div className="my-3 p-3 bg-danger text-white">
//                 {error.message}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };


// import React, { useState } from "react";

// export const Login = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }


