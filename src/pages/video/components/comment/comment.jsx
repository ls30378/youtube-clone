import "./comment.scss";

const Comment = () => {
  return (
    <div className="single-comment__container">
      <div className="single-comment__user">L</div>
      <div className="single-comment_details">
        <div className="user-details">Lorem, ipsum.</div>
        <div className="single-comment">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          eligendi pariatur ducimus earum id blanditiis ut fuga facere minima!
          At, odio? Necessitatibus voluptatum omnis tempore blanditiis impedit
          dignissimos assumenda magni, consectetur numquam alias. Alias,
          provident. Rerum voluptates dignissimos aut itaque reprehenderit
          dolores minima officia fugiat, facilis sapiente vero exercitationem
          molestias?
        </div>
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
