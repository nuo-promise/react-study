import React from 'react';
import ThemeButton from './ThemedButton';

type toolProps = {
  title: string;
};

const Toolbar: React.FC<toolProps> = (props) => {
  const { title } = props;
  return (
    <div>
      <h1>ToolBar: {title}</h1>
      <ThemeButton />
    </div>
  );
};

export default Toolbar;
