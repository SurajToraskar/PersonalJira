import { useForm } from "react-hook-form";
import { LoginSchema, type LoginProps } from "../validation/signup";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUp() {
  const { getValues, setValue, register, handleSubmit, formState } =
    useForm<LoginProps>({
      resolver: zodResolver(LoginSchema),
    });

  function handleSignUp(data: LoginProps) {
    console.log(JSON.stringify(data));
  }

  return (
    <div className="m-auto bg-gray-800  w-[50%]  rounded-xl shadow-2xl ">
      <h1 className="text-center text-white">Signup</h1>
      <form onSubmit={handleSubmit(handleSignUp)} className="p-10">
        <div className="mt-1">
          <label className="text-white">First name :&nbsp;</label>
          <input
            type="text"
            className="border-none outline-none bg-gray-600  rounded-md shadow-xl placeholder-gray-400 px-1"
            placeholder="John"
            {...register("firstName")}
          />
          {formState.errors.firstName && (
            <div className="text-red-500">
              {formState.errors.firstName.message}
            </div>
          )}
        </div>
        <div className="mt-1">
          <label className="text-white">Last name :&nbsp;</label>
          <input
            type="text"
            className="border-none outline-none bg-gray-600  rounded-md shadow-xl placeholder-gray-400 px-1"
            placeholder="Doe"
            {...register("lastName")}
          />
          {formState.errors.lastName && (
            <div className="text-red-500">
              {formState.errors.lastName.message}
            </div>
          )}
        </div>

        <div className="mt-2">
          <label className="text-white">Email :&nbsp;</label>
          <input
            type="email"
            className="border-none outline-none bg-gray-600  rounded-md shadow-xl placeholder-gray-400 px-1 "
            placeholder="john.doe@gmail.com"
            {...register("email")}
          />
          {formState.errors.email && (
            <div className="text-red-500">{formState.errors.email.message}</div>
          )}
        </div>
        <div className="mt-2">
          <label className="text-white">Password :&nbsp;</label>
          <input
            type="password"
            className="border-none outline-none bg-gray-600  rounded-md shadow-xl placeholder-gray-400 px-1"
            placeholder="***********"
            {...register("password")}
          />
          {formState.errors.password && (
            <div className="text-red-500">
              {formState.errors.password.message}
            </div>
          )}
        </div>
        <div className="mt-2">
          <label className="text-white">Confirm password :&nbsp;</label>
          <input
            type="password"
            className="border-none outline-none bg-gray-600  rounded-md shadow-xl placeholder-gray-400 px-1"
            placeholder="***********"
            {...register("confirmPassword")}
          />
          {formState.errors.confirmPassword && (
            <div className="text-red-500">
              {formState.errors.confirmPassword.message}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center  h-[100px]">
          <button
            type="submit"
            className="text-white  bg-blue-700 p-2 rounded-2xl w-[100px] h-[40px]"
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}
