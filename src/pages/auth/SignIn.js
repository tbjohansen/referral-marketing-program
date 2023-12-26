import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userRegistration = async (e) => {
    e.preventDefault();

    if (!phoneNumber) {
    } else if (!password) {
    } else {
      
    }
  };

  // const checkResponse = (response) => {
  //   if (response.ok) {
  //     if (response.data.success === true) {
  //       setLoading(false);
  //       notifyToastSuccess({
  //         message: "You're successfully registered",
  //         icon: "✅",
  //       });

  //       router.push("/sign-in");
  //     } else {
  //       setLoading(false);
  //       notifyToastError({
  //         message: "Something went wrong, Please try again!",
  //         icon: "❗",
  //       });
  //     }
  //     setLoading(false);
  //   } else {
  //     if (response.status > 210) {
  //       setLoading(false);
  //       notifyToastError({
  //         message: response.data.message,
  //         icon: "❗",
  //       });
  //     }
  //   }
  //   setLoading(false);
  // };

  const renderButton = () => {
    if (loading) {
      return (
        <>
          <Button
            type={"submit"}
            text={"Sign In"}
            // onClick={(e) => userRegistration(e)}
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
            text={"Sign In"}
            // onClick={(e) => userRegistration(e)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label={"Phone number"}
                placeholder={"Type your phone number"}
                compulsory={true}
                type={"number"}
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

          <h5 className="text-sm mt-5">
            Don&apos;t have an account with us?{" "}
            <span className="text-[#0A365C] font-medium transition-all duration-200 ease-in-out hover:text-thirdColor cursor-pointer max-md:text-xs max-sm:text-xs">
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
