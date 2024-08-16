import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/Logo.png";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <br />
        <div className="footer-top section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12">
                <div className="single-footer about">
                  <div className="logo">
                    <a href="index.html">
                      <img src={Logo} width={80} height={80} alt="#" />
                    </a>
                  </div>
                  <p className="text">
                    Website bán hàng trực tuyến của Fruit Store, hỗ trợ 24/7
                    cùng với nhiều ưu đẫi hấp dẫn!
                  </p>
                  <p className="text">
                    Cần hỗ trợ? - Hãy liên hệ với chúng tôi:{" "}
                    <span>
                      <a href="tel:123456789">+0123 456 789</a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer links">
                  <h5>Thông tin</h5>
                  <ul>
                    <li>
                      <Link to="">Về chúng tôi</Link>
                    </li>
                    <li>
                      <Link to="">Điều khoản và điều kiện</Link>
                    </li>
                    <li>
                      <Link to="">Liên hệ với chúng tôi</Link>
                    </li>
                    <li>
                      <Link to="">Giúp đỡ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer links">
                  <h5>Dịch vụ khách hàng</h5>
                  <ul>
                    <li>
                      <Link to="">Phương thức thanh toán</Link>
                    </li>
                    <li>
                      <Link to="">Hoàn tiền</Link>
                    </li>
                    <li>
                      <Link to="">Giao hàng</Link>
                    </li>
                    <li>
                      <Link to="">Điều khoản và bảo mật</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer social">
                  <h5>Thông tin</h5>
                  <div className="contact">
                    <ul>
                      <li>140 Lê Trọng Tấn, Quận Tân Phú, TP. HCM</li>
                      <li>Nhóm 3</li>
                      <li>info@fstore.com</li>
                      <li>+012 3456 7890</li>
                    </ul>
                  </div>
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <div className="text-center">
                    <p>Copyright © 2023</p>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
