import { useState } from "react";
import { UserForm } from "./components/UserForm";
import { User } from "./types/user";
import { UserProfile } from "./components/UserProfile";
import { UserList } from "./components/UserList";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [userId, setUserId] = useState("");
  const [mode, setMode] = useState<"VIEW" | "EDIT" | "">("");
  const user = users.find((user) => user.id === userId) ?? null;
  const viewUser = (id: string) => {
    setUserId(id);
    setMode("VIEW");
  };
  const editUser = (id: string) => {
    setUserId(id);
    setMode("EDIT");
  };
  const deleteUser = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    setUserId("");
    setMode("");
  };
  return (
    <>
      <UserForm
        setUsers={setUsers}
        user={mode === "EDIT" ? user : null}
        key={userId}
      />
      <UserList
        users={users}
        viewUser={viewUser}
        editUser={editUser}
        deleteUser={deleteUser}
      />
      {user !== null && mode === "VIEW" ? (
        <UserProfile user={user} />
      ) : (
        <p>no user selected</p>
      )}
    </>
  );
}

export default App;
