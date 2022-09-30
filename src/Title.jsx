import React from 'react';

const Title = ({ editId }) => {
  return <div>{editId ? 'Edit Car' : 'Add New Car'}</div>;
};

export default Title;
