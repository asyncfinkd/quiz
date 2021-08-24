import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import axios from "axios";
import env from "../../constants/Application/env.json";

export default function AdminPages({ language }) {
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const submit = () => {
    if (!email) {
      emailRef.current.focus();
      if (language === "English") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Enter a Email",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "ой...",
          text: "введите адрес электронной почты",
        });
      }
    } else if (
      !/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g.test(
        email
      )
    ) {
      emailRef.current.focus();
      if (language === "English") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect Validation",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Неправильная проверка",
        });
      }
    } else if (!password) {
      passwordRef.current.focus();
      if (language === "English") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Enter a Password",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "ой...",
          text: "введите пароль",
        });
      }
    } else {
      axios
        .post(`${env.host}/auth/signin`, {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };
  return (
    <>
      <Helmet>
        <title>
          {language === "English"
            ? "Admin - Quiz Application"
            : "Админ - Приложение для викторины"}
        </title>
      </Helmet>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          width: "400px",
          margin: "auto",
          maxWidth: "100%",
          padding: "10px",
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <h2>{language === "English" ? "Sign in" : "Войти"}</h2>
        <div className="text-center form-ai" style={{ width: "100%" }}>
          <input
            type="text"
            placeholder=" "
            className="input form-ai-control w-350 max-w-full"
            autoFocus
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
          />
          <label>
            {language === "English" || language === "Choose Language"
              ? "Email"
              : "эл.почта"}
          </label>
        </div>
        <div className="text-center form-ai mt-3" style={{ width: "100%" }}>
          <input
            type="password"
            placeholder=" "
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input form-ai-control w-350 max-w-full"
            style={{ width: "100%" }}
          />
          <label>
            {language === "English" || language === "Choose Language"
              ? "Password"
              : "Пароль"}
          </label>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#0d6efd",
            color: "white",
            fontSize: "1rem",
            borderRadius: "0.25rem",
            border: "none",
            outline: "none",
            height: "44px",
            marginTop: "15px",
            width: "100%",
            cursor: "pointer",
          }}
          onClick={() => submit()}
        >
          {language === "English" || language === "Choose Language"
            ? "Continue"
            : "Продолжать"}
        </button>
      </form>
    </>
  );
}
