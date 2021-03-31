import styles from './index.less'
import HelloWorld from '../components/HelloWorld'
import Login from '@/pages/Login'
import Buttons from '@/pages/ChangeColor/Buttons'
import ShowArea from '@/pages/ChangeColor/ShowArea'
import { Color } from '@/pages/ChangeColor/Color'

export default function IndexPage() {
  return (
    <div>
      <HelloWorld />
      <Login />
      <h1 className={styles.title}>Page index</h1>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  )
}
