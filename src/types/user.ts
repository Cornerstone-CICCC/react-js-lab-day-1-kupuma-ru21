import { Education } from "./education";
import { Gender } from "./Gender";
import { Skill } from "./skill";

export type User = {
  id: string;
  fullname: string;
  age: number;
  education: Education;
  gender: Gender;
  skills: Skill[];
  bio: string;
};
