import axios from "axios";
import Swal from "sweetalert2";
import env from "../../constants/Application/env.json";

export function SentResult(language, email, result) {
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