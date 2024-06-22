import { readFile, writeFile } from 'fs/promises';
import * as path from 'path';

export class MessageRepository {
  private messagesFilePath = path.join(__dirname, '..', '..', 'messages.json');

  async findOne(id: string) {
    let contents = await readFile(this.messagesFilePath, 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    let contents = await readFile(this.messagesFilePath, 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile(this.messagesFilePath, 'utf-8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);

    messages[id] = {
      id,
      content,
    };

    await writeFile(this.messagesFilePath, JSON.stringify(messages));
  }
}
