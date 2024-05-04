import { Form, Input, Button, Select } from "antd";

export const FormComponent = (props) => {
  const getComponent = (elem) => {
    if (elem.type === "Input") {
      return (
        <Form.Item label={elem.label} name={elem.name}>
          <Input placeholder={elem.placeholder} required/>
        </Form.Item>
      );
    }

    if (elem.type === "Email") {
      return (
        <Form.Item label={elem.label} name={elem.name}>
          <Input placeholder={elem.placeholder} type="email" required/>
        </Form.Item>
      );
    }

    if (elem.type === "Textarea") {
      return (
        <Form.Item label={elem.label} name={elem.name}>
          <Input.TextArea placeholder={elem.placeholder} required/>
        </Form.Item>
      );
    }

    if (elem.type === "Select") {
      return (
        <Form.Item label={elem.label} name={elem.name}>
          <Select placeholder={elem.placeholder} required/>
        </Form.Item>
      );
    }
  };

  const onFinish = (values)=>{
    console.log(values);
    props.data.handleSubmit(values);
  }

  return (
    <div className="flex" style={{ width: "50vw" }}>
      <Form
        layout={"vertical"}
        onFinish={onFinish}
        style={{ maxWidth: "100%", width: "100%" }}
        className="flex-column"
      >
        <div className="font-size-medium">{props?.data?.label}</div>
        {props?.data?.fields.map((elem) => {
          return getComponent(elem);
        })}
        <Form.Item>
          <Button type="primary" htmlType="submit">{props?.data?.button_text ?? "Submit"}</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
