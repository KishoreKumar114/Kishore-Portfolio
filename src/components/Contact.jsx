import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import {
  MdEmail,
  MdPhone
} from "react-icons/md";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const SocialIcons = () => {

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub size={32}/>,
      link: "https://github.com/KishoreKumar114",
      hover: "hover:bg-[#333]"
    },

    {
      name: "LinkedIn",
      icon: <FaLinkedin size={32}/>,
      link: "https://www.linkedin.com/in/kishore-kumar-20ba242b0",
      hover: "hover:bg-[#0077B5]"
    },

    {
      name: "Email",
      icon: <MdEmail size={32}/>,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=kishorekumarr2k4@gmail.com",
      hover: "hover:bg-[#EA4335]"
    },

    {
      name: "Phone",
      icon: <MdPhone size={32}/>,
      link: "tel:+917695999984",
      hover: "hover:bg-green-600"
    }
  ];



  return (

    <div className="flex justify-center gap-6 mt-6">

      {
        socials.map((item,index)=>(

          <motion.a

            key={index}

            href={item.link}

            target={
              item.name !== "Email" &&
              item.name !== "Phone"
              ? "_blank"
              : undefined
            }

            rel="noreferrer"

            whileHover={{
              scale:1.2,
              rotate:5
            }}

            whileTap={{
              scale:0.9
            }}

            className="group relative"

          >

            <div
              className={`
                bg-tertiary
                p-4
                rounded-full
                text-white
                transition-all
                duration-300
                ${item.hover}
              `}
            >

              {item.icon}

            </div>


            <span
              className="
              absolute
              -bottom-8
              left-1/2
              -translate-x-1/2
              text-xs
              text-white
              opacity-0
              group-hover:opacity-100
              transition
              whitespace-nowrap
              "
            >
              {item.name}
            </span>


          </motion.a>

        ))
      }

    </div>

  );

};
const Contact = () => {

  const formRef = useRef();


  const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
  });



  const [loading,setLoading] = useState(false);



  // EmailJS Debug

  useEffect(()=>{

    console.log("🔧 EmailJS Config:",{

      serviceId:
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,

      templateId:
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

      publicKey:
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,

    });

  },[]);




  const handleChange = (e)=>{

    const {name,value}=e.target;


    setForm({

      ...form,

      [name]:value

    });

  };





  const handleEmailJSSubmit = async(e)=>{

    e.preventDefault();



    if(!form.name || !form.email || !form.message){

      alert("Please fill in all fields.");

      return;

    }



    setLoading(true);



    try{


      const result = await emailjs.send(

        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,

        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,


        {

          from_name: form.name,

          from_email: form.email,

          message: form.message,


          to_name:"Kishore Kumar",

          to_email:"kishorekumarr2k4@gmail.com"

        },


        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

      );



      console.log(
        "✅ Email Sent Successfully:",
        result
      );



      alert(
        "Thank you! Your message has been sent successfully."
      );



      setForm({

        name:"",
        email:"",
        message:""

      });



    }

    catch(error){


      console.error(
        "❌ EmailJS Error:",
        error
      );


      alert(
        error.text || "Failed to send message"
      );


    }


    finally{

      setLoading(false);

    }


  };
  return (

<div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">


{/* LEFT SIDE */}

<motion.div

variants={slideIn("left","tween",0.2,1)}

className="flex-[0.75] bg-black-100 p-8 rounded-2xl"

>


{/* SOCIAL SECTION */}

<div className="mb-10">


<h3 className="text-white text-2xl font-bold text-center mb-6">

Connect With Me

</h3>



<SocialIcons />


</div>





<p className={styles.sectionSubText}>

Get in touch

</p>



<h3 className={styles.sectionHeadText}>

Contact.

</h3>






{/* FORM */}


<form

ref={formRef}

onSubmit={handleEmailJSSubmit}

className="mt-12 flex flex-col gap-8"

>


<label className="flex flex-col">


<span className="text-white font-medium mb-4">

Your Name

</span>



<input

type="text"

name="name"

value={form.name}

onChange={handleChange}

placeholder="What's your good name?"

className="
bg-tertiary
py-4
px-6
placeholder:text-secondary
text-white
rounded-lg
outline-none
border-none
font-medium
transition-all
duration-300
hover:scale-105
"

required

/>

</label>





<label className="flex flex-col">


<span className="text-white font-medium mb-4">

Your Email

</span>



<input

type="email"

name="email"

value={form.email}

onChange={handleChange}

placeholder="What's your email?"

className="
bg-tertiary
py-4
px-6
placeholder:text-secondary
text-white
rounded-lg
outline-none
border-none
font-medium
transition-all
duration-300
hover:scale-105
"

required

/>

</label>







<label className="flex flex-col">


<span className="text-white font-medium mb-4">

Your Message

</span>




<textarea

rows={7}

name="message"

value={form.message}

onChange={handleChange}

placeholder="What you want to say?"

className="
bg-tertiary
py-4
px-6
placeholder:text-secondary
text-white
rounded-lg
outline-none
border-none
font-medium
transition-all
duration-300
hover:scale-105
"

required

/>


</label>







<button

type="submit"

disabled={loading}

className="
bg-[#915EFF]
py-3
px-8
rounded-xl
w-fit
text-white
font-bold
shadow-md
shadow-primary
hover:bg-[#7c3aed]
hover:scale-105
transition-all
disabled:opacity-50
"

>


{
loading

?

"Sending..."

:

"Send Message"
}


</button>





<p className="text-secondary text-sm mt-4 text-center">

💡 Your message will be sent directly to my email

</p>



</form>



</motion.div>






{/* RIGHT SIDE - EARTH */}


<motion.div

variants={slideIn("right","tween",0.2,1)}

className="
xl:flex-1
xl:h-[700px]
md:h-[650px]
h-[500px]
flex
items-center
justify-center
"

>


<div className="w-full h-full">

<EarthCanvas />

</div>


</motion.div>





</div>

);

};
export default SectionWrapper(Contact,"contact");