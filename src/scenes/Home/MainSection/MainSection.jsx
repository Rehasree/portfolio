import s from './MainSection.module.scss';
import homeMainIcon from '../../../assets/Main.jpg';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          Hi There! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          I'M
          <strong className={s.mainName}> Reha</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'Web Developer',
              'Undergrad@IIITDWD'
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        style={{borderRadius:"50%",border:"7px solid black"}}
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
      />
    </section>
  );
};

export default MainSection;
