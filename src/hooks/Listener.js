import Swal from "sweetalert2";
import { SentResult } from "../auth/SentResult/SentResultAuth";

export function SentEmail(language, email, result, points) {
    if (!email) {
        if (language === "English") {
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
        SentResult(language, email, result, points);
    }
}