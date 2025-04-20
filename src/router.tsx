import { createBrowserRouter } from 'react-router-dom';

import LayoutBottom from './layouts/LayoutBottom';
import LayoutNone from './layouts/LayoutNone';
import Chats from './pages/Chats';
import CollectionDetail from './pages/CollectionDetail';
import Collections from './pages/Collections';
import Game from './pages/Game';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    element: <LayoutBottom />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    element: <LayoutNone />,
    children: [{ path: '/game', element: <Game /> }],
  },
  {
    element: <LayoutBottom />,
    children: [{ path: '/collections', element: <Collections /> }],
  },
  {
    element: <LayoutNone />,
    children: [{ path: '/collection/:id', element: <CollectionDetail /> }],
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
