import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div class='profile-top bg-primary p-2'>
      <img class='round-img my-1' src={avatar} alt='' />
      <h1 class='large'>{name}</h1>
      <p class='lead'>
        {status} {company && <span>at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div class='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <FaGlobe size={'30px'} />
          </a>
        )}

        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <AiOutlineTwitter size={'30px'} />
          </a>
        )}

        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <AiFillFacebook size={'30px'} />
          </a>
        )}

        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <AiFillLinkedin size={'30px'} />
          </a>
        )}

        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <AiFillYoutube size={'30px'} />
          </a>
        )}

        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <AiOutlineInstagram size={'30px'} />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.func.isRequired,
};

export default ProfileTop;
