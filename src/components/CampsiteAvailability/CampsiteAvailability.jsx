import React from 'react';
import { useCampsiteAvailability } from '../../hooks/useCampsiteAvailability';

const CampsiteAvailability = () => {
  const campsites = useCampsiteAvailability();

  const availabilityList = campsites.map((availability, i) => {
    return (
      <li key={i}>
        {availability}
      </li>
    );
  });

  return (
    <ul>
      {availabilityList}
    </ul>
  );
};

export default CampsiteAvailability;
