import { Controller, Get } from '@nestjs/common'
import { FakerService } from './faker.service'

@Controller('faker')
export class FakerController {
  constructor(private readonly fakerService: FakerService) {}

  @Get()
  getFakeUser() {
    return this.fakerService.getFakeUser()
  }
}
