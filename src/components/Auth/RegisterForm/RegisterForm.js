import React, { useState } from 'react'
import { View } from 'react-native'
import { inicialValues, validationShema } from './RegisterForm.data'
import { useFormik } from 'formik'
import { Button, Icon, Input } from '@rneui/base'
import { styles } from "./RegisterForm.styles"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: inicialValues(),
    validationShema: validationShema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
        console.log("Formulario enviado");
        console.log(formValue);
    }
  });

  const showHiddenPassword = () => setShowPassword((prevState) => !prevState);

  return (
    <View style={styles.content}>
      <Input 
        placeholder='Correo electrónico' 
        containerStyle={styles.input}
        rightIcon={
            <Icon 
                type='material-community' 
                name='at' 
                iconStyle={styles.icon} 
            />}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder='Contraseña'
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
            <Icon 
                type='material-community' 
                name={showPassword ? 'eye-off-outline' :'eye-outline' }
                iconStyle={styles.icon} 
                onPress={showHiddenPassword}
            />}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder='Repetir Contraseña'
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={<Icon 
            type='material-community' 
            name={showPassword ? 'eye-off-outline' :'eye-outline' }
            iconStyle={styles.icon} 
            onPress={showHiddenPassword}
        />}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      />
      <Button 
        title='Unirse'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
      />
    </View>
  )
}