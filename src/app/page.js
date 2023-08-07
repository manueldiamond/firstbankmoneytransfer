import {Header} from './components'
import { Homepage } from './components/pages'

import styles from './index.css'

export default function Home() {
  return (
    <div className='App'>
      <Header/>
      <Homepage/>
    </div>
  )
}
