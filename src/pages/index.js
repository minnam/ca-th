import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

/* Components =================================================================================== */
import { Home } from './__home__'
import { Task1 } from './task-1'
import { Task2 } from './task-2'
import { Task3 } from './task-3'

/* <Pages /> ==================================================================================== */
export const Pages = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="task-3" element={<Task3 />} />
      <Route path="task-2" element={<Task2 />} />
      <Route path="task-1" element={<Task1 />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
}