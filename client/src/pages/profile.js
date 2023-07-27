import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import { ADD_USER } from '../utils/mutations';

const Profile = (props) => {

return (
    
    <div className="auth-form-container">
       <div className="col-1 col-lg-12">
         <h4>Hey NRL Fan!</h4>
         <h5>Did you know...</h5>
         <h6>NRL originated in 1895 in Huddersfield, Yorkshire, England as the result of a split from the Rugby Football Union (RFU) over the issue of payments to players.</h6>
         <h6></h6>
</div>
</div>
)
}



export default Profile;
         