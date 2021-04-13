import { Field, Formik } from "formik";
import React from "react";
import validationSchema from "./validationSchema";
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "", success: false }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setFieldValue }) => {
        fetch("/?no-cache=1", {
          //eslint-disable-line
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contact",
            ...values,
          }),
        })
          .then(() => {
            setFieldValue("success", true);
            setTimeout(() => resetForm(), 6000);
            setSubmitting(false);
          })
          .catch((error) => {
            console.log(error);
            setFieldValue("success", false);
            alert("Error: Please Try Again!"); //eslint-disable-line
            setSubmitting(false);
          });
      }}
      render={({
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleReset,
        values,
      }) => (
        <section className=" flex justify-center md:w-1/2">
          <form
            className=" px-5 sm:px-10  mx-auto w-full max-w-xl "
            name="contact"
            onSubmit={handleSubmit}
            onReset={handleReset}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div>
              <div className="mt-8">
                <Field
                  className="rounded w-full"
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                />
              </div>
              {touched.name && errors.name && (
                <small className="text-pink-700">{errors.name}</small>
              )}
            </div>

            <div>
              <div className="mt-6">
                <Field
                  className="rounded w-full"
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                />
              </div>
              {touched.email && errors.email && (
                <small className="text-pink-700">{errors.email}</small>
              )}
            </div>

            <div>
              <div className="mt-6">
                <Field
                  className="rounded w-full h-16"
                  component="textarea"
                  placeholder="Message"
                  name="message"
                  id="message"
                  rows="4"
                />
              </div>
              {touched.message && errors.message && (
                <small className="text-pink-700">{errors.message}</small>
              )}
            </div>

            <div>
              {values.success && (
                <div>
                  <div>
                    <h4 className="text-white">
                      Your message has been successfully sent, I will get back
                      to you ASAP!
                    </h4>
                  </div>
                </div>
              )}
              <div className="mt-5 mb-8">
                <button
                  className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-7 rounded-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </section>
      )}
    />
  );
};

export default ContactForm;
