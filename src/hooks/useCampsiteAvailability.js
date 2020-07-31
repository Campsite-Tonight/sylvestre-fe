import { useState, useEffect } from 'react';
import * as Campsite from '../models/Campsite';

export const useCampsiteAvailability = () => {
  const [availabilities, setAvailabilities] = useState({});

  useEffect(() => {
    Campsite
      .findCampsiteAvailability(233735)
      .then(res => setAvailabilities(res));
  }, []);
  console.log(availabilities);
  return availabilities;
};
