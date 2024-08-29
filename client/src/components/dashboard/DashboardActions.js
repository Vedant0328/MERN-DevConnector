import { FaGraduationCap } from 'react-icons/fa';
import { FaBlackTie } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div class='dash-buttons'>
      <Link to='/edit-profile' class='btn btn-light'>
        <FaUserCircle style={{ color: '#17a2b8' }} /> Edit Profile{' '}
      </Link>
      <Link to='/add-experience' class='btn btn-light'>
        <FaBlackTie style={{ color: '#17a2b8' }} /> Add Experience
      </Link>
      <Link to='/add-education' class='btn btn-light'>
        <FaGraduationCap style={{ color: '#17a2b8' }} /> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
