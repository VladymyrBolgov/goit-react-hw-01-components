import React from 'react';
import css from './Profile.module.css';
import PropTypes  from 'prop-types';

 const Profile = ({user}) => {
    let { username, tag, location, avatar, stats } = user;
    return (
    <div className={css.profile}>
        <div className={css.description}>
            <img className={css.avatar} src={avatar} alt="User avatar" />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.statsItem}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{stats.views}</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired,
        tag: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        }),
};

export default Profile;