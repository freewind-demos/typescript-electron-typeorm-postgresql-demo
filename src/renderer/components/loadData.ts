import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "../../entity/User";
import {Profile} from '../../entity/Profile';

export async function loadData() {
  const connection = await createConnection({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "demo",
    "password": "123456",
    "database": "typescript-electron-typeorm-postgresql-demo",
    synchronize: true,
    entities: [Profile, User],
  });
  console.log("Inserting a new user into the database...");

  const profile = new Profile();
  profile.gender = "male";
  profile.photo = "me.jpg";
  await connection.manager.save(profile);

  const user = new User();
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.age = 25;
  user.profile = profile;
  await connection.manager.save(user);
  console.log("Saved a new user with id: " + user.id);

  console.log("Loading users from the database...");
  const users = await connection.manager.find(User, {relations: ["profile"]});
  console.log("Loaded users: ", users);

  console.log("Here you can setup and run express/koa/any other framework.");

}
