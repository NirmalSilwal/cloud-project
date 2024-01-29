import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = ({ data }) => {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(data);

  const onSubmit = (data) => {
    axios
      .post(
        "https://wh4vidjyvlwi5ulbf7ncflqiey0udbvl.lambda-url.us-east-1.on.aws",
        data
      )
      .then((data) => {
        console.log(data);
        alert("Form submitted successfully!");
        reset();
      })
      .catch((err) => alert(JSON.stringify(err)));
    console.log();
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{data?.message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="subject"
                  {...register("subject", { required: true })}
                />
                {errors.subject && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  {...register("message", { required: true })}
                  cols="50"
                  rows="8"
                  id="contactMessage"
                  name="message"
                ></textarea>
                {errors.message && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </div>

              <div>
                <button type="submit" className="submit">
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {data?.name}
              <br />
              {data?.address.street} <br />
              {data?.address.city}, {data?.address.state} {data?.address.zip}
              <br />
              <span>{data?.phone}</span>
            </p>
          </div>

          <div className="widget widget_tweets"></div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
