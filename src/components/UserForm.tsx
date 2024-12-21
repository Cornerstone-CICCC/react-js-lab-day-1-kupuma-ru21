import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { v4 as uuidv4 } from "uuid";
import { Education } from "../types/education";
import { Skill } from "../types/skill";
import { User } from "../types/user";
import { Gender } from "../types/Gender";

export const UserForm = ({
  setUsers,
  user,
}: {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  user: User | null;
}) => {
  const [fullname, setFullname] = useState(user?.fullname ?? "");
  const [age, setAge] = useState<number | undefined>(user?.age);
  const [education, setEducation] = useState<Education | "">(
    user?.education ?? ""
  );
  const [gender, setGender] = useState<Gender>(user?.gender ?? "Male");
  const [skills, setSkills] = useState<Skill[]>(user?.skills ?? []);
  const [bio, setBio] = useState(user?.bio ?? "");

  const resetForm = () => {
    setFullname("");
    setAge(undefined);
    setEducation("");
    setGender("Male");
    setSkills([]);
    setBio("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUsers((prev) => {
            if (age === undefined) {
              console.error("age is undefined");
              return prev;
            }
            if (education === "") {
              console.error("education is empty");
              return prev;
            }
            return [
              ...prev,
              { id: uuidv4(), fullname, age, education, gender, skills, bio },
            ];
          });
          resetForm();
        }}
      >
        <div>
          <label>fullname:</label>
          <input
            type="text"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            value={fullname}
          />
        </div>
        <div>
          <label>age:</label>
          <input
            type="number"
            onChange={(e) => {
              setAge(parseInt(e.target.value));
            }}
            value={String(age)}
          />
        </div>
        <div>
          <label>education:</label>
          <select
            name="pets"
            id="pet-select"
            onChange={(e) => setEducation(e.target.value as Education)}
            value={education}
          >
            <option value="">--Please choose an option--</option>
            {["Grade school", "high school", "college"].map((value) => {
              return (
                <option value={value} key={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          {(["Male", "Female", "other"] as Gender[]).map((value) => {
            return (
              <Fragment key={value}>
                <input
                  type="radio"
                  checked={value === gender}
                  onChange={() => {
                    setGender(value);
                  }}
                />
                <label>{value}</label>
              </Fragment>
            );
          })}
        </div>
        <div>
          {(["TypeScript", "React", "Node", "NoSQL"] as Skill[]).map(
            (value) => {
              return (
                <Fragment key={value}>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSkills([...skills, value]);
                      } else {
                        setSkills(skills.filter((skill) => skill !== value));
                      }
                    }}
                    checked={skills.includes(value)}
                  />
                  <label>{value}</label>
                </Fragment>
              );
            }
          )}
        </div>
        <div>
          <label>bio:</label>
          <textarea
            onChange={(e) => {
              setBio(e.target.value);
            }}
            value={bio}
          />
        </div>
        <button type="submit">Save User</button>
      </form>
      <button
        onClick={() => {
          resetForm();
        }}
      >
        Clear Users
      </button>
    </>
  );
};
