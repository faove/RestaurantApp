import React from 'react'
import { ScrollView } from 'react-native'
import { Button } from '@rneui/base';
import { useFormik } from 'formik';
import { 
  InfoForm, 
  UploadImagesForm,
  ImageRestaurant
} from "../../../components/Restaurants/AddRestaurant";
import { initialValue, validationSchema } from './AddRestaurantScreen.data';
import { styles } from "./AddRestaurantScreen.styles"

export function AddRestaurantScreen() {

  const formik = useFormik({
    initialValues: initialValue(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async(formValue) => {
      console.log(formValue);
    }
  })
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageRestaurant formik={formik}/>
      <InfoForm formik={formik} />
      <UploadImagesForm formik={formik} />
      
      <Button 
        title="Crear restaurante"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  )
}