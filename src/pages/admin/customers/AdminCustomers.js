import React, { useEffect } from "react";
import { useDispatch, } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";
import { IconButton } from "@mui/material";
import { RemoveRedEye } from "@mui/icons-material";

const columns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Full Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Actions",
    key: "action",
    render: (_, user) => (
      <p className="flex flex-row gap-1 justify-start">
       <ViewCustomer user={user} />
      </p>
    ),
  },
];

const ViewCustomer = ({ user }) => {
    const navigate = useNavigate();
  
    const handleViewCustomer = () => {
      navigate(`/admin/customers/${user?.id}`);
    };
  
    return (
      <p className="mt-1">
        <IconButton onClick={() => handleViewCustomer()}>
          <RemoveRedEye className="text-goldishColor text-xl cursor-pointer" />
        </IconButton>
      </p>
    );
  };

const AdminCustomers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      let usersArray = [];
    };

    getUsers();
  }, [dispatch]);

  const users = [
    {
      id: 1,
      name: "Luambo Makiadi",
      role: "user",
      email: "luambomakiadi@mail.com",
    },
    {
      id: 2,
      name: "Simaro Lutumba",
      role: "user",
      email: "lutumbasimaro@mail.com",
    },
    { id: 3, name: "Sam Mangwana", role: "user", email: "samangwana@mail.com" },
    {
      id: 4,
      name: "Josky Kiambukuta",
      role: "user",
      email: "kiambukutaj@mail.com",
    },
    {
      id: 5,
      name: "Vicky Longomba",
      role: "user",
      email: "longombavicky@mail.com",
    },
  ];

  return (
    <div className="px-2">
      <div className="pt-8">
        <Table
          columns={columns}
          dataSource={users}
          size="middle"
          pagination={{ defaultPageSize: 10, size: "middle" }}
        />
      </div>
    </div>
  );
};

export default AdminCustomers;
