import React, {useState} from 'react';
import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux';
import { getAverageScore } from '../../utils/agent.util';
import { addNewComment } from '../../redux/actions/agent.action';
import './style.css';

export const MapInfoPopup = ({
  marker,
  visible,
  onClose,
}) => {
  const dispatch = useDispatch();
  const account = useSelector(({ authReducer }) => authReducer.account);

  const [comment, setComment] = useState({ score: 0, text: '' });

  const handleRateChanged = (newRating) => {
    setComment({ ...comment, score: newRating });
  };

  const handleCommentTextChange = (e) => {
    setComment({ ...comment, text: e.target.value });
  };

  const handleAddComment = () => {
    dispatch(addNewComment(marker.id, {
      ...comment,
      sender: `${account.firstname} ${account.lastname}`,
    }));
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return visible && marker && (
    <div className="map-info-modal">
      <div className="back-drop" onClick={handleClose} />
      <div className="map-info-card">
        <div className="card-header">
          <h1>{`${marker.lastname} ${marker.firstname}`}</h1>
        </div>

        <div className="mark-info-field">
          <b>Phone:</b> {marker.phone}
        </div>
        <div className="mark-info-field">
          <b>Country Code:</b> {marker.phone}
        </div>
        <div className="mark-info-field">
          <b>Average Score:</b> {getAverageScore(marker)} / 5
        </div>

        <div className="section-label">Comment:</div>
        <div className="comment-list">
          {
            marker.comments.map((commentData) => (
              <div className="comment-item">
                <div className="comment-header">
                  <div className="comment-sender">
                    {commentData.sender}
                  </div>
                  <div className="comment-rating">
                    {commentData.score} / 5
                  </div>
                </div>
                <div className="comment-text">
                  {commentData.text}
                </div>
              </div>
            ))
          }
        </div>

        <div className="comment-new">
          <div className="section-label">Add new comment</div>

          <div className="comment-label">Note:</div>
          <ReactStars
            count={5}
            onChange={handleRateChanged}
            size={40}
            isHalf
            activeColor="#FF8157"
          />

          <div className="comment-label">Text:</div>
          <textarea value={comment.text} onChange={handleCommentTextChange}/>

          <button onClick={handleAddComment}>Comment</button>
        </div>
      </div>
    </div>
  );
};
