import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterFormikPage = () => {
  const {
    formData,
    handleInputChange,
    name,
    email,
    password,
    repeatPassword,
    resetForm,
    isValidEmail,
  } = useForm({
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
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Name is required</span>}
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email is invalid</span>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
          className={`${password.trim().length <= 0 && "has-error"}`}
        />
        {password.trim().length <= 0 && <span>Password is required</span>}
        {password.trim().length > 0 && password.trim().length < 6 && (
          <span>Password must be at least 6 characters</span>
        )}
        <input
          type="password"
          placeholder="Repeat password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={handleInputChange}
          className={`${
            repeatPassword !== password &&
            "has-error"
          }`}
        />
        {repeatPassword.trim().length <= 0 && (
          <span>Repeat password is required</span>
        )}
        {repeatPassword.length > 0 && repeatPassword !== password && (
          <span>Passwords do not match</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
