import { useEffect, useState } from "react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import IconButton from "./IconButton";
import { IoMdClose } from "react-icons/io";

const Modal = ({ children, noRoute, modalOpen, onCloseModal }) => {


  useEffect(() => {
    setModalOpen(modalOpen);
  }, [modalOpen]);

  const [open, setModalOpen] = useState(false);

  return (
    <>
      {open ? (
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3, ease: easeOut },
            }}
            className={`${
              noRoute ? `z-50` : ``
            } bg-greenishColor/80 fixed h-screen w-screen top-0 left-0 grid place-items-center backdrop-blur-sm overflow-hidden`}
          >
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                scale: 0,
              }}
              className="w-[50%] h-[70%] bg-screenBgColor p-4 overflow-y-auto max-sm:w-[90%] max-md:w-[90%] max-sm:h-[55%] max-md:h-[55%]"
            >
              <motion.div
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.3,
                  },
                }}
                exit={{
                  x: -100,
                  opacity: 0,
                }}
                className="w-full h-[10%] flex flex-row items-center justify-end"
              >
                <IconButton
                  btnStyle={"w-9 h-9"}
                  icon={<IoMdClose className="h-4 w-4 text-screenBgColor" />}
                  onButtonClick={noRoute ? onCloseModal : () => router.back()}
                />
              </motion.div>

              <div className="min-h-[90%]">{children}</div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </>
  );
};

export default Modal;