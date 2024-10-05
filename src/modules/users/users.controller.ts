import { Controller, Get } from '@nestjs/common'
import { UsersService } from './users.service'
import { PinoLogger } from 'nestjs-pino'

@Controller('faker')
export class UsersController {
  constructor(
    private readonly fakerService: UsersService,
    private readonly logger: PinoLogger,
  ) {}

  @Get()
  getFakeUser() {
    const response = this.fakerService.createUser()
    this.logger.info(JSON.stringify(response))
    return response
  }
}
