import { useState } from 'react';

const restOfErrors = (obj) => (Object.keys(obj).length > 0 ? obj : null);

const ControlledForm = () => {
    const [errors, setErrors] = useState(null);
    const [form, setForm] = useState({ name: '', age: '' });
    console.log(errors);
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        if (key === 'name') {
            if (value.length < 3) {
                setErrors((prevState) => ({
                    ...prevState,
                    [key]: { message: 'Name should be longer than 3 characters!' },
                }));
            } else {
                setErrors((prevState) => {
                    const { name, ...rest } = prevState;
                    return restOfErrors(rest);
                });
            }
        }
        if (key === 'age') {
            if (value < 16) {
                setErrors((prevState) => ({
                    ...prevState,
                    [key]: { message: 'Age should be greater than 16!' },
                }));
            } else {
                setErrors((prevState) => {
                    const { age, ...rest } = prevState;
                    return restOfErrors(rest);
                });
            }
        }

        setForm((prevState) => ({ ...prevState, ...{ [key]: value } }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (errors) {
            return;
        }

        console.log(form);
    };

    return (
        <form>
            <input
                name="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
            />
            <br />
            <small>{errors?.name?.message}</small>
            <br />
            <input
                name="age"
                type="number"
                placeholder="Age"
                min={1}
                max={150}
                value={form.age}
                onChange={handleChange}
            />
            <br />
            <small>{errors?.age?.message}</small>
            <br />
            <button onClick={submitHandler}>Submit</button>
        </form>
    );
};

export default ControlledForm;
