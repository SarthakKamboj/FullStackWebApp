import { format } from 'path';
import React, { FC } from 'react'
import {useForm} from "react-hook-form";

interface registerProps {

}

type FormData = {
    username: string!;
    password: string!; 
}

const Register: FC<registerProps> = () => {
    const {register, setValue, handleSubmit, errors} = useForm<FormData>();

    const onSubmit = handleSubmit(({username,password}) => {
        console.log(username, password);
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Username</label>
                <input type="text" name="username" ref={register} />

                <label>Password</label>
                <input type="text" name="password" ref={register} />

                <button type="submit" />
            </form>
        </div>
    )
}

export default Register;
