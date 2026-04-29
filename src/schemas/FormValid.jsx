import * as yup from "yup";

const nameVal = /^[A-Za-zА-Яа-яЁёÄÖÜäöüß\s-]{2,50}$/;
const emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const messVal = /^.{10,1000}$/;

const schema = yup.object({
    name: yup
        .string()
        .required("Bitte geben Sie Ihren Namen ein.")
        .matches(nameVal, "Bitte geben Sie einen gültigen Namen ein."),

    email: yup
        .string()
        .required("Bitte geben Sie eine gültige E-Mail-Adresse ein.")
        .matches(emailVal, "Bitte geben Sie eine gültige E-Mail-Adresse ein."),

    message: yup
        .string()
        .required("Bitte schreiben Sie eine Nachricht.")
        .matches(
            messVal,
            "Die Nachricht muss zwischen 10 und 1000 Zeichen lang sein."
        ),
});

export default schema;