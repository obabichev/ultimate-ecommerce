import React from "react";
import { useCreateProductMutation } from "../../service/boarding";
import PageWrapper from "../../components/PageWrapper";
import { CreateProductForm, CreateProductFormValue } from "./CreateProductForm";
import { useOpenProductPage } from "../../utils/navigation";

export const CreateProductPage: React.FunctionComponent = () => {
  const openProductPage = useOpenProductPage();

  const mutation = useCreateProductMutation({
    onSuccess: (data) => openProductPage(data.usin),
  });

  const onFormSubmit = (form: CreateProductFormValue) => {
    mutation.mutate(form);
  };

  return (
    <PageWrapper>
      <CreateProductForm onSubmit={onFormSubmit} />
    </PageWrapper>
  );
};
