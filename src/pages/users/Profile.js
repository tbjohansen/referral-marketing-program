import React, { useEffect, useState } from "react";
import { SyncLock } from "@mui/icons-material";
import { Box, Button, Modal, TextField } from "@mui/material";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { colors } from "../../assets/utils/colors";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  p: 4,
};

const Profile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProfile = async () => {
      try {
       //get profile API

      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, [dispatch]);

  const profile = {};

  const changePassword = async (e) => {
    e.preventDefault();

    if (!newPassword) {
      toast.error("Please enter new password");
    } else if (!confirmPassword) {
      toast.error("Please enter confirm password");
    } else {
      //start change password
      setLoading(true);

      try {
        //change password API
      } catch (error) {
        toast.error(error.message);
        setLoading(false);
      }
    }
  };

  const renderButton = () => {
    if (loading) {
      return (
        <>
          <Button
            size="large"
            variant="contained"
            className="w-[82%] cursor-not-allowed"
            sx={{ background: `${colors.primary}`, border: `1px solid ${colors.bgColor2}`}}
            disabled
          >
            <svg
              className="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
            Loading...
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button
            size="large"
            variant="contained"
            className="w-[82%]"
            sx={{ background: `${colors.primary}`, border: `1px solid ${colors.bgColor2}`,
            "&:hover":  {
              background: `${colors.secondary}`,
              color: `${colors.primary}`,
            },
           }}
            onClick={(e) => changePassword(e)}
          >
            CHANGE PASSWORD
          </Button>
        </>
      );
    }
  };

  return (
    <div className="w-[100%] flex flex-row justify-center px-4 py-8">
      <div className="w-[47%] flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-[#d5d5b3]">
        <div className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"></div>
        <div className="space-y-4 text-center divide-y divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              John Doe
            </h2>
            <p className="px-5 text-xs sm:text-base text-gray-600">
              User
            </p>
            <p className="px-5 text-xs sm:text-base text-gray-600">
              johndoe@gmail.com
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <div
              onClick={handleOpen}
              className="h-10 w-[100%]bg-primaryColor border-[1px] border-goldishColor cursor-pointer rounded-full flex flex-row gap-1 justify-center text-white"
            >
              <SyncLock className="mt-2 py-0.5" />{" "}
              <p className="py-2">Change Password</p>
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="rounded-md">
                <div>
                  <h3 className="text-center text-xl py-4">Change Password</h3>
                  <div>
                    <div className="w-full py-2 flex justify-center">
                      <TextField
                        size="small"
                        id="outlined-basic"
                        label="New Password"
                        variant="outlined"
                        className="w-[82%]"
                        type={"password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="w-full py-2 flex flex-row gap-2 justify-center">
                      <TextField
                        id="outlined-basic"
                        label="Confirm Password"
                        size="small"
                        variant="outlined"
                        type={"password"}
                        className="w-[82%]"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div className="w-full py-2 pt-3 flex justify-center">
                      {renderButton()}
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
