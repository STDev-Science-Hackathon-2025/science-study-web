import { Outlet } from 'react-router-dom';

import TopBar from '../components/TopBar';

const LayoutTop = () => (
  <>
    <TopBar />
    <Outlet />
  </>
);

export default LayoutTop;
