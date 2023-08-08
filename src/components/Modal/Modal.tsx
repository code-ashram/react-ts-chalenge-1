import { FC } from 'react'

import Button from '../Button'
import Error from '../../constants/errorsList.ts'

import styles from './Modal.module.css'

type Props = {
  modalText: Error | undefined
  onCloseModal: () => void
}

const Modal: FC<Props> = ({ modalText, onCloseModal }) => {

  return (
    <div className={styles.modalWrap} onClick={onCloseModal}>
      <div className={styles.modalWindow} onClick={(e) => {e.stopPropagation()}}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Invalid Input!</h2>
        </div>

        <div className={styles.modalBody}>
          <p className={styles.modalMessage}>{modalText}</p>
          <Button buttonType={'button'} onClick={onCloseModal}>Close</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
