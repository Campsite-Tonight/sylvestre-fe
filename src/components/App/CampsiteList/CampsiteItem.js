import React from 'react';
import PropTypes from 'prop-types';

const CampsiteItem = ({ campsite }) => {
  return (
    <li>
      <span>{campsite.name}</span>
      <span>-{campsite.city}-</span>
      <span>{campsite.campId}</span>
      <span>---{campsite.type}</span>
    </li>
  );
};

CampsiteItem.propTypes = {
  campsite: PropTypes.object.isRequired
};

export default CampsiteItem;


