import { Validators } from "./validators";

interface ProductsForm {
  ProductId: string;
  ProductName: string;
    Description: string;
  }
  
  export const productTypeValidatorForm = (values: ProductsForm) => {
    const errors: Partial<ProductsForm> = {};
  
    if (!values.ProductId) {
      errors.ProductId = "Product ID is required";
    }
    if (Validators.ValidateId(values.ProductId)) {
        errors.ProductId = "Product ID must contain only digits";
      }
  
    if (!values.ProductName.trim()) {
      errors.ProductName = "Product Name is required";
    } else if (values.ProductName.length < 5) {
      errors.ProductName = "Minimum 5 characters";
    } else if (Validators.ValidateName(values.ProductName)) {
      errors.ProductName = "Only alphabetical characters allowed!";
    }
  
    if (!values.Description.trim()) {
      errors.Description = "Description is required";
    }
  
    return errors;
  };
  