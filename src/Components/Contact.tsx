import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string().required("Name required"),
    email: Yup.string().email("Wrong type of email").required("Email required"),
    message: Yup.string().required("Message required"),
  });

  const handleSubmit = (values: { name: string; email: string; subject: string; message: string }, { resetForm }: any) => {
    emailjs
      .send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Email sent successfully!");
          resetForm();
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send email.");
        }
      );
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col text-white rounded-lg w-full h-full max-h-full overflow-auto">
        <label className="font-semibold text-white">Name:</label>
        <ErrorMessage name="name" component="p" className="font-semibold text-red-500" />
        <Field name="name" type="text" className="bg-black/30 border border-black p-1 rounded" />

        <label className="font-semibold text-white">Email:</label>
        <ErrorMessage name="email" component="p" className="font-semibold text-red-500" />
        <Field name="email" type="email" className="bg-black/30 border border-black p-1 rounded" />

        <label className="font-semibold text-white">Subject:</label>
        <Field name="subject" type="text" className="bg-black/30 border border-black p-1 rounded" />

        <label className="font-semibold text-white">Message:</label>
        <ErrorMessage name="message" component="p" className="font-semibold text-red-500" />
        <Field as="textarea" name="message" className="bg-black/30 border border-black rounded h-60 resize-none" />

        <button
          type="submit"
          className="font-semibold bg-black/30 text-white p-2 rounded border border-black hover:bg-black/85 transition mt-4"
        >
          Send
        </button>
        {status && <p>{status}</p>}
      </Form>
    </Formik>
  );
};

export default ContactForm;