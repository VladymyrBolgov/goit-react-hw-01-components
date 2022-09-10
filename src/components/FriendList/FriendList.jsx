import React from 'react';
import css from './FriendList.module.css'
import  FriendListItem from './FriendListItem/FriendListItem'
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => {
                return (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                );
            })}
        </ul>
    )
}

FriendList.protoType = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        })
    ).isRequired,
};

export default FriendList;