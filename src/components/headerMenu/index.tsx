import React from "react";
import { Flex, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const HeaderMenu = () => {
  return (
    <Flex wrap>
      <Button type="link">
        <UserOutlined />
        My Page
      </Button>
      <Button type="link">
        <LockOutlined />
        Log Out
      </Button>
    </Flex>
  );
};

export default HeaderMenu;
