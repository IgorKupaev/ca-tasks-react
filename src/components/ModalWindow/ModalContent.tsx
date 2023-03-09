import React from 'react';

import type { FC } from 'react';

const ModalContent: FC = (): JSX.Element => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Some modal message</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim repellendus magnam ea magni neque eos quisquam, nemo debitis modi
        beatae quis reprehenderit aspernatur odit sed, optio vitae distinctio
        nostrum sunt.
      </p>
    </div>
  );
}

export default ModalContent;
