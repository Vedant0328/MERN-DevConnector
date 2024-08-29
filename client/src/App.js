import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/Addexperience';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import PrivateRoute from './components/routing/PrivateRoute';

import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import AddEducation from './components/profile-forms/AddEducation';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Landing />} />
          </Routes>
          <section className='container'>
            <Alert />
            <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profiles' element={<Profiles />} />
              <Route path='/profile/:id' element={<Profile />} />
              <Route path='/' element={<PrivateRoute />}>
                <Route path='/dashboard' element={<Dashboard />} />
              </Route>
              <Route path='/' element={<PrivateRoute />}>
                <Route
                  path='/dashboard/create-profile'
                  element={<CreateProfile />}
                />
              </Route>
              <Route path='/' element={<PrivateRoute />}>
                <Route path='/edit-profile' element={<EditProfile />} />
              </Route>
              <Route path='/' element={<PrivateRoute />}>
                <Route path='/add-experience' element={<AddExperience />} />
              </Route>
              <Route path='/' element={<PrivateRoute />}>
                <Route path='/add-education' element={<AddEducation />} />
              </Route>
              <Route path='/' element={<PrivateRoute />}>
                <Route path='/posts' element={<Posts />} />
              </Route>
              <Route path='/' element={<PrivateRoute />}>
                <Route path='/posts/:id' element={<Post />} />
              </Route>
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
