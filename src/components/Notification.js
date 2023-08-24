import React from "react";
import { useNotification } from "../context/NotificationContext";
import classes from "./notification.module.css";

const Notification = () => {
  const { notification } = useNotification();

  return (
    <div>
      {notification && <p className={classes["notification"]}>{notification}</p>}
    </div>
  );
};

export default Notification;
