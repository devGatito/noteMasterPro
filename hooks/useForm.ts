import { useState } from "react";

export const useForm = <T extends Record<string, unknown>>(initialValues: T) => {
    const [values, setValues] = useState<T>(initialValues);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
    };
  
    const resetForm = () => setValues(initialValues);
  
    return { values, handleChange, resetForm };
  };
  