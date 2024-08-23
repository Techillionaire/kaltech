import React, {useState} from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Footer } from "@/components/common/Footers/Footer";
import { Navbar } from "@/components/common/Navbar";
import Head from "next/head";

const contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  // Function to send email
  const sendEmail = (e:any) => {
    e.preventDefault()
    setSuccess("");
    setIsLoading(true);
  
    // Perform input validation (as shown in your previous code)
  
    if (!name) {
      setError("Please enter your name!");
      setIsLoading(false);
      return;
    }
  
    if (!email) {
      setError("Please enter your email address!");
      setIsLoading(false);
      return;
    }
  
    if (!phone) {
      setError("Please enter your phone number!");
      setIsLoading(false);
      return;
    }
  
    if (!subject) {
      setError("Please enter your subject!");
      setIsLoading(false);
      return;
    }
  
    if (!message) {
      setError("Please enter your message!");
      setIsLoading(false);
      return;
    }
  
    const templateParams = {
      from_name: name,
      email_id: email,
      phone: phone,
      subject: subject,
      message: message,
    };
  
    emailjs.send(
      "service_8ecwjgv", // Replace with your actual service ID
      "template_tozscrh", // Replace with your actual template ID
      templateParams,
      "1BxZpTTGfCmtTXvFy" // Replace with your actual public key
    ).then(() => {
        // Reset the form fields on success
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        setIsLoading(false);
        setSuccess("Your message has been sent successfully. We will get back to you shortly.");
      })
      .catch((error) => {
        setError("Some error occurred");
        console.log(error);
        setIsLoading(false);
      });
  };
  




  return (
    <>
       <Head>        
        <link rel="icon" href="/KaltechFavIcon.png" />
        <title>Kaltech Consultancy - Contact</title>
      </Head>
      <Navbar />
      <div className="h-screen justify-center items-center hidden md:hidden 2xl:flex xl:flex lg:landscape:flex lg:portrait:hidden">
        <div className="w-[90%] h-full border-2 border-[#D9D9D9] border-t-0 border-b-0 flex justify-center items-center">
          <div className="w-[90%]">
            <div className="flex justify-between items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "circInOut", delay: 0.2 }}
                  className="AzonixFont font-[Azonix,Oxanium] text-9xl lg:landscape:text-7xl uppercase font-[400]"
                >
                  Let&apos;s get in touch
                </motion.h1>
              </div>
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "circInOut", delay: 0.4 }}
                  className="font-[Oxanium] text-lg font-[400]"
                >
                  Great! We&apos;re excited to hear from you and your project.
                </motion.p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "circInOut", delay: 0.6 }}
                className="w-[25%]"
              >
                <h4 className="font-[Oxanium] text-2xl lg:landscape:text-lg font-[400]">
                  or just
                </h4>
                <h4 className="font-[Oxanium] text-2xl lg:landscape:text-lg font-[400]">
                  say hello!
                </h4>
                <div className="flex flex-col justify-start items-start gap-4 mt-[20%] w-[65%]">
                  <Link
                    className="font-[Oxanium] text-lg lg:landscape:text-base font-[700] underline underline-offset-4"
                    href="tel:+1(931)-266-6101"
                  >
                    +1(931)-266-6101
                  </Link>
                  <Link
                    className="font-[Oxanium] text-lg lg:landscape:text-base font-[700] underline underline-offset-4"
                    href="mailto:info@kaltechdesigns.com"
                  >
                    info@kaltechdesigns.com
                  </Link>
                  <Link
                    className="font-[Oxanium] text-lg lg:landscape:text-base font-[700]"
                    href="/"
                  >
                    103 Stoneledge Ct, Elizabethtown, KY 42701, Kentucky, USA.
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "circInOut", delay: 1 }}
                className=" w-[60%] flex flex-col justify-center items-center gap-5"
              >
                <form onSubmit={sendEmail}>
                <div className="flex justify-between items-center gap-10 w-full">
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Name *"
                      onChange={(e)=> setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Email *"
                      onChange={(e)=> setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center gap-10 w-full">
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Phone"
                      onChange={(e)=> setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Subject *"
                      onChange={(e)=> setSubject(e.target.value)}
                      value={subject}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center gap-10 w-full">
                  <div className="w-full">
                    <textarea
                      className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
                      placeholder="Message *"
                      onChange={(e)=> setMessage(e.target.value)}
                      value={message}
                    ></textarea>
                  </div>
                </div>

                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0.2, 0.6, 1] }}
                  transition={{
                    duration: 0.6,
                    ease: "backInOut",
                    delay: 0.4,
                    times: [0.2, 0.6, 1],
                  }}
                  className="text-[#2C2C2C] flex justify-center items-center gap-2 font-[Oxanium] font-[400] text-base w-32 h-32 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 self-start p-3"
                >
                  {isLoading? "Loading...": success ? "Sent" : "Send Message"}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="12"
                      viewBox="0 0 14 13"
                      fill="none"
                      className="transition-colors duration-200 ease-in-out delay-100"
                    >
                      <path
                        d="M3.20485 0V1.25596H11.1597L0.67749 11.6742L1.56838 12.5596L12.0506 2.14142V10.0477H13.3143V0H3.20485Z"
                        // fill="#2C2C2C"
                      />
                    </svg>
                  </span>
                </motion.button>
                </form>
                
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* <ContactTab />
      <ContactMob /> */}
      <Footer />
    </>
  );
};

