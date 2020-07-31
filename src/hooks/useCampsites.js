import { useState, useEffect } from 'react';
import * as Campsite from '../models/Campsite';

export const useCampsites = () => {
  const [campsites, setCampsites] = useState([]);

  useEffect(() => {
    Campsite
      .find()
      .then(res => setCampsites(res));
  }, []);

  return campsites;
};
