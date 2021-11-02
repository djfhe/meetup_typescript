import { User } from "./types/User";

function firstName (user1: User) {
  return user1.name.split(' ')[0]
}