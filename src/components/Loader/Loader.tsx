import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import styles from './Loader.module.css'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  count: number
}

const Loader: FC<Props> = ({ count }) => (
  <Skeleton className={styles.skeleton} count={count} />
)

export default Loader
