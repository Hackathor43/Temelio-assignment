import { useNavigate } from "react-router-dom";
import { Card,Button } from "antd";

export const InfoCard = (props) => {

  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/" + props?.data?.navigate);
  }

  return (
    <Card style={{margin:10,width:200}} className="info-card">
      <div className="flex-column align-center">
        <div className="infocard-icon width-100 font-size-medium mb-20">{props?.data?.icon}</div>
        <div>
            <Button type="primary" onClick={handleNavigate}>{props?.data?.button_text}</Button>
        </div>
      </div>
    </Card>
  );
};
