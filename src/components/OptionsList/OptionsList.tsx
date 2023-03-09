import React from 'react';

import type { FC } from 'react';

interface IOptionsListProps {
  options: string[]
}

const OptionsList: FC<IOptionsListProps> = ({ options }): JSX.Element => {
  const getOptionsJSX = () => options.map(option => <div>{option}</div>);
  
  return (
    <div>
      <button>Show options</button>
      <div>
      </div>
    </div>
  );
}

export default OptionsList;
