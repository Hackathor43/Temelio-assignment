import { useEffect, useState } from "react";
import axios from "axios";
import {List} from 'antd'

export const ViewEmails = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/sentEmails").then((response) => setEmails(response.data));
  }, []);

  return (
  <div className="container flex-column align-center justify-center  width-100">
    <h1>Sent emails</h1>
   <div className="flex width-100">
    <List
      bordered
        style={{width:'60%'}}
      dataSource={emails}
      renderItem={(item) => (
        <List.Item>
          <div className="flex-column">
            <div><span className="font-weight-600">Reciepient :</span> {item.recipient}</div>
            <div dangerouslySetInnerHTML={{ __html: item.message }} />
          </div>
        </List.Item>
      )}
    />
    </div>
    </div>
  );
};