export default contact;

// const ContactTab = () => {
//   return (
//     <>
//       <div className="h-screen hidden md:flex justify-center items-center overflow-hidden 2xl:hidden xl:hidden lg:landscape:hidden">
//         <div className="w-[90%] h-full flex flex-col justify-center items-center ">
//           <div>
//             <motion.h1
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, ease: "circInOut", delay: 0.2 }}
//               className="AzonixFont font-[Azonix,Oxanium] text-8xl lg:text-9xl uppercase font-[400]"
//             >
//               Let&apos;s get in touch
//             </motion.h1>
//           </div>
//           <div className="ml-auto my-4 w-[50%]">
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, ease: "circInOut", delay: 0.4 }}
//               className="font-[Oxanium] text-xl font-[400]"
//             >
//               Great! We&apos;re excited to hear from you and your project.
//             </motion.p>
//           </div>

//           <div className="flex justify-between items-center w-full my-4">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, ease: "circInOut", delay: 1 }}
//               className=" w-full flex flex-col justify-center items-center gap-5"
//             >
//               <form action="" onSubmit={sendEmail}>
//               <div className="flex justify-between items-center gap-10 w-full">
//                 <div className="w-[50%]">
                
//                   <input
//                     type="text"
//                     className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
//                     placeholder="Name *"
//                     onChange={(e)=> setName(e.target.value)}
//                     value={name}
//                   />
//                 </div>
//                 <div className="w-[50%]">
               
//                   <input
//                     type="text"
//                     className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
//                     placeholder="Email *"
//                     onChange={(e)=> setEmail(e.target.value)}
//                     value={email}
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-between items-center gap-10 w-full">
//                 <div className="w-[50%]">
                
//                   <input
//                     type="text"
//                     className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
//                     placeholder="Phone"
//                     onChange={(e)=> setPhone(e.target.value)}
//                     value={phone}
//                   />
//                 </div>
//                 <div className="w-[50%]">
                
//                   <input
//                     type="text"
//                     className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
//                     placeholder="Subject *"
//                     onChange={(e)=> setSubject(e.target.value)}
//                       value={subject}
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-between items-center gap-10 w-full">
//                 <div className="w-full">
                
//                   <textarea
//                     className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
//                     placeholder="Message *"
//                     onChange={(e)=> setMessage(e.target.value)}
//                       value={message}
//                   ></textarea>
//                 </div>
//               </div>

