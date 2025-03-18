const routes = [
  { path: '/home', type: 'quick-network' },
  { path: '/create-group', type: 'default', title: '그룹 만들기' },
  { path: '/chat', type: 'chat-room' },
  { path: '/notifications', type: 'default', title: '알림' },
  { path: '/mypage', type: 'default', title: '마이페이지' },
];

export function getTopNavType(pathname: string) {
  const findRoute = routes.find((route) => route.path === pathname);
  return {
    type: findRoute?.type,
    title: findRoute?.title,
  };
}
