import { useState } from "react";

export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    ...formData,
    formData,
    handleInputChange,
  };
};
