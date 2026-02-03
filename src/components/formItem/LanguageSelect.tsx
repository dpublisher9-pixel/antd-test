import React from "react";
import { Select, Space, Form } from "antd";
import type { FormProps } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

type FieldType = {
  name?: string;
  language?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LanguageSelect = () => {
  return (
    <Space.Compact block>
      <GlobalOutlined />
      <Form.Item<FieldType>
        label="언어"
        name="language"
        rules={[{ required: false, message: "선택" }]}
      >
        <Select
          defaultValue="전체"
          // placeholder="언어"
          options={[
            { label: "한국어", value: "ko" },
            { label: "영어", value: "en" },
            { label: "중국어", value: "ch" },
            { label: "일본", value: "jp" },
          ]}
          style={{ minWidth: 100 }}
        />
      </Form.Item>
    </Space.Compact>
  );
};

export default LanguageSelect;
