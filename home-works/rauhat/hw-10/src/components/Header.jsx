
import { Layout, Typography } from "antd";
import { Link } from "react-router-dom";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  return (
    <AntHeader style={{ background: "#fff", padding: "0 50px" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title level={3} style={{ margin: "16px 0", textAlign: "center" }}>
          Мой блог
        </Title>
      </Link>
    </AntHeader>
  );
};

export default Header;
