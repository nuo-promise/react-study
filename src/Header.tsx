import React from 'react';

type headerProps = {
  name: string;
};

const Header: React.FC<headerProps> = (props) => {
  const { name } = props;
  return (
    <div>
      <h1> 操作人: {name}</h1>
    </div>
  );
};

export default Header;
