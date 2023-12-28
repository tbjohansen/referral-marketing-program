import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { RemoveRedEye } from "@mui/icons-material";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const formatter = new Intl.NumberFormat("en-US");

const columns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
    render: (text) => <>{text}</>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <p className="capitalize">{text}</p>,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => <p>TZS {formatter.format(text)}</p>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (text) => <p className="text-ellipsis overflow-hidden">{text}</p>,
  },
  {
    title: "Actions",
    key: "action",
    render: (_, product) => (
      <p className="flex flex-row gap-1 justify-start">
        <EditProduct product={product} />
        <ViewProduct product={product} />
      </p>
    ),
  },
];

const ViewProduct = ({ product }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/admin/products/${product?.id}`);
  };

  return (
    <p className="mt-1">
      <IconButton onClick={() => handleViewProduct()}>
        <RemoveRedEye className="text-goldishColor text-xl cursor-pointer" />
      </IconButton>
    </p>
  );
};


const AdminProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      let productsArray = [];

      //Fetch products API
    };

    getProducts();
  }, [dispatch]);

  const products = [
    {
      id: 1,
      name: "HP Folio 9470m Elitebook",
      price: "500000",
      description: "Laptop Computer, AMD Ryzen 5-5500U Processor(Beats Intel i7-1065G7), AMDRadeon Graphics",
    },
    {
      id: 2,
      name: "HP 2022 15.6 FHD Laptop Computer",
      price: "2300000",
      description: "HP 2022 15.6 FHD Laptop Computer, AMD Ryzen 5-5500U Processor(Beats Intel i7-1065G7)",
    },
    { id: 3, name: "Dell XPS", price: "2000000", description: "Processor(Beats Intel i7-1065G7), 12GB RAM, 512GB PCIe SSD" },
    {
      id: 4,
      name: "Boss Refridgerator BS-202SVR",
      price: "600000",
      description: "Boss Refrigerator BS-202SVR. Overall dimension(mm) (width depth height):523*543 ",
    },
    {
      id: 5,
      name: "Hisense Smart TV",
      price: "750000",
      description: "The Hisense 43 Smart HD TV | 43A4G is a high-quality, 43-inch smart television",
    },
  ]


  return (
    <div className="px-2">
      <div className="flex flex-row justify-end">
        <AddProduct />
      </div>
      <div className="pt-8">
        <Table
          columns={columns}
          dataSource={products}
          size="middle"
          pagination={{ defaultPageSize: 10, size: "middle" }}
        />
      </div>
    </div>
  );
};

export default AdminProducts;
