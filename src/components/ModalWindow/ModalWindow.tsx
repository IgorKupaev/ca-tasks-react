import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import type { FC } from 'react';

import styles from './ModalWindow.module.css';

const domNode = document.getElementsByTagName('body')[0];

interface IModalWindowProps {
  content: JSX.Element
}

const ModalWindow: FC<IModalWindowProps> = ({ content }): JSX.Element => {
  const [isOpened, setIsOpened] = useState(true);
  return createPortal((
    <div
      style={isOpened ? { display: 'flex' } : { display: 'none' }}
      onClick={() => setIsOpened(false)}
      className={styles.modal}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={styles.modalContainer}
      >
        {content}
      </div>
    </div>
  ), domNode);
}

export default ModalWindow;
