import {useRouter} from "next/router";
import { toErrorMap } from './../utils/toErrorMap';
import * as React from "react"
import {useForm} from "react-hook-form";
import { useRegisterMutation } from "../generated/graphql";
import { useState } from 'react';

type formType = {
    username: string
    password: string
}

const Register: React.FC = () => {
    
    const {register, handleSubmit, errors} = useForm<formType>();
    const router = useRouter();
    const [,registerUser] = useRegisterMutation();
    const [submissionErrs, setSubmissionErrs] = useState({});
    const [numSubmissionErrs, setNumSubmissionErrs] = useState(0);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    const onSubmit = handleSubmit(async (data) => {
       const response = await registerUser(data);
       if (response.data?.register.errors) {
            const errorMap = toErrorMap(response.data.register.errors);
            setSubmissionErrs(errorMap);
            setNumSubmissionErrs(Object.keys(errorMap).length);
       } else if (response.data?.register.user) {
           setShowSuccessMsg(true);
           router.push("/");
       }
    })

    return (
        <div>
            Register Page
            <form onSubmit={onSubmit}>
                <input type="text" ref={register({required:true})} name="username" placeholder="Username" />
                <input type="password" ref={register({required:"Password required", minLength:{value:2, message:"Password is too short"}})} name="password" placeholder="Password" />
                <button type='submit'>Submit </button>
                {errors.password && errors.password.message}
            </form> 
            {(numSubmissionErrs !== 0) ? Object.keys(submissionErrs).map(errKey => submissionErrs[errKey]): ""}
            {(showSuccessMsg) ? "User created" : ""} 
        </div>
    )
}

export default Register;