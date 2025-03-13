import { useEffect } from 'react';
import useNotifyStore from '~/stores/use-notify-store';

const useNotifications = () => {
  const { getMessage, setNotifyStatus } = useNotifyStore();

  useEffect(() => {
    setNotifyStatus(
      '1',
      'request',
      { id: 'user1', name: '홍길동' },
      { id: 'user2', name: '김철수' },
      22,
      '1to1',
    );
    setNotifyStatus(
      '2',
      'request',
      { id: 'user5', name: '김길동' },
      { id: 'user1', name: '김철수' },
      33,
      '1to1',
    );
    setNotifyStatus(
      '3',
      'rejected',
      { id: 'user3', name: '김지영' },
      { id: 'user2', name: '김철수' },
      45,
      'group',
    );
  }, [setNotifyStatus]);

  return getMessage();
};

export default useNotifications;
