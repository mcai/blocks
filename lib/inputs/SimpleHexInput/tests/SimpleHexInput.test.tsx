import React from 'react';
import {Form, Formik, FormikProps} from "formik";
import {SimpleHexInput} from "../SimpleHexInput";
import {Button} from "react-bootstrap";
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
    let component = renderer.create(
        <Formik
            initialValues={{
                name: "3F2D"
            }}
            onSubmit={values => {
                console.log(JSON.stringify(values));
            }}
        >
            {(props: FormikProps<any>) => (
                <Form>
                    <SimpleHexInput label={"名称"} name={"name"}/>
                    <Button variant={"primary"} type="submit">提交</Button>
                </Form>
            )}
        </Formik>
    );

    console.log(component.toJSON());
});
