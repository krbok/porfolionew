import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const EmailRedirectButton = () => {
  const [emailOpened, setEmailOpened] = useState(false);
  const email = "kkritik_be22@thapr.edu";
  
  const openEmailClient = () => {
    // Create mailto link
    const mailtoLink = `mailto:${email}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show feedback
    setEmailOpened(true);
    setTimeout(() => {
      setEmailOpened(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={openEmailClient}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {emailOpened ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="opened"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="assets/email-sent.svg" className="w-5" alt="email opened icon" />
            Email Client Opened
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="email"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            
            Send Email
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default EmailRedirectButton;