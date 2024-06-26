import { useNavigate } from 'react-router-dom';
import styles from './Mypage.module.scss';
import Button from "@/components/Button/Button";
import propTypes from 'prop-types';
import MessageIcon from "@/assets/icons/MessageIcon"; 
import ArrowIcon from "@/assets/icons/ArrowIcon";

const ProfileBox = ({user}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.profileBox}>
      <div className={styles.profileInfoBox}>
        <div className={styles.profileImg}>
          <img src={user.profileImgUrl} alt={"profile img"}/>
        </div>
        <div className={styles.profileInfo}>
          <p className={styles.nickname}>
            {user.nickname}
            <Button type="button" label={<ArrowIcon fill="#1d1d1d"/>} variant="inactive" 
              onClick={() => navigate('/mypage/edit')}
            />
          </p>
          <p className={styles.name}>@{user.name}</p>
        </div>
      </div>
      <div className={styles.introSelf}>
        <div>
          <MessageIcon stroke="#1d1d1d" />
          {user.introSelf === '' ? <p className={styles.text}>자기소개가 없습니다.</p>
            :
          <p className={styles.text}>{user.profileDescription}</p>}
        </div>
      </div>
    </div>
  )
}

ProfileBox.propTypes = {
  user: propTypes.object
}

export default ProfileBox;