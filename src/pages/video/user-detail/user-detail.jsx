import "./user-detail.scss";

const UserDetail = () => {
  return (
    <div className="user__container">
      {/* FIRST ROW USER DETAIL*/}
      <div className="user__detail">
        <div className="user__detail-info">
          <div className="user__image">B</div>
          <div className="user__info">
            <h3>Lorem, ipsum.</h3>
            <h4>11.5K subscribers</h4>
          </div>
        </div>
        <div className="subscribe">
          <a href="#">Subscribe</a>
        </div>
      </div>
      {/* END FIRST ROW */}
      <div className="user__video-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          repellendus asperiores, quas ex similique, accusantium consequatur
          recusandae vel officiis architecto sunt soluta, in impedit perferendis
          earum magni iure dolorem iusto quibusdam hic tempora fugit illum illo?
          Quo aliquam repudiandae temporibus itaque, voluptatem magni, dicta
          ipsa nesciunt velit quos facilis nemo!
        </p>
      </div>
    </div>
  );
};

export default UserDetail;
