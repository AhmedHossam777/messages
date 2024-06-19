import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listlMessages(){

  }

  @Post()
  createMessage(){

  }

  @Get('/:id')
  getMessage(){

  }
}