import "./comment.scss";

const Comment = ({ user, comment }) => {
  return (
    <div className="single-comment__container">
      <div className="single-comment__user">{user[0]}</div>
      <div className="single-comment_details">
        <div className="user-details">{user}</div>
        <div className="single-comment">{comment}</div>
        <div className="single-comment__buttons">
          <i className="fa-solid fa-thumbs-up"></i>
          <p>3</p>
          <i className="fa-solid fa-thumbs-down"></i>
          <p>Reply</p>
        </div>
        <div className="single-comment__replies">
          <i className="fa-solid fa-caret-down"></i>
          <p>View 8 replies</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
