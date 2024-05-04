//CreateNonprofit.js
import { useState } from "react";
import axios from "axios";
import { FormComponent } from "./components/FormComponent";
import {notification} from 'antd';
import {useNavigate} from 'react-router-dom';

export const NonprofitForm = () => {
  const [refresh,setRefresh] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    setRefresh(false);
    const body = {
      email: data.email,
      name: data.name,
      address: data.address
    }
    const res = await axios.post("http://localhost:8080/api/nonprofits", body);
    console.log(res);
    notification.success({message: res.data.name + " added successfully to nonprofits list"});
    setRefresh(true);
    navigate("/");
  };

  const NonProfitFormData = {
    label: "Register Non Profit",
    fields:[ {
      type: "Input",
      label: "Non-profit name",
      placeholder: "Non-profit name",
      name:"name"
    },
    {
      type: "Email",
      label: "Non-profit email",
      placeholder: "Non-profit email",
      name:"email"
    },
    {
      type: "Textarea",
      label: "Address",
      placeholder: "Address",
      name:"address"
    }],
    button_text: "Register non-profit",
    handleSubmit: handleSubmit
  }

    
  
    return (
      <div className="container justify-center flex width-100 align-center">
        <FormComponent data={NonProfitFormData} refresh={refresh}></FormComponent>
      </div>
    );
};