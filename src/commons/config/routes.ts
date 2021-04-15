import Home from 'pages/Home';
import Example from 'pages/Example';

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Home,
  },
  {
    path: '/example',
    name: 'example',
    exact: true,
    component: Example,
  },
];

export default routes;
