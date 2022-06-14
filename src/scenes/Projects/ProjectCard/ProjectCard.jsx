import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectCard = ({ id, image, title, description }) => {
  const location = useLocation();

  return (
    <li className={s.card}>
    <Link
    to={{
      pathname: `/project/${id}`,
      state: {
        background: location,
      },
    }}
  >
    
      <div className={s.cardWrapper}>
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            style={{ minHeight: '10rem' }}
            placeholderSrc={image.placeholderSrc}
          />
       
        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description} <span style={{fontSize:"10px",color:"purple"}}>-Click here to know more </span> </p>
        </div>
      </div>
    
    </Link>
    </li>

  );
};

export default ProjectCard;
