import { useForm } from "react-hook-form";
import { useState } from "react";
import "../App.css";
export default function Form() {
  const {register,handleSubmit,formState:{errors}} = useForm();
  function onSubmit(data){
    alert(`you have register using: ${data.email} as an email with ${data.name}`)
  }

  return (
    <div>
      <form className="Register_form" onSubmit={handleSubmit(onSubmit)}>
        <p className="form-overline">New account</p>
        <h1 className="form-title">
          Create your
          account
        </h1>

        <label htmlFor="Name">Your name</label>
        <input type="text" placeholder="Your name" id="Name" {...register("name",{required:"Name is required",
        minLength:{
          value:4,
          message:"Name must contain atleast 4 character"
        },
          maxLength:{
            value:12,
            message:"Name must contain maximum 12 character"
          }
        })} />
        {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="your@email.com" id="email" {...register("email",{required:"Email is required"})} />
        <label htmlFor="password">Password</label>
        {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
        <input type="password" placeholder="Enter Password" id="password" {...register("password",{required:"password is required",
          minLength:{
            value:6,
            message:"your password must contain atleast 6 letter"
          },
          maxLength:{
            value:12,
            message:"your password must contain passwordlower then 12"
          }
        })}/>
      {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
        
        <button
          className="submit"
          type="submit">
            register
        
        </button>
      </form>
    </div>
  );
}
