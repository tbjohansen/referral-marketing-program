import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
    } else if (!password) {
      toast.error("Please enter your password");
    } else {

      //navigate to user orders 
      navigate('/orders');
      
      // try {
      //   //Login API

      // } catch (error) {
      //   toast.error(error.message);
      //   setLoading(false);
      // }
    }
  };

  const userLoginTwo = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
    } else if (!password) {
      toast.error("Please enter your password");
    } else {

      //navigate to admin dashboard
      navigate('/admin-dashboard');
      
      // try {
      //   //Login API

      // } catch (error) {
      //   toast.error(error.message);
      //   setLoading(false);
      // }
    }
  };

  const renderButton = () => {
    if (loading) {
      return (
        <>
          <Button
            type={"submit"}
            text={"Sign In"}
            customWidth={true}
            width={"100"}
            opacity={true}
          />
        </>
      );
    } else {
      return (
        <>
          <Button
            type={"submit"}
            text={"Sign In As User (demo)"}
            onClick={(e) => userLogin(e)}
            customWidth={true}
            width={"100"}
          />
        </>
      );
    }
  };

  const renderButtonTwo = () => {
    if (loading) {
      return (
        <>
          <Button
            type={"submit"}
            text={"Sign In"}
            customWidth={true}
            width={"100"}
            opacity={true}
          />
        </>
      );
    } else {
      return (
        <>
          <Button
            type={"submit"}
            text={"Sign In As Admin (demo)"}
            onClick={(e) => userLoginTwo(e)}
            customWidth={true}
            width={"100"}
          />
        </>
      );
    }
  };

  return (
    <div className="bg-thirdColor h-screen relative flex flex-col justify-center">
      <div className="h-[90%] flex items-center justify-center">
      <div className="w-[70%] bg-white rounded-xl h-full grid place-items-center max-md:w-[100%] max-sm:w-[100%]">
        <form className="w-[50%] max-md:w-[90%] max-sm:w-[90%]">
          <h2 className="text-3xl font-semibold text-secondaryColor max-md:text-center max-sm:text-center">
            Sign In Now
          </h2>

          <div className=" mt-5">
            <div>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label={"Email"}
                placeholder={"Type your email"}
                compulsory={true}
                type={"text"}
              />
            </div>
          </div>

          <div className="mt-5">
            <div>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label={"Password"}
                placeholder={"Type your password"}
                compulsory={true}
                type={"password"}
              />
            </div>
          </div>

          <div className="mt-5 mb-3">{renderButton()}</div>

          <div className="mt-5 mb-3">{renderButtonTwo()}</div>

          <h5 className="text-sm mt-5">
            Don&apos;t have an account with us?{" "}
            <span className="text-[#0A365C] font-medium transition-all duration-200 ease-in-out hover:text-goldishColor cursor-pointer max-md:text-xs max-sm:text-xs">
              <Link to={"/sign-up"}>Sign up now</Link>
            </span>
          </h5>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
