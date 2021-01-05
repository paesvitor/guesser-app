export const NotificationsTypes = {
  ENQUEUE: "@NOTIFICATIONS/ENQUEUE",
  CLOSE: "@NOTIFICATIONS/CLOSE",
  REMOVE: "@NOTIFICATIONS/REMOVE",
};

export const notificationsActions = {
  enqueue: (notification) => {
    const key = notification.options && notification.options.key;

    return {
      type: NotificationsTypes.ENQUEUE,
      notification: {
        ...notification,
        key: key || new Date().getTime() + Math.random(),
      },
    };
  },

  close: (key) => ({
    type: NotificationsTypes.CLOSE,
    dismissAll: !key, // dismiss all if no key has been defined
    key,
  }),

  remove: (key) => ({
    type: NotificationsTypes.REMOVE,
    key,
  }),
};
