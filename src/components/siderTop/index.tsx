import React, { useState } from "react";
import Logo from "@/components/Logo";

import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

interface ChildProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const SiderTop = ({ collapsed, setCollapsed }: ChildProps) => {
  return (
    <div className="survey-sider-top">
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      />
      <Logo />
    </div>
  );
};

export default SiderTop;
