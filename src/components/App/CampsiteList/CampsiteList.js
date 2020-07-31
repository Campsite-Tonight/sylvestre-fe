import React from 'react';
import CampsiteItem from './CampsiteItem';
import { useCampsites } from '../../../hooks/useCampsites';
import styles from './CampList.css';

const CampsiteList = () => {
  const campsites = useCampsites();

  const campingList = campsites.map(campsite => 
    <CampsiteItem 
      key={campsite.campId} 
      campsite={campsite}
    />);

  return (
    <ul className={styles.CampList}>
      {campingList}
    </ul>
  );

};

export default CampsiteList;
