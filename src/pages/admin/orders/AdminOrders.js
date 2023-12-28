import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { RemoveRedEye } from "@mui/icons-material";

const formatter = new Intl.NumberFormat("en-US");

const columns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
    render: (text) => <>{text}</>,
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
    render: (text) => <p className="capitalize">{text}</p>,
  },
  {
    title: "Total Amount",
    dataIndex: "total_amount",
    key: "total_amount",
    render: (text) => <p>TZS {formatter.format(text)}</p>,
  },
  {
    title: "Payment Status",
    key: "payment_status",
    dataIndex: "payment_status",
    render: (_, { payment_status }) => (
      <>
        {payment_status === "failed" ? (
          <Tag color={"red"}>Failed</Tag>
        ) : (
          <>
            {payment_status === "completed" ? (
              <Tag color={"green"}>Completed</Tag>
            ) : (
              <Tag color={"blue"}>Pending</Tag>
            )}
          </>
        )}
      </>
    ),
  },
  {
    title: "Actions",
    key: "action",
    render: (_, order) => (
      <p className="flex flex-row gap-1 justify-start">
        <ViewOrder order={order} />
      </p>
    ),
  },
];

const ViewOrder = ({ order }) => {
  const navigate = useNavigate();

  const handleViewOrder = () => {
    navigate(`/admin/orders/${order?.id}`);
  };

  return (
    <p className="mt-1">
      <IconButton onClick={() => handleViewOrder()}>
        <RemoveRedEye className="text-goldishColor text-xl cursor-pointer" />
      </IconButton>
    </p>
  );
};

const AdminOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getOrders = async () => {
      let ordersArray = [];

      //Fetch orders API
    };

    getOrders();
  }, [dispatch]);

  const orders = [
    {
      id: 1,
      user: "Vicky Longomba",
      total_amount: "500000",
      payment_status: "pending",
    },
    {
      id: 2,
      user: "Sam Manngwana",
      total_amount: "2300000",
      payment_status: "failed",
    },
    {
      id: 3,
      user: "Simaro Lutumba",
      total_amount: "2000000",
      payment_status: "pending",
    },
    {
      id: 4,
      user: "John Doe",
      total_amount: "600000",
      payment_status: "completed",
    },
    {
      id: 5,
      user: "Hisense Smart TV",
      total_amount: "750000",
      payment_status: "completed",
    },
  ];

  return (
    <div className="px-2">
      <div className="pt-8">
        <Table
          columns={columns}
          dataSource={orders}
          size="middle"
          pagination={{ defaultPageSize: 10, size: "middle" }}
        />
      </div>
    </div>
  );
};

export default AdminOrders;
