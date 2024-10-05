import { Injectable } from '@nestjs/common'
import { faker } from '@faker-js/faker'

@Injectable()
export class FakerService {
  getFakeUser() {
    return {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
    }
  }
}
