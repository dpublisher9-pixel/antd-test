import React from "react";
import { Select, Space, Form } from "antd";
import type { FormProps } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

type FieldType = {
  name?: string;
  page?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const PageSelect = () => {
  return (
    <Space.Compact block>
      <FileTextOutlined />
      <Form.Item<FieldType>
        label="페이지"
        name="page"
        rules={[{ required: false, message: "선택" }]}
      >
        <Select
          defaultValue="전체"
          // placeholder="전체"
          options={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
          ]}
          style={{ minWidth: 60 }}
        />
      </Form.Item>
    </Space.Compact>
  );
};

export default PageSelect;
