import React from 'react';
import { useFormikContext } from 'formik';

import Button from "./Button/ButtonComponent"
function SubmitButton({title}) {
const {handleSubmit} = useFormikContext()

    return (
        <Button title="Login" onPress={handleSubmit}/>
    );
}

export default SubmitButton;