import { useState, useEffect } from "react";
import axios from "axios";
import { InfoCard } from "./components/Infocard";
import {
  MailTwoTone,
  HeartTwoTone,
  PlusSquareTwoTone,
} from "@ant-design/icons";
import { List } from "antd";

export const Homepage = () => {
  const [foundationsList, setFoundationsList] = useState([]);
  const [nonprofitsList, setNonprofitsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/foundations")
      .then((response) => setFoundationsList(response.data));
    axios
      .get("http://localhost:8080/api/nonprofits")
      .then((response) => setNonprofitsList(response.data));
  }, []);

  const foundationData = {
    icon: <HeartTwoTone twoToneColor="#eb2f96" />,
    button_text: "Register Foundation",
    navigate: "register-foundation",
  };
  const nonProfitData = {
    icon: <PlusSquareTwoTone twoToneColor="#1ce629" />,
    button_text: "Register Non Profit",
    navigate: "register-non-profit",
  };
  const sendEmailData = {
    icon: <MailTwoTone twoToneColor="#ed2b48" />,
    button_text: "Send email",
    navigate: "send-email",
  };
  const viewEmailsData = {
    icon: <MailTwoTone />,
    button_text: "View emails",
    navigate: "view-emails",
  };
  return (
    <div className="flex-column align-center container justify-center">
      <h1>Temelio</h1>
      <h2>Helps nonprofit community to simplify the grant making workflow.</h2>
      <div className="flex justify-evenly wrap">
        <InfoCard data={foundationData}></InfoCard>
        <InfoCard data={nonProfitData}></InfoCard>
        <InfoCard data={sendEmailData}></InfoCard>
        <InfoCard data={viewEmailsData}></InfoCard>
      </div>
      <div className="flex width-100" style={{margin:10}}>
        <div className="flex-1" style={{margin:10}}>
          <List
            bordered 
            className="flex-1"
            header={<div className="font-weight-600 font-size-small">Foundations</div>}
            dataSource={foundationsList}
            renderItem={(item) => (
              <List.Item>
               <div className="flex-column">
                  <div>
                    <span className="font-weight-600">Name :</span>{" "}
                    {item.name}
                  </div>
                  <div>
                    <span className="font-weight-600">Address :</span>{" "}
                    {item.email}
                  </div>
                </div>
              </List.Item>
            )}
          />
        </div>
        <div className="flex-1" style={{margin:10}}>
          <List
            bordered
            className="flex-1"
            header={<div className="font-weight-600 font-size-small">Nonprofits</div>}
            dataSource={nonprofitsList}
            renderItem={(item) => (
              <List.Item>
                <div className="flex-column">
                  <div>
                    <span className="font-weight-600">Name :</span>{" "}
                    {item.name}
                  </div>
                  <div>
                    <span className="font-weight-600">Address :</span>{" "}
                    {item.address}
                  </div>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};
