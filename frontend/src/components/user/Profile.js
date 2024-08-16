import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

import img from "../../assets/images/ProfileLogo.jpg";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Thông tin cá nhân"} />

          <h2 className="mt-5 ml-5">Thông tin cá nhân</h2>
          <div className="row justify-content-around mt-5 user-info">
            <div className="col-12 col-md-3">
              <figure className="avatar avatar-profile">
                <img
                  style={{ marginLeft: 50 }}
                  className="rounded-circle img-fluid"
                  src={img}
                  alt={user.name}
                />
              </figure>
              <p className="btn btn-primary btn-block my-5">Sửa thông tin</p>
            </div>

            <div className="col-12 col-md-5">
              <h4>Họ và Tên</h4>
              <p>{user.name}</p>

              <h4>Email</h4>
              <p>{user.email}</p>

              <h4>Ngày tham gia</h4>
              <p>{String(user.createdAt).substring(0, 10)}</p>

              <p className="btn btn-primary btn-block mt-3">
                Thay đổi mật khẩu
              </p>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
