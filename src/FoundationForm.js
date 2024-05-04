import axios from "axios";
import { useState } from "react";
import { FormComponent } from "./components/FormComponent";
import { notification} from 'antd';
import {useNavigate} from 'react-router-dom';

export const FoundationForm = () => {
  const [refresh,setRefresh] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    setRefresh(false);
    const body = {
      email: data.email,
      name: data.name
    }
    const res = await axios.post("http://localhost:8080/api/foundations", body);
    console.log(res);
    notification.success({message: res.data.name + " added successfully to foundation list"});
    setRefresh(true);
    navigate("/");
  };

  const FoundationFormData = {
    label: "Regsiter Foundation",
    fields:[ {
      type: "Input",
      label: "Foundation name",
      placeholder: "Foundation name",
      name: "name"
    },
    {
      type: "Email",
      label: "Foundation email",
      placeholder: "Foundation email",
      name:"email"
    }],
    button_text: "Register foundation",
    handleSubmit: handleSubmit
  }

  return (
    <div className="container justify-center flex width-100 align-center">
      <FormComponent data={FoundationFormData} refresh={refresh}></FormComponent>
    </div>
  );
};