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
    console.log('values', values); // Debugging: tarkista, mitä arvoja lähetetään
    console.log('status', status); // Debugging: tarkista status
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
          resetForm(); // Tyhjennä lomake
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
      <Form className="flex flex-col text-white rounded-lg absolute">
        <label className="font-semibold text-white">Name:</label>
        <ErrorMessage name="name" component="p" className="text-red-500" />
        <Field name="name" type="text" className="bg-black/50 border p-2 rounded" />

        <label className="font-semibold text-white">Email:</label>
        <ErrorMessage name="email" component="p" className="text-red-500" />
        <Field name="email" type="email" className="bg-black/50 border p-2 rounded" />

        <label className="font-semibold text-white">Subject:</label>
        <Field name="subject" type="text" className="bg-black/50 border p-2 rounded" />

        <label className="font-semibold text-white">Message:</label>
        <ErrorMessage name="message" component="p" className="text-red-500" />
        <Field as="textarea" name="message" className="bg-black/50 border rounded h-30 w-100" />

        <button type="submit" className="bg-black text-white p-2 rounded hover:bg-black-600">
          Send
        </button>
        {status && <p>{status}</p>}
      </Form>
    </Formik>
  );
};

export default ContactForm;