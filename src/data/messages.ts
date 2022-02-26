
export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
}

const messages: Message[] = [
  {
    fromName: 'We are Here to Help You',
    subject: 'Chat with out Med Bot assistant',
    date: Date().toString().slice(16,25),
    id: 0
  },

];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
