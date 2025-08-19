import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ path: 'app', version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('get-hello')
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }
}
