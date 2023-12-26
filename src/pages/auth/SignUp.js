import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAgree, setTermsAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const userRegistration = async (e) => {
    e.preventDefault();

    if (!firstName) {
    } else if (!lastName) {
    } else if (!phoneNumber) {
    } else if (!password) {
    } else if (!confirmPassword) {
    } else if (!termsAgree) {
    } else {
      if (password) {
        if (password.length > 8) {
          // check if password is same as confirm password
          if (password === confirmPassword) {
            setLoading(true);
          } else {
          }
        } else {
        }
      }
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
            text={"Create account"}
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
            text={"Create account"}
            onClick={(e) => userRegistration(e)}
            customWidth={true}
            width={"100"}
          />
        </>
      );
    }
  };

  return (
    <div className="h-[100vh] bg-thirdColor flex flex-col justify-center">
      <div className="h-[90%] flex items-center justify-center">
        <div className="w-[80%] bg-white rounded-xl h-full grid place-items-center max-md:w-[100%] max-sm:w-[100%]">
          <form className="w-[60%] max-md:w-[90%] max-sm:w-[90%] py-2">
            <h2 className="text-3xl font-semibold text-secondaryColor max-md:text-center max-sm:text-center">
              SIGN UP NOW
            </h2>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <div>
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  label={"Full Name"}
                  placeholder={"Type your full name"}
                  compulsory={true}
                  type={"text"}
                />
              </div>
              <div>
                <Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  label={"Email"}
                  placeholder={"Type your email"}
                  compulsory={true}
                  type={"email"}
                />
              </div>
            </div>

            {/* <div className="mt-5">
              <div>
                <Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  label={"Email"}
                  placeholder={"Type your email"}
                  compulsory={true}
                  type={"email"}
                />
              </div>
            </div> */}

            <div className="grid grid-cols-2 gap-3 mt-5">
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
              <div>
                <Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  label={"Confirm Password"}
                  placeholder={"Confirm your password"}
                  compulsory={true}
                  type={"password"}
                />
              </div>
            </div>

            <div className="mt-5">
              <div>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label={"Referral Code"}
                  placeholder={"Type your referral code"}
                  type={"text"}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-row items-center">
              <Input
                value={true}
                onChange={(e) => setTermsAgree(e.target.value)}
                type={"radio"}
                id={"true"}
                name={"terms"}
                radio={true}
              />
              <h5 className="text-sm ml-2 max-md:text-xs max-sm:text-xs">
                I Agree to the{" "}
                <span className="text-[#0A365C] transition-all duration-200 ease-in-out hover:text-thirdColor cursor-pointer">
                  <Link href={"#"}>Terms and Conditions</Link>
                </span>
              </h5>
            </div>

            <div className="mt-5 mb-3">{renderButton()}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
