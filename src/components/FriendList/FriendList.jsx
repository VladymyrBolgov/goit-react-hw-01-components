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

FriendList.protoTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        })
    ).isRequired,
};

export default FriendList;