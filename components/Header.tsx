
import React, { useState, useEffect, useRef } from 'react';
import { ICONS, MOCK_NOTIFICATIONS } from '../constants';
import { Notification, NotificationType } from '../types';

interface HeaderProps {
  title: string;
}

const NotificationIcon: React.FC<{ type: NotificationType }> = ({ type }) => {
    const iconMap = {
        [NotificationType.CodeReview]: ICONS.checkCircle,
        [NotificationType.Governance]: ICONS.governance_notif,
        [NotificationType.Wallet]: ICONS.wallet_notif,
        [NotificationType.System]: ICONS.system_notif,
    };
    return <div className="p-2 bg-gray-700/50 rounded-full">{iconMap[type]}</div>;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  const togglePanel = () => {
    setIsPanelOpen(prev => !prev);
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsPanelOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <header className="flex items-center justify-between p-6 bg-gray-900 border-b border-gray-700/50">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <div className="flex items-center space-x-6">
        <div ref={notificationRef} className="relative">
          <button onClick={togglePanel} className="relative text-gray-400 hover:text-white transition-colors">
            {ICONS.bell}
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-gray-900"></span>
            )}
          </button>
          {isPanelOpen && (
            <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
              <div className="p-4 flex justify-between items-center border-b border-gray-700">
                <h4 className="font-semibold text-white">Benachrichtigungen</h4>
                {unreadCount > 0 && (
                   <button onClick={markAllAsRead} className="text-sm text-purple-400 hover:text-purple-300 font-semibold">
                    Alle als gelesen markieren
                  </button>
                )}
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map(n => (
                    <div
                      key={n.id}
                      onClick={() => markAsRead(n.id)}
                      className={`flex items-start p-4 space-x-3 cursor-pointer transition-colors duration-150 ${!n.read ? 'bg-purple-600/10 hover:bg-purple-600/20' : 'hover:bg-gray-700/50'}`}
                    >
                      <NotificationIcon type={n.type} />
                      <div className="flex-1">
                        <p className={`font-semibold text-sm ${!n.read ? 'text-white' : 'text-gray-300'}`}>{n.title}</p>
                        <p className="text-xs text-gray-400">{n.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{n.timestamp}</p>
                      </div>
                      {!n.read && <div className="w-2.5 h-2.5 bg-purple-500 rounded-full self-center flex-shrink-0"></div>}
                    </div>
                  ))
                ) : (
                  <p className="p-4 text-center text-gray-500 text-sm">Keine neuen Benachrichtigungen.</p>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-3 bg-gray-800/70 px-4 py-2 rounded-full">
          <div className="text-yellow-400">{ICONS.coin}</div>
          <span className="font-semibold text-white">1,250 BKG</span>
        </div>
        <div className="flex items-center space-x-3">
          <img
            src="https://picsum.photos/seed/user/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-purple-500"
          />
          <div>
            <p className="font-semibold text-white">Projektadmin</p>
            <p className="text-xs text-gray-400">admin@bkg-web.dev</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
