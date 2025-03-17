import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Nimi on pakollinen"),
    email: Yup.string().email("Virheellinen sähköposti").required("Sähköposti on pakollinen"),
    message: Yup.string().required("Viesti ei voi olla tyhjä"),
  });

  const handleSubmit = (values: { name: string; email: string; subject: string; message: string }) => {
    console.log('values', values)

  };

  return (

    <Formik initialValues={{ name: "", email: "",subject: "", message: "" }} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="flex flex-col  text-white rounded-lg absolute">
        <label className="font-semibold text-white">Name:</label>
        <ErrorMessage name="name" component="p" className="text-red-500" />
        <Field name="name" type="text" className="bg-black/50 border p-2 rounded" />

        <label className="font-semibold text-white">Email:</label>
        <ErrorMessage name="email" component="p" className="text-red-500" />
        <Field name="email" type="email" className="bg-black/50 border p-2 rounded" />

        <label className="font-semibold text-white">Subject:</label>
        <Field name="subject" type="subject" className="bg-black/50 border p-2 rounded" />

        <label className="font-semibold text-white">Message:</label>
        <ErrorMessage name="message" component="p" className="text-red-500" />
        <Field as="textarea" name="message" className="bg-black/50 border rounded h-30 w-100" />

        <button type="submit" className="bg-black text-white p-2 rounded hover:bg-black-600">
        Send
        </button>
      </Form>
    </Formik>

  );
};

export default ContactForm;
