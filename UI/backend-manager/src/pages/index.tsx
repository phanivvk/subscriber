import { FormikHelpers, Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { productTypeValidatorForm } from '../../validations/producttypevalidations';
import { HttpPost } from './api/services';



interface ProductForm {
  ProductId: string;
  ProductName: string;
  Description: string;
}

const style = {
  fields: 'border rounded-md p-2 w-full shadow focus:outline-none focus:border-indigo-500 focus:ring-1 focus:indigo-500',
};

const ProductForm = () => {
  const initialValues: ProductForm = {
    ProductId: '',
    ProductName: '',
    Description: '',
  };

  const handleSubmit = async (
    values: ProductForm,
    { setSubmitting, resetForm }: FormikHelpers<ProductForm>
  ) => {
    console.log(JSON.stringify(values));
    setSubmitting(false);
    try {

      console.log('Values:', values);
      HttpPost('product', JSON.stringify(values))
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 px-8">
      <h2 className="text-2xl font-bold mb-2">Products</h2>
      <Formik initialValues={initialValues} validate={productTypeValidatorForm} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="bg-white border-2 border-green-400 shadow-2xl rounded px-8 pt-2 pb-8">
            <div className="mb-2">
              <label htmlFor="ProductId" className="block mb-2 font-medium">
                Product ID<span className="text-red-600">*</span>
              </label>
              <Field type="text" id="ProductId" name="ProductId" className={style.fields} />
              <ErrorMessage name="ProductId" component="div" className="text-red-500 text-xs" />
            </div>

            <div className="mb-2">
              <label htmlFor="ProductName" className="block mb-2 font-medium">
                Product Name <span className="text-red-600">*</span>
              </label>
              <Field type="text" id="ProductName" name="ProductName" className={style.fields} />
              <ErrorMessage name="ProductName" component="div" className="text-red-500 text-xs" />
            </div>

            <div className="mb-2">
              <label htmlFor="Description" className="block mb-2 font-medium">
                Description <span className="text-red-600">*</span>
              </label>
              <Field type="text" id="Description" name="Description" className={style.fields} />
              <ErrorMessage name="Description" component="div" className="text-red-500 text-xs" />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
