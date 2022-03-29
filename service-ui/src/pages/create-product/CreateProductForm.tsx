import React from "react";
import { FieldArray, Formik } from "formik";
import { Button, Grid, TextField } from "@mui/material";
import { Rating, SellOption } from "../../generated/service-boarding";
import { ImageInput } from "./ImageInput";

// title: string;
// description: string;

// attributes: Record<string, string>;
// images: Array<string>;
// ratings: Array<Rating>;
// sellOptions: Array<SellOption>;
// tag: string;

export interface CreateProductFormValue {
  title: string;
  description: string;
  attributes: Record<string, string>;
  images: Array<string>;
  ratings: Array<Rating>;
  sellOptions: Array<SellOption>;
  tag: string;
}

const INITIAL_VALUE: CreateProductFormValue = {
  title: "",
  description: "",
  attributes: {},
  images: [],
  ratings: [],
  sellOptions: [],
  tag: ""
};

const ATTRIBUTE_KEYS = [
  "isbn-10",
  "isbn-13",
  "publisher",
  "language",
  "paperback",
  "dimensions",
  "author"
];

interface CreateProductFormProps {
  onSubmit: (value: CreateProductFormValue) => void;
}

export const CreateProductForm: React.FunctionComponent<CreateProductFormProps> =
  ({ onSubmit }) => {
    return (
      <Formik initialValues={INITIAL_VALUE} onSubmit={onSubmit}>
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  label="Title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  label="Description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  multiline
                />
              </Grid>
              {ATTRIBUTE_KEYS.map((attr) => (
                <Grid item xs={3} key={attr}>
                  <TextField
                    name={`attributes.${attr}`}
                    label={attr}
                    value={values.attributes[attr] || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    multiline
                  />
                </Grid>
              ))}

              <Grid item xs={12} />

              <FieldArray name="images" render={(arrayHelpers) => (<>
                {values.images.map((img, index) => (
                  <Grid key={index} item xs={2}>
                    <img height={200} alt={img} src={img} />
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <ImageInput onAdd={(link) => arrayHelpers.push(link)} />
                </Grid>
              </>)} />

              <Grid item xs={12}>
                <Button variant="contained" fullWidth type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    );
  };
