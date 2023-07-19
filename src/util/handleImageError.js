import defaultProfileImage from '../assets/img/basic-profile-img-.svg';

export default function handleImageError(e) {
  e.target.src = defaultProfileImage;
}
