import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
  DiBootstrap
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketDotIo,
  SiJekyll,
  SiCplusplus
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiJekyll />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        
        <SiRedux />
      </li>
      <li className={s.techIcon}>
       
        <DiBootstrap />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
      <DiMongodb />
      </li>
      <li className={s.techIcon}>
       <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <SiCplusplus />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
