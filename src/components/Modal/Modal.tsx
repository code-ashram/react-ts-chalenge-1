import { FC, ReactNode } from 'react'

import Button from '../Button'

import styles from './Modal.module.css'

type Props = {
  modalTitle: string
  onCloseModal: () => void
  children: ReactNode
}

const Modal: FC<Props> = ({ modalTitle, onCloseModal, children }) => {

  return (
    <div className={styles.modalWrap} onClick={onCloseModal}>
      <div className={styles.modalWindow} onClick={(e) => {e.stopPropagation()}}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{modalTitle}</h2>
        </div>

        <div className={styles.modalBody}>
          {children}
          <Button buttonType={'button'} onClick={onCloseModal}>Close</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
