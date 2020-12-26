import PropTypes from 'prop-types';
import s from './Profile.module.css';

const defaultAvatar =
  'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg';

function Profile({ avatar = defaultAvatar, name, tag, location, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.container}>
        <div className={s.description}>
          <img
            src={avatar ?? defaultAvatar}
            alt="Аватар пользователя"
            className={s.avatar}
          />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.statsItem}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li className={s.statsItem}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
