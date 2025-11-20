import Button from "../Button/Button";
import "./styles.css";
import { useState } from "react";

function Feedback() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const onLike = () => {
    setLike((perVelue) => {
      return perVelue + 1;
    });
  };
  const onDislike = () => {
    setDislike((perVelue) => {
      return perVelue + 1;
    });
  };
  const onResetResults = () => {
    setLike(0);
    setDislike(0);
  };
  return (
    <div className="feedback_wrapper">
      <div className="feedback-control">
        <div className="button_feedback">
          <Button name="Like" onClick={onLike} />
          <p className="counter_like-dislike" id="like">
            {like}
          </p>
        </div>

        <div className="button_feedback">
          <Button name="Dislike" onClick={onDislike} id="dislike" />
          <p className="counter_like-dislike">{dislike}</p>
        </div>

        <div className="button_feedback" id="resetresults">
          <Button name="Reset Results" onClick={onResetResults} />
        </div>
      </div>
    </div>
  );
}
export default Feedback;
