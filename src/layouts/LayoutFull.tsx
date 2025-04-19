// LayoutFull.tsx
import { Outlet } from 'react-router-dom';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';

const LayoutFull = () => (
  <>
    <TopBar />
    <Outlet />
    <BottomBar />
  </>
);

export default LayoutFull;
