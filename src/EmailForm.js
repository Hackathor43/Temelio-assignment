import { useState } from "react";
import axios from "axios";
import { FormComponent } from "./components/FormComponent";
import {notification} from 'antd';
import {useNavigate} from 'react-router-dom';

export const EmailForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    const emails = data.email.split(',');
    const body = {
      nonprofitEmails : emails
    }
    await axios.post("http://localhost:8080/api/sendEmails",body );
    notification.success({message: "Email sent successfully"});
    navigate("/view-emails");
    
  };

  const EmailFormData = {
    label: "Register Non Profit",
    fields:[ {
      type: "Input",
      label: "Non-profit name",
      placeholder: "Non-profit name",
      name:"name"
    },
    {
      type: "Input",
      label: "Non-profit email",
      placeholder: "Non-profit email",
      name:"email"
    },
    // {
    //   type: "Textarea",
    //   label: "Address",
    //   placeholder: "Address",
    //   name:"address"
    // },
    // {
    //   type: "Textarea",
    //   label: "Email body",
    //   placeholder: "Email body",
    //   name:"body"
    // }
  ],
    button_text: "Send Email",
    handleSubmit: handleSubmit
  }

    
  
    return (
      <div className="container justify-center flex width-100 align-center">
        <FormComponent data={EmailFormData}></FormComponent>
      </div>
    );
};