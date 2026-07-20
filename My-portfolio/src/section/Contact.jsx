import { useEffect, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground"
import emailjs from "@emailjs/browser";



const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_ID = import.meta.env.VITE_PUBLIC_KEY;
export default function Contact(){
    const [formdata , setformData]= useState({
        name : "",
        email :"",
        service:"",
        budget:"",
        idea :"",
    });
    
    const [errors, setErrors]= useEffect({});
    const [status, setStatus]= useEffect("");

    const handleChange =(e)=>{
        const { name , value} = e.target;
        if(name === "budget" && !/^\d+$/.test(value)) return;
        setFormData((p)=> ({...p, [name]: value}));
        if(error[name]) setErrors((p)=>({...p , [name] :""}));
    }
const validateform =()=> {
    const required = ["name", "email", "service","idea"];
    const newErrors ={};
    required.foreach ((f) => !formData[f].trim() && (newErrors[f] = "fill this field"));
    if (formData.service !== "other" && !formData.budget.trim())
        newErrors.budget ="fill this field";
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
}
const handleSubmit = async(e) =>{
    e.preventDefoult();
    if (!validateForm()) return;
    setStatus("sending");
}
try{
    await emailjs.send(
        SEVICE_ID,
        TEMPLATE_ID,
        {
            ...formData,
            from_name:formData.name,
            reply_to: formData.email,
        },
        PUBLIC_KEY
    );
    setStatus("success");
    setFormData({
        name:"",
        email:"",
        service:"",
        budget:"",
        idea:"",
    });
} catch (err){
    console.error("EmailJS Error:", err);
    setStatus("error");

}
    
}

    return(
        <section id="contact" className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col
        md:flex-row items-center gap-10
        ">
<ParticlesBackground/>
        </section>
    )
}
