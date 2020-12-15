import React from 'react';
import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="section-inner">
      <h4 className="footer__title">&copy; 2020 Covid Dashboard copyright data</h4>
      <div className="students">
        <p className="students__description">Students:</p>
        <div className="students-list">
          <a className="students-list__link" href="https://github.com/Iogsotot">
            <span>Anna Iogsotot</span>
          </a>
          <a className="students-list__link" href="https://github.com/IgorOsa">
            <span>Igor Osadchyi</span>
          </a>
          <a className="students-list__link" href="https://github.com/Kelevrra">
            <span>Alex Kelevrra</span>
          </a>
        </div>
      </div>
      <div className="mentor">
        <p className="mentor__description">Mentor:</p>
        <a className="mentor__link" href="https://github.com/cardamo">
          <span>Artёm Sinicyn</span>
        </a>
      </div>
      <a className="copyright-link" href="https://rs.school/js/">
        <img src="https://rs.school/images/rs_school_js.svg" width="60" alt="" />
      </a>
    </div>
  </footer>
);

export default Footer;
