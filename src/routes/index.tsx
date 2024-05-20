import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home/Home';
import Registration from '@/pages/Registration/Registration';
import Event from '@/pages/Event/Event';
import Participants from '@/components/Participants/Participants';

export const ROUTE_PATH: Record<string, string> = {
  HOME: '/',
  REGISTRATION: 'registration',
  PAGE404: '*',
};

const routes = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path={ROUTE_PATH.HOME} element={<Home/>} />
    <Route path={'/:eventId'} element={<Event/>}>
      <Route index element={<Participants/>} />
      <Route path={ROUTE_PATH.REGISTRATION} element={<Registration/>} />
    </Route>
  </Route>
))

export default routes;