import { MessageRepository } from './message.repository';

export class MessagesService {
  public messagesRepo: MessageRepository;

  constructor() {
    //? service is creating it's own dependencies
    //! This is Wrong don't do this on real apps
    this.messagesRepo = new MessageRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
