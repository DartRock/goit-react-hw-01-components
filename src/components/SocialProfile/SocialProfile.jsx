import SocialProfileItem from '../shared/SocialProfileItem/SocialProfileItem';
import s from './SocialProfile.module.css';

const SocialProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={'User avatar'} className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{'@' + tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <SocialProfileItem title="Followers" amount={stats.followers} />
        <SocialProfileItem title="Views" amount={stats.views} />
        <SocialProfileItem title="Likes" amount={stats.likes} />
      </ul>
    </div>
  );
};

export default SocialProfile;
