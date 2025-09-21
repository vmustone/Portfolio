import { Formik, Form, Field } from "formik";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = (values: { name: string; email: string; subject: string; message: string }, { resetForm, setSubmitting }: any) => {
    setSubmitting(true);
    setStatus("");
    
    emailjs
      .send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setStatus("✅ Email sent successfully!");
          resetForm();
        },
        (error) => {
          setStatus("❌ Failed to send email. Please try again.");
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form className="flex flex-col text-white rounded-lg w-full h-full max-h-full overflow-auto">
            
            {status && (
              <div className={`mb-4 p-3 rounded text-center ${
                status.includes('✅') 
                  ? 'bg-green-500/20 border border-green-500' 
                  : 'bg-red-500/20 border border-red-500'
              }`}>
                <p className={status.includes('✅') ? 'text-green-300' : 'text-red-300'}>
                  {status}
                </p>
              </div>
            )}
          
          <label className="font-bold text-white">Name:</label>
          <Field
            name="name"
            type="text"
            required
            className="bg-black/30 border border-black p-1 rounded semibold mb-3 focus:outline-none"
          />

          <label className="font-bold text-white">Email:</label>
          <Field
            name="email"
            type="email"
            required
            className="bg-black/30 border border-black p-1 rounded semibold mb-3 focus:outline-none"
          />

          <label className="font-bold text-white">Subject:</label>
          <Field
            name="subject"
            type="text"
            className="bg-black/30 border border-black p-1 rounded semibold mb-3 focus:outline-none"
          />

          <label className="font-bold text-white">Message:</label>
          <Field
            as="textarea"
            name="message"
            required
            className="bg-black/30 border border-black p-1 rounded semibold h-60 mb-3 focus:outline-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="font-bold bg-black/30 text-white p-2 rounded border border-black hover:bg-black/85 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;