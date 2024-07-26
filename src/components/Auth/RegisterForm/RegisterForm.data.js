import * as Yup from "yup";

export function inicialValues() {
    return {
        email: "",
        password: "",
        repeatPassword: ""
    };
}

export function validationShema() {
    return Yup.object({
        email: Yup.string()
            .email("El email no es correcto")
            .required("El email es obligatorio"),
        password: Yup.string()
            .required("El password es obligatorio"),
        repeatPassword: Yup.string()
            .required("El password es obligatorio").oneOf([Yup.ref("password")], "Las contraseñas tienen que ser iguales"),

    });
}