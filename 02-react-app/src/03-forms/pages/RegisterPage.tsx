import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const { formData, handleInputChange, name, email, password, repeatPassword } =
    useForm({
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Repeat password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={handleInputChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
