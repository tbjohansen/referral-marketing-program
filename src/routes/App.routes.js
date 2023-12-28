import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout";
import Layout from "../components/Layout";
import AdminCustomers from "../pages/admin/customers/AdminCustomers";
import Dashboard from "../pages/admin/Dashboard";
import AdminOrders from "../pages/admin/orders/AdminOrders";
import AdminProducts from "../pages/admin/products/AdminProducts";
import AdminProfile from "../pages/admin/profile/AdminProfile";
import AdminRefferrals from "../pages/admin/referrals/AdminRefferrals";
import AdminSettings from "../pages/admin/settings/AdminSettings";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/Home";
import Orders from "../pages/orders/Orders";
import ProductOverview from "../pages/products/ProductOverview";

// ?############## GUEST ELEMENTS ###########
const LoginElement = () => <SignIn />;
const RegisterElement = () => <SignUp />;
const HomeElement = () => (
  <Layout>
    <Home />
  </Layout>
);

const ProductElement = () => (
  <Layout>
    <ProductOverview />
  </Layout>
);

// ?############## PROTECTED ELEMENTS ###########
const OrdersElement = () => (
  <Layout>
    <Orders />
  </Layout>
);

const ProfileElement = () => (
  <Layout>
    <Orders />
  </Layout>
);



// ?############## ADMIN ELEMENTS ###########
const AdminHomeElement = () => (
  <AdminLayout>
    <Dashboard />
  </AdminLayout>
);

const AdminProductsElement = () => (
  <AdminLayout>
    <AdminProducts />
  </AdminLayout>
);

const AdminOrdersElement = () => (
  <AdminLayout>
    <AdminOrders />
  </AdminLayout>
);

const AdminProfileElement = () => (
  <AdminLayout>
    <AdminProfile />
  </AdminLayout>
);

const AdminReferralElement = () => (
  <AdminLayout>
    <AdminRefferrals />
  </AdminLayout>
);

const AdminSettingElement = () => (
  <AdminLayout>
    <AdminSettings />
  </AdminLayout>
);

const AdminUsersElement = () => (
  <AdminLayout>
    <AdminCustomers />
  </AdminLayout>
);

// !############## MAIN FUNC ###########
const App = () => {
  return (
    <React.Fragment>
      <Routes>
        {/* ################## GUEST ROUTES ################## */}
        <Route>
          <Route path="/" element={<HomeElement />} />
          <Route path="/sign-in" element={<LoginElement />} />
          <Route path="/sign-up" element={<RegisterElement />} />
          <Route path="/products/:productId" element={<ProductElement />} />
        </Route>

        {/* ################## PROTECTED ROUTES ################## */}
        <Route>
          <Route path="/orders" element={<OrdersElement />} />
          <Route path="/profile" element={<ProfileElement />} />
        </Route>

        {/* ################## ADMIN ROUTES ################## */}
        <Route>
          <Route path="/admin-dashboard" element={<AdminHomeElement />} />
          <Route path="/admin/products" element={<AdminProductsElement />} />
          <Route path="/admin/users" element={<AdminUsersElement />} />
          <Route path="/admin/orders" element={<AdminOrdersElement />} />
          <Route path="/admin/referrals" element={<AdminReferralElement />} />
          <Route path="/admin/settings" element={<AdminSettingElement />} />
          <Route path="/admin/profile" element={<AdminProfileElement />} />

          <Route
            path="/admin/products/:productId"
            element={<AdminProductsElement />}
          />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
