import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';
export const TestSwitch = () => (
  <Space direction="vertical">
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </Space>
);