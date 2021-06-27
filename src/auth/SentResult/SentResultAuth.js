import axios from "axios";
import Swal from "sweetalert2";
import env from "../../constants/Application/env.json";

export function SentResult(
  language,
  email,
  result,
  points,
) {
  axios
    .post(`${env.host}/auth/insertUser`, {
      email: email,
      result: result,
      points: points,
      language: language,
    })
    .then(() => {
      if (language === "English") {
        Swal.fire("Good job!", "You Finished Quiz", "success").then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire(
          "Отличная работа!",
          `Ты Законченный Викторина`,
          "success"
        ).then(function () {
          window.location.reload();
        });
      }
    });
}
