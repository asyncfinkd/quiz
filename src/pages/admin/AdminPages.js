import React from "react";

export default function AdminPages({ language }) {
  return (
    <>
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
      >
        <h2>{language === "English" ? "Sign in" : "Войти"}</h2>
        <div className="text-center form-ai" style={{ width: "100%" }}>
          <input
            type="text"
            placeholder=" "
            className="input form-ai-control w-350 max-w-full"
            autoFocus
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
            type="text"
            placeholder=" "
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
        >
          {language === "English" || language === "Choose Language"
            ? "Continue"
            : "Продолжать"}
        </button>
      </form>
    </>
  );
}
