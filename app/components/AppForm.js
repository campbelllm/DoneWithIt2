import React from "react";
import Formik from "formik";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      vaildationSchema={validationSchema}
    >
      {() => (
      <>
        {children}
      </>
      
      )}
    </Formik>
  );
}

export default AppForm;
