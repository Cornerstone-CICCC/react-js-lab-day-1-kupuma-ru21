import { User } from "../types/user";

export const UserProfile = ({ user }: { user: User }) => {
  return (
    <>
      <div>
        <span>fullname</span>
        <p>{user.fullname}</p>
      </div>
      <div>
        <span>age</span>
        <p>{user.age}</p>
      </div>
      <div>
        <span>education</span>
        <p>{user.education}</p>
      </div>
      <div>
        <span>gender</span>
        <p>{user.gender}</p>
      </div>
      <div>
        <span>skill</span>
        <p>{user.skills.join(", ")}</p>
      </div>
    </>
  );
};
