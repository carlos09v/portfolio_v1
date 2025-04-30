'use client'
import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineMail } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import emailjs from '@emailjs/browser';

interface FormProps {
  textarea_placeholder: string
  name_placeholder: string
  email_placeholder: string
  button: string
}

export const Form = ({ email_placeholder, name_placeholder, textarea_placeholder, button }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [disable, setDisable] = useState(false)


  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setDisable(true)
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );

      toast.success('Mensagem enviada com sucesso!');
      formRef.current.reset(); // limpa o form
    } catch (error) {
      console.error(error);
      toast.error('Erro ao enviar a mensagem.');
    } finally {
      setDisable(false)
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="flex gap-4 mt-2">
      <div className="flex gap-4 items-center rounded-lg w-[50%] p-2 bg-purple-900/60 dark:bg-orange-900/60">
        <FiMessageCircle className="text-3xl" />
        <textarea
          placeholder={textarea_placeholder}
          className="w-full h-full resize-none outline-none placeholder:text-center placeholder:pt-12"
          name="message"
          required
        />
      </div>


      <div className="flex flex-col gap-2 w-[40%]">
        <div className="rounded-lg flex items-center gap-2 p-2 bg-purple-900/60 dark:bg-orange-900/60">
          <MdPersonOutline className="text-3xl" />
          <input
            className="w-full outline-none"
            type="text"
            name="name"
            placeholder={name_placeholder}
            required
          />
        </div>

        <div className="rounded-lg flex items-center gap-2 p-2 bg-purple-900/60 dark:bg-orange-900/60">
          <AiOutlineMail className="text-3xl" />
          <input
            className="w-full outline-none"
            type="email"
            name="email"
            placeholder={email_placeholder}
            required
          />
        </div>

        <button type="submit" className="rounded-full font-sans px-8 py-1 border-2 font-semibold cursor-pointer bg-green-400/50
        disabled:bg-green-800 disabled:cursor-not-allowed" disabled={disable}>{button}</button>
      </div>
    </form>
  )
}
