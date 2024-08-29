import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  auth,
  addLike,
  removeLike,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  return (
    <div class='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img class='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p class='my-1'>{text}</p>
        <p class='post-date'>
          Posted on <Moment format='YYYY-MM-DD'>{date}</Moment>
        </p>

        {showActions && (
          <Fragment>
            <button
              onClick={(e) => addLike(_id)}
              type='button'
              class='btn btn-light'
            >
              <FaThumbsUp />
              <span>{likes.length > 0 && <span> {likes.length}</span>}</span>
            </button>
            <button
              onClick={(e) => removeLike(_id)}
              type='button'
              class='btn btn-light'
            >
              <FaThumbsDown />
            </button>
            <Link to={`/posts/${_id}`} class='btn btn-primary'>
              Discussion{' '}
              {comments.length > 0 && (
                <span class='comment-count'> {comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={(e) => deletePost(_id)}
                type='button'
                class='btn btn-danger'
              >
                <FaTimesCircle />
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
