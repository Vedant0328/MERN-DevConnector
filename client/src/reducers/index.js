import { combineReducers } from '@reduxjs/toolkit';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

export default combineReducers({ alert, auth, profile, post });
