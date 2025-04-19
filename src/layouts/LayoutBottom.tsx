import { Outlet } from 'react-router-dom';

import BottomBar from '../components/BottomBar';

const LayoutBottom = () => (
  <>
    <Outlet />
    <BottomBar />
  </>
);

export default LayoutBottom;
