import React from "react";
import axios from "axios";
import { useState } from "react";
import Router from "next/router";
import Header from './components/Header';
import Footer from './components/Footer';
import Smooth from "./components/Smooth";
import { motion } from "framer-motion";
function create() {
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [body, setbody] = useState("");

  const key=process.env.NEXT_PUBLIC_API_KEY;

  var data = {
    name: "Static Email QR Code",
    organization: 281341,
    qr_type: 1,
    fields_data: {
      qr_type: 4,
      email: `${email}`,
      subject: `${subject}`,
      body: `${body}`,
    },
    attributes: {
      color: "#2595ff",
      colorDark: "#2595ff",
      margin: 80,
      isVCard: false,
      frameText: "BEACONSTAC",
      logoImage:
        "https://d1bqobzsowu5wu.cloudfront.net/15406/36caec11f02d460aad0604fa26799c50",
      logoScale: 0.1992,
      frameColor: "#2595FF",
      frameStyle: "banner-bottom",
      logoMargin: 10,
      dataPattern: "square",
      eyeBallShape: "circle",
      gradientType: "none",
      eyeFrameColor: "#2595FF",
      eyeFrameShape: "rounded",
    },
  };

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.beaconstac.com/api/2.0/qrcodes/",
    headers: {
      Authorization: `${key}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  async function send() {
    console.log("i am sending a post request to axios");
    const response = await axios(config);
    console.log("i have received  the response from server");
    console.log(response.data);
    console.log("i am configuring the the config2");
    const val = response.data.id;
    console.log(val);

    const theurl =
      "https://api.beaconstac.com/api/2.0/qrcodes/" +
      response.data.id +
      "/download/?size=1024&error_correction_level=5&canvas_type=pdf";
    console.log(theurl);
  
    var config2 = {
      method: "get",
      maxBodyLength: Infinity,
      url: theurl,
      headers: {
        Authorization: `${key}`,
      },
    };

    console.log("now i am sending the config2 using a get request");
    const response2 = await axios(config2);
    console.log("i have received  the response from server of config2");
    console.log(response2.data);
    console.log("i am now redirecting towards the pdf");

    Router.push(response2.data.urls.pdf);
  }



  return (
    <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}}>
    <div>
      <Smooth />
      < Header />
    <section className="text-gray-400 bg-gray-900 body-font relative bg-[url(/assets/hero-bg.png)]">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3  md:w-1/2 md:items-center bg-gray-900  sm:mr-1 p-10 flex items-end justify-start relative">
          <img src="/assets/img.svg" className="object-fill "></img>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Create your petition
          </h2>
          <p className="leading-relaxed mb-5">Fill in the details</p>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              value={email}
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-400">
              Subject
            </label>
            <input
              type="text"
              id="name"
              value={subject}
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setsubject(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={body}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setbody(e.target.value)}
            ></textarea>
          </div>
          <motion.button
            className="text-black bg-green-400 border-0 py-2 px-6  rounded text-lg "
            onClick={send}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            create a petition
          </motion.button>
          <p className="text-xs text-gray-400 text-opacity-90 mt-3">
            click on button to genrate your qr code.
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </div>
    </motion.div>
  );
}

export default create;
