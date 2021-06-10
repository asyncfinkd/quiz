import axios from "axios";
import Swal from "sweetalert2";
import env from "../constants/Application/env.json"

export function SentEmail(language, email, result) {
    if(!email) {
        if(language === "English") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a email!",
              });
        } else {
            Swal.fire({
                icon: "error",
                title: "Ой...",
                text: "Пожалуйста, введите адрес электронной почты!",
              });
        }
    } else {
        axios
        .post(`${env.host}/auth/insertUser`, {
          email: email,
          result: result,
        })
        .then(() => {
          if (language === "English") {
            Swal.fire("Success!", "You Result Sented Gmail!", "success").then(
              function () {
                window.location.reload();
              }
            );
          } else {
            Swal.fire(
              "Успех!",
              "Вы отправили Gmail в результате!",
              "success"
            ).then(function () {
              window.location.reload();
            });
          }
        });
    }
}