import React, { useState } from "react";

const InputExample = () => {
  //   const [name, setName] = useState("");
  //   const [surname, setSurname] = useState("");
  const [form, setForm] = useState({ name: "", surname: "" });

  //   const onChangeName = (event) => setName(event.target.value);
  //   const onChangeSurname = (event) => setSurname(event.target.value);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <label htmlFor="name">Name</label>
      <br />
      <input name="name" id="name" value={form.name} onChange={onChangeInput} />
      <br />
      <br />
      <label htmlFor="surname">Surname</label>
      <br />
      <input
        name="surname"
        id="surname"
        value={form.surname}
        onChange={onChangeInput}
      />
      <br />
      <br />
      {form.name} {form.surname}
    </div>
  );
};

export default InputExample;
