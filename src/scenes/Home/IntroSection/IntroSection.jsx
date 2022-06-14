import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.png';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>
          <div className={s.description}>
            <p>
            Hey folks! My name is Reha<br/>
            I'm a MERN stack developer with a passion for front end development and design .<br/>
            I'm currently a final year student at IIIT-DWD with a major Computer science.<br/>
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}>
                  {' '}
                  Web Technologies and Products
                </b>
              </i>
            </p>

            <p>
              A passionate Full Stack Software Developer 🚀 <br />I
              have an experience of building{' '}
              <i>
                <b className={s.purple}>Web </b>
              </i>{' '}
              applications with
              <br />
              <i>
                <b className={s.purple}>
                  JavaScript, Reactjs, Nodejs
                </b>
              </i>{' '}
              and some other cool libraries
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage width='330px' alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/Rehasree"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.instagram.com/ray_ha_2704"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaInstagram />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/rayha2704/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
