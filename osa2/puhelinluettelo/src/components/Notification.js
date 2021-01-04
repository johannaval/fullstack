import React from 'react';

const Notification = (props) => {

    if (props.notification != null) {
        return (
            <div className={props.type}>
                {props.notification}
            </div >
        )
    } else {
        return (null)
    }
}

export default Notification;