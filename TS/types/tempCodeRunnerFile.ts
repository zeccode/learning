interface NotificationI<T> {
        id: number;
        msg: string;
        sender: T;
      }
      
      function sendNotification<T>(notification: NotificationI<T>) {
        console.log(`Enviando notificação para ${JSON.stringify(notification.sender)}`);
      }
      
      interface UserI {
        name: string;
        email: string;
      }
      
      const userNotification: NotificationI<UserI> = {
        id: 1,
        msg: "Você tem uma nova mensagem!",
        sender: { name: "Michel", email: "michel@email.com" },
      };
      
      sendNotification(userNotification);