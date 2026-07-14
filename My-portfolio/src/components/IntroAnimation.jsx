import React ,{useEffect , useMemo} from "react";
export default function IntroAnimation({onFinish}){
  const greeting =  useMemo(()=>[
    "Hello", "नमस्ते", "Hola", "Bonjour",
     "Ciao", "Olá", "Здравствуйте",
      "Merhaba", "Γειά", "Hej", "Hallo", "Salam"
  ] ,[])
  const [index ,setIndex] =React.useState(0);
  const [visible, setVisible]= React.useState(true);
  useEffect (()=>    {
    if (index < greeting. length-1){
      const id =setInteval(()=> setIndex((i) => i+1),180);
      return ()=> clearInterval(id);

    }else{
      const t= setTimeout(() => setVisible(false), 3000);
      return() => clearTimeout(t);
    }

  }, [index, greeting.length])
   return(
    
   )


}