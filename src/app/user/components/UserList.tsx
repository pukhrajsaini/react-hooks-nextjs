export default function UserList({
  props,
}: {
  props: {
    id: number;
    name: string;
    admin: boolean;
    age: number;
  };
}) {
  const { id, name, admin, age } = props;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td>{id}</td>
      <td> {name} </td>
      <td> {age} </td>
      <td> {admin ? "Y" : "N"} </td>
    </tr>
  );
}
