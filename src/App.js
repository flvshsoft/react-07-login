import React from "react";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Carousel,
  Card,
  Flex,
  Row,
  Col,
} from "antd";
import "./App.css";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const items = [
  { key: 1, label: "Home" },
  { key: 2, label: "About" },
  { key: 3, label: "Contact" },
];

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>About</Breadcrumb.Item>
        </Breadcrumb>

        <Carousel autoplay>
          <div>
            <img
              src="https://i.pinimg.com/736x/39/3b/a8/393ba8246897375c3c167a11a637b251.jpg"
              alt="Image 1"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/84/14/63/841463ff32c78d4a2a47ee34500c2543.jpg"
              alt="Image 2"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/fe/3f/ac/fe3fac67b747068918b740c42c0edf4f.jpg"
              alt="Image 3"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/84/14/63/841463ff32c78d4a2a47ee34500c2543.jpg"
              alt="Image 4"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div>
        </Carousel>

        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Row gutter={[30, 30]} justify="center">
            <Col>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>{" "}
            <Col>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
          </Row>
        </div>

        <Row>
          <Col span={12} style={{ padding: "20px" }}>
            <img
              src="https://i.pinimg.com/736x/39/3b/a8/393ba8246897375c3c167a11a637b251.jpg"
              alt="Image 1"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </Col>
          <Col span={12}>
              <h1>Benefit from our online class</h1>
          </Col>
        </Row>

        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Flashsoft Indonesia
      </Footer>
    </Layout>
  );
};
export default App;
