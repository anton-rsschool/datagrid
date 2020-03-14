import faker from 'faker';

const getData = (number) => {
  const data = [];
  for (let i = 0; i < number; i += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    data.push({
      id: faker.random.uuid(),
      name: `${firstName} ${lastName}`,
      age: faker.random.number(40),
      city: faker.address.city(),
      status: faker.random.boolean(),
      email: faker.internet.email(firstName, lastName),
      role: faker.random.arrayElement(['mentor', 'student', 'activist']),
      registration: faker.date.between('2019-1-1', '2020-1-1').toUTCString(),
    });
  }
  return data;
};

export default getData;
