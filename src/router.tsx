import { createBrowserRouter } from 'react-router-dom';

import LayoutBottom from './layouts/LayoutBottom';
import LayoutNone from './layouts/LayoutNone';
import LayoutTop from './layouts/LayoutTop';
import Chats from './pages/Chats';
import Collections from './pages/Collections';
import Game from './pages/Game';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    element: <LayoutBottom />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    element: <LayoutTop />,
    children: [{ path: '/game', element: <Game /> }],
  },
  {
    element: <LayoutBottom />,
    children: [{ path: '/collections', element: <Collections /> }],
  },
  {
    element: <LayoutBottom />,
    children: [{ path: '/chats', element: <Chats /> }],
  },
  {
    element: <LayoutNone />,
    children: [{ path: '/intro', element: <div>인트로 페이지</div> }],
  },
]);

export default router;
