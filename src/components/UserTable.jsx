import  { useState } from "react";
import { Table, Input } from "antd";

const fakeUsers = [
  { key: "1", name: "Andriy", email: "andrii@mail.com" },
  { key: "2", name: "Olena", email: "olena@mail.com" },
  { key: "3", name: "Petri", email: "petro@mail.com"  },
];

const UserTable = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = fakeUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { title: "Ім’я", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    
  ];

  return (
    <>
      <Input.Search
        placeholder="Search for name or email"
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 16, width: 300 }}
      />
      <Table
        dataSource={filteredUsers}
        columns={columns}
       
        
      />
    </>
  );
};

export default UserTable;