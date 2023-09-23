import { MailOutlined, UserOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Layout, Menu, MenuProps, Space, theme } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';

import CustomIcon from './aa.svg?react';
import logoUrl from './logo.png';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />),
  getItem('Navigation Three', 'sub3', <SettingOutlined />),
];

const Logo = styled.div`
  height: 60px;
  background: #00284d;
  color: white;
  line-height: 60px;
  padding: 0 16px;
  text-align: center;
`;

const Image = styled.img.attrs({ src: logoUrl })`
  display: inline;
  width: 32px;
  height: 32px;
  vertical-align: middle;
`;

const StyledMenu = styled(Menu)`
  height: calc(100vh - 60px);
  border-right: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 12px 0;

  &:hover {
    overflow-y: auto;
  }

  /* 设置滚动条的样式 */
  &::-webkit-scrollbar {
    width: 4px;
    height: 0;
  }
  /* 滚动槽 */
  &::-webkit-scrollbar-track {
    box-shadow: #818585;
    -webkit-box-shadow: #818585;
    border-radius: 1px;
  }
  /* 滚动条滑块 */
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #818585;
    box-shadow: #818585;
    -webkit-box-shadow: #818585;
  }
  &::-webkit-scrollbar-thumb:window-inactive {
    background: #818585;
  }
`;

const StyledHeader = styled(Header)`
  text-align: center;
  color: #ecf1f5;
  padding-inline: 48px;
  height: 60px;
  line-height: 60px;
  background: #282c3a;
`;

const StyledContent = styled(Content)`
  padding: 24px 48px;
  min-height: calc(100vh - 60px);
`;

const marginLeft = 80;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider style={{ minWidth: '800px', overflowX: 'auto' }}>
      <Sider
        className="sider"
        trigger={null}
        collapsible
        collapsed
        width={80}
        style={{
          overflow: 'hidden',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1000,
        }}
      >
        <Logo>{/* <Image /> */}</Logo>

        <StyledMenu
          theme="dark"
          mode="inline"
          items={items}
          selectedKeys={['sub1']}
          defaultOpenKeys={['sub1']}
          // onClick={({ key }) => navigate(key)}
        />
      </Sider>

      <Layout style={{ marginLeft }} className="header">
        <StyledHeader>a</StyledHeader>
        <StyledContent>
          <CustomIcon />
        </StyledContent>
      </Layout>
    </Layout>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
