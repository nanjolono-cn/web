import styles from './index.less'
import HelloWorld from '../components/HelloWorld'
import Login from '@/pages/Login'

export default function IndexPage() {
  return (
    <div>
      <HelloWorld />
      <Login />
      <h1 className={styles.title}>Page index</h1>
    </div>
  )
}
