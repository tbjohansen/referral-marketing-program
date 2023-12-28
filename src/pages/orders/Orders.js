import React, { useState } from "react";
import OrderCard from "../../components/common/OrderCard";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { colors } from "../../assets/utils/colors";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Orders = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderPendingOrders = () => {
    return (
      <div className="grid grid-cols-2 gap-4 justify-center">
        <OrderCard />
        <OrderCard />
      </div>
    );
  };

  const renderCompleteOrders = () => {};

  return (
    <div className="w-[100%]">
      <h4 className="font-medium text-lg py-0.5">Orders</h4>
      <div className="w-[100%] flex flex-row justify-center items-center">
        <div className="w-[100%] h-screen">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: `${colors.bgColor1}` }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Pending Orders" {...a11yProps(0)} />
                <Tab label="Completed Orders" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
            <div className="my-4">{renderPendingOrders()}</div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            <div className="text-center font-medium text-xl">There are no completed orders</div>
            </CustomTabPanel>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Orders;
