import { Injectable } from '@nestjs/common'
import { Faker, pl } from '@faker-js/faker'
import { User } from './model/user.model'

@Injectable()
export class UsersService {
  createUser() {
    const faker = new Faker({ locale: [pl] })
    const user = new User()
    user.name = faker.person.firstName()
    user.email = faker.internet.email()
    user.address = faker.location.streetAddress()

    return user
  }
}
