import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referralCode, setReferral] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAgree, setTermsAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const userRegistration = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("Please enter your name");
    } else if (!email) {
      toast.error("Please enter your email");
    } else if (!password) {
      toast.error("Please enter your password");
    } else if (!confirmPassword) {
      toast.error("Please enter your confirm password");
    } else if (!termsAgree) {
      toast.error("Please click to agree terms and conditions");
    } else {
      if (password) {
        if (password.length > 8) {
          // check if password is same as confirm password
          if (password === confirmPassword) {
            setLoading(true);
            //register API
          } else {
            toast.error("Sorry! passwords do not match");
          }
        } else {
          toast.error("Password must have 8 characters");
        }
      }
    }
  };


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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label={"Full Name"}
                  placeholder={"Type your full name"}
                  compulsory={true}
                  type={"text"}
                />
              </div>
              <div>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label={"Email"}
                  placeholder={"Type your email"}
                  compulsory={true}
                  type={"email"}
                />
              </div>
            </div>

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
                  value={referralCode}
                  onChange={(e) => setReferral(e.target.value)}
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
                <span className="text-[#0A365C] transition-all duration-200 ease-in-out hover:text-goldishColor cursor-pointer">
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
