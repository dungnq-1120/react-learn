import useLoginForm from "./hooks/features/useLoginForm";

function App() {
  const { handleSubmit, register, formState } = useLoginForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div>
        <label htmlFor="">Email</label>
        <input
          {...register("email")}
        />
        <span
          style={{
            color: "red",
          }}
        >
          {formState.errors.email?.message}
        </span>
      </div>
      <div>
        <label htmlFor="">password</label>
        <input type="password" {...register("password")} />
        <span
          style={{
            color: "red",
          }}
        >
          {formState.errors.password?.message}
        </span>
      </div>
      <div>
        <label htmlFor="">password</label>
        <input type="password" {...register("confirmPassword")} />
        <span
          style={{
            color: "red",
          }}
        >
          {formState.errors.confirmPassword?.message}
        </span>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
