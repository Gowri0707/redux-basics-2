import classes from "./Notification.module.css";
const Notification = (props) => {
  let styles = classes.notification + " " + classes.pending;
  if (props.status === "success") {
    styles = classes.notification + " " + classes.success;
  } else if (props.status === "error") {
    styles = classes.notification + " " + classes.error;
  }
  return (
    <div className={styles}>
      <h1>{props.title}</h1>
      <h1>{props.message}</h1>
    </div>
  );
};

export default Notification;
