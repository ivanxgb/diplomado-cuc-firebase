import React, { useEffect, useState } from "react";
import { Form } from "../form/Form";
import { addFirebaseData, getFirebaseData } from "../../firebase/firebaseData";
import { Table } from "../table/Table";

export function Container() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getFirebaseData().then((data) => setUsers(data));
  }, []);

  const handleAddUser = (user) => {
    addFirebaseData(user).then((id) => {
      setUsers([...users, { id, ...user }]);
    });
  };

  return (
    <>
      <h1 className="text-center">Diplomado CUC Taller 3 - Ivan Gonzalez</h1>
      <Form addUser={handleAddUser} />
      <Table users={users} />
    </>
  );
}
