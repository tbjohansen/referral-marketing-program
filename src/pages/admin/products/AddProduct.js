import React, { useState } from "react";
import Box from "@mui/material/Box";
import Add from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { colors } from "../../../assets/utils/colors";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    let assetsArray = [];

   //fetch products API
  };

  const productRegistration = async (e) => {
    e.preventDefault();

    if (!name) {
    toast.error("Please add product name");
    } else if (!price) {
      toast.error("Please add product price");
    } else if (!description) {
      toast.error("Please add product description");
    } else {
      //start 
      setLoading(true);
      try {
        // Add product API
        
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
            className="w-[100%] cursor-not-allowed"
            sx={{ background: `${colors.primary}`, border: `1px solid ${colors.bgColor2}` }}
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
            className="w-[100%]"
            sx={{ background: `${colors.primary}`, border: `1px solid ${colors.bgColor2}`,
            "&:hover":  {
              background: `${colors.secondary}`,
              color: `${colors.primary}`,
            },
           }}
            onClick={(e) => productRegistration(e)}
          >
            SAVE PRODUCT
          </Button>
        </>
      );
    }
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        className="h-10 w-44 bg-primaryColor border-[1px] border-goldishColor cursor-pointer rounded-xl flex flex-row gap-1 justify-center text-white"
      >
        <Add className="mt-2 py-0.5" /> <p className="py-2">Add Product</p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-md">
          <div>
            <h3 className="text-center text-xl py-4">Add Product Details</h3>
            <div>
              <div className="w-full py-2justify-center">
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  className="w-[100%]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full py-2 flex justify-center">
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  className="w-[100%]"
                  value={price}
                  type={"number"}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="w-full py-2 flex justify-center">
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={2}
                  variant="outlined"
                  className="w-[100%]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
  );
};

export default AddProduct;
