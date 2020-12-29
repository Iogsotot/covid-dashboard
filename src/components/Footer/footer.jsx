import React from 'react';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-wrapper">

      <nav className="footer-cols">
        <div className="copyright">
          <h4 className="footer__title">
            &copy; 2020 Covid Dashboard
          </h4>
        </div>
        <div className="students">
          <h4 className="footer__title"> Students:</h4>
          <ul className="students-list">
            <li className="students__item">
              <a className="students-list__link link" href="https://github.com/IgorOsa">
                <div className="icon icon--github" />
                Igor Osadchyi
              </a>
            </li>
            <li className="students__item">
              <a className="students-list__link link" href="https://github.com/Kelevrra">
                <div className="icon icon--github" />
                Alex Kelevrra
              </a>
            </li>
          </ul>
        </div>
        <div className="mentor">
          <h4 className="footer__title">
            Mentor:
          </h4>
          <a className="mentor__link link" href="https://github.com/cardamo">
            <div className="icon icon--github" />
            Artёm Sinicyn
          </a>
        </div>
        <div className="alma-mater">
          <a className="alma-mater__link" href="https://rs.school/js/">
            <img src="https://rs.school/images/rs_school_js.svg" width="60" alt="RSS" />
          </a>
        </div>
      </nav>
    </div>
  </footer>
);

export default Footer;