//               <motion.button
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: [0.2, 0.6, 1] }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "backInOut",
//                   delay: 0.4,
//                   times: [0.2, 0.6, 1],
//                 }}
//                 className="text-[#2C2C2C] flex justify-center items-center gap-2 font-[Oxanium] font-[400] text-base w-32 h-32 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 self-center p-3"
//               >
//                 Send Message
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="13"
//                     height="12"
//                     viewBox="0 0 14 13"
//                     fill="none"
//                     className="transition-colors duration-200 ease-in-out delay-100"
//                   >
//                     <path
//                       d="M3.20485 0V1.25596H11.1597L0.67749 11.6742L1.56838 12.5596L12.0506 2.14142V10.0477H13.3143V0H3.20485Z"
//                       // fill="#2C2C2C"
//                     />
//                   </svg>
//                 </span>
//               </motion.button>
//               </form>
              
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, ease: "circInOut", delay: 0.6 }}
//             className="w-full flex justify-between items-start my-4"
//           >
//             <div>
//               <h4 className="font-[Oxanium] text-2xl font-[400]">or just</h4>
//               <h4 className="font-[Oxanium] text-2xl font-[400]">say hello!</h4>
//             </div>
//             <div className="flex flex-col justify-start items-start gap-4 w-[55%]">
//               <Link
//                 className="font-[Oxanium] text-lg font-[700] underline underline-offset-4"
//                 href="tel:+1(931)-266-6101"
//               >
//                 +1(931)-266-6101
//               </Link>
//               <Link
//                 className="font-[Oxanium] text-lg font-[700] underline underline-offset-4"
//                 href="mailto:info@kaltechdesigns.com"
//               >
//                 info@kaltechdesigns.com
//               </Link>
//               <Link className="font-[Oxanium] text-lg font-[700]" href="/">
//                 103 Stoneledge Ct, Elizabethtown, KY 42701, Kentucky, USA.
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// const ContactMob = () => {
//   return (
//     <>
//       <div className="flex justify-center items-center py-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
//         <div className="w-[90%]">
//           <div className="w-[90%]">
//             <motion.h1
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, ease: "circInOut", delay: 0.2 }}
//               className="AzonixFont font-[Azonix,Oxanium] text-6xl uppercase font-[400]"
//             >
//               Let&apos;s get in touch
//             </motion.h1>
//           </div>
//           <div className="w-[80%] my-3">
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, ease: "circInOut", delay: 0.4 }}
//               className="font-[Oxanium] text-lg font-[500]"
//             >
//               Great! We&apos;re excited to hear from you and your project.
//             </motion.p>
//           </div>

//           <div className="flex flex-col justify-center items-center gap-5 my-5">
//             <div className="w-full">
//               <input
//                 className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
//                 placeholder="Name *"
//                 type="text"
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//               />
//             </div>
//             <div className="w-full">
//               <input
//                 className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
//                 placeholder="Email *"
//                 type="text"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="w-full">
//               <input
//                 className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
//                 placeholder="Phone *"
//                 type="text"
//               />
//             </div>
//             <div className="w-full">
//               <input
//                 className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
//                 placeholder="Subject *"
//                 type="text"
//                 value={subject}
//                 onChange={e => setSubject(e.target.value)}
//               />
//             </div>
//             <div className="w-full">
//               <textarea
//                 className="w-full font-[Oxanium] font-[400] text-lg placeholder:text-[#121212] py-2 px-3 outline-none border-b-2 border-[#C2C2C2] bg-transparent"
//                 placeholder="Message *"
//                 value={message}
//                 onChange={e => setMessage(e.target.value)}
//               ></textarea>
//             </div>

//             <motion.button
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: [0.2, 0.6, 1] }}
//               transition={{
//                 duration: 0.6,
//                 ease: "backInOut",
//                 delay: 0.4,
//                 times: [0.2, 0.6, 1],
//               }}
//               className="text-[#2C2C2C] flex justify-center items-center gap-2 font-[Oxanium] font-[400] text-sm w-28 h-28 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 self-center p-3"
//             >
//               Send Message
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="13"
//                   height="12"
//                   viewBox="0 0 14 13"
//                   fill="none"
//                   className="transition-colors duration-200 ease-in-out delay-100"
//                 >
//                   <path
//                     d="M3.20485 0V1.25596H11.1597L0.67749 11.6742L1.56838 12.5596L12.0506 2.14142V10.0477H13.3143V0H3.20485Z"
//                     // fill="#2C2C2C"
//                   />
//                 </svg>
//               </span>
//             </motion.button>
//           </div>



//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, ease: "circInOut", delay: 0.6 }}
//             className="w-full flex flex-col justify-center items-center gap-8 my-10"
//           >
//             <div className="flex justify-center items-center gap-1.5">
//               <h4 className="font-[Oxanium] text-2xl font-[400]">or just</h4>
//               <h4 className="font-[Oxanium] text-2xl font-[400]">say hello!</h4>
//             </div>
//             <div className="flex flex-col justify-center items-center gap-2 w-full">
//               <Link
//                 className="font-[Oxanium] text-lg font-[700] underline underline-offset-4"
//                 href="tel:+1(931)-266-6101"
//               >
//                 +1(931)-266-6101
//               </Link>
//               <Link
//                 className="font-[Oxanium] text-lg font-[700] underline underline-offset-4"
//                 href="mailto:info@kaltechdesigns.com"
//               >
//                 info@kaltechdesigns.com
//               </Link>
//               <Link className="font-[Oxanium] text-lg font-[700] text-center" href="/">
//                 103 Stoneledge Ct, Elizabethtown, KY 42701, Kentucky, USA.
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };


