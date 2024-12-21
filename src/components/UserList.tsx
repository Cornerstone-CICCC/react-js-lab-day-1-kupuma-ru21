import "./userList.css";

export const UserList = ({
  users,
  viewUser,
  editUser,
  deleteUser,
}: {
  users: { id: string; fullname: string }[];
  viewUser: (id: string) => void;
  editUser: (id: string) => void;
  deleteUser: (id: string) => void;
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Full name</th>
          <th scope="col">View</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      {users.map(({ id, fullname }) => {
        return (
          <tbody>
            <tr>
              <th scope="row">{id}</th>
              <td>{fullname}</td>
              <td>
                <button
                  onClick={() => {
                    viewUser(id);
                  }}
                >
                  View
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    editUser(id);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
