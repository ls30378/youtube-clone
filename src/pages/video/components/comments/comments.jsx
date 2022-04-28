import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Comment from "../comment/comment";
import "./comments.scss";
import { selectComments } from "../../../../redux/video/video.selector";
import { addCommentsAction } from "../../../../redux/video/video.actions";

const Comments = ({ video }) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const [rows, setRows] = useState(2);

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      setRows(rows + 1);
    }
  };
  const [textComment, setTextComment] = useState("");

  const submitComment = (event) => {
    event.preventDefault();
    const comment = {
      id: Math.random().toString(36).substr(2, 9),
      video: Number(video),
      author: "Lorem Ipsum",
      comment: textComment,
    };
    dispatch(addCommentsAction(comment));
  };
  return (
    <div className="comments__container">
      <div className="comments__first-row">
        <h3>{comments ? `${comments.length} Comments` : ""}</h3>
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
            rows={rows}
            placeholder="Add a comment..."
            onChange={(event) => setTextComment(event.target.value)}
            value={textComment}
          ></textarea>
          <div className="form-buttons">
            <a
              onClick={(event) => {
                event.preventDefault();
                setTextComment("");
              }}
              href="#"
              className="cancelBtn"
            >
              Cancel
            </a>
            <a onClick={submitComment} href="#" className="commentBtn">
              Comment
            </a>
          </div>
        </form>
      </div>
      <div className="comments_show-comments">
        {comments
          ? comments.map((c) => (
              <Comment key={c.id} user={c.author} comment={c.comment} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Comments;
