import * as Yup from "yup";

export function initialValue() {
    return {
        name: "",
        address:"",
        phone: "",
        email: "",
        description:"",
        location: null,
    };
}
 export function validationSchema() {
    return Yup.object({
        name: Yup.string().required("Campo obligatorio"),
        address: Yup.string().required("Campo obligatorio"),
        phone: Yup.string().required("Campo obligatorio"),
        email: Yup.string()
            .email("No es un email valido")
            .required("Campo obligatorio"),
        description: Yup.string().required("Campo obligatorio"),
        location: Yup.object().required("La localizacion es requerida"),
    });
 }   
