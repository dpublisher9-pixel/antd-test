import React from "react";
import { Select, Space, Form } from "antd";
import type { FormProps } from "antd";
import { InsertRowLeftOutlined } from "@ant-design/icons";

type FieldType = {
  companyname?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const CompanyNameSelect = () => {
  return (
    <Space.Compact block>
      <InsertRowLeftOutlined />
      <Form.Item<FieldType>
        label="회사명"
        name="companyname"
        rules={[{ required: true, message: "회사명 필수선택" }]}
      >
        <Select
          defaultValue="opt-1"
          placeholder="회사명 선택"
          options={[
            { label: "네이버", value: "opt-1" },
            { label: "구글", value: "opt-2" },
            { label: "아마존", value: "opt-3" },
          ]}
          style={{ minWidth: 260 }}
        />
      </Form.Item>
    </Space.Compact>
  );
};

export default CompanyNameSelect;
