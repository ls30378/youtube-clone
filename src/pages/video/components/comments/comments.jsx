import Comment from "../comment/comment";
import "./comments.scss";

const Comments = () => {
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      const textarea = document.getElementById("comment");
      textarea.rows += 1;
    }
  };
  return (
    <div className="comments__container">
      <div className="comments__first-row">
        <h3>1,523 Comments</h3>
        <span>
          <i className="fa-solid fa-bars" />
          SORT BY
        </span>
      </div>
      <div className="comments__add-comments">
        <div className="user-image">
          <span>B</span>
        </div>
        <form>
          <textarea
            onKeyDown={handleEnter}
            name="comment"
            id="comment"
            rows={2}
            placeholder="Add a comment..."
          ></textarea>
          <div className="form-buttons">
            <a href="#" className="cancelBtn">
              Cancel
            </a>
            <a href="#" className="commentBtn">
              Comment
            </a>
          </div>
        </form>
      </div>
      <div className="comments_show-comments">
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
