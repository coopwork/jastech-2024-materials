import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostId from "./pages/PostId.jsx";
import { Layout, Button } from "antd";
import { HomeOutlined } from '@ant-design/icons';

import "./index.css";

const { Header, Content, Footer } = Layout;


const AppRouter = () => {
   return (
      <>
         <Layout>
            <Header
               style={{
         
                  padding: '0 7.2rem',
                
             
                  position: "sticky",
                  background: "gray",
                  background: "linear-gradient(135deg, #EFEEEF, #E4E3E4)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                  backdropFilter: "blur(15px)",
               }}
            >
                     <Link to="/">
               <Button 
               variant="filled"
                size={"large"} 
                icon={<HomeOutlined />}>
                
                  Home
               </Button>
            </Link>
            </Header>

            <Content  
        
            
            >
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/posts/:postId" element={<PostId />} />
               </Routes>
            </Content>
            <Footer  style={{
         
         padding: '1rem 0rem',
       
    
         textAlign: "center",
         background: "gray",
         background: "linear-gradient(135deg, #EFEEEF, #E4E3E4)",
         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
         backdropFilter: "blur(15px)",
         borderTop: "1px gray solid"
      }}>&copy; DamZh87 2025</Footer>
         </Layout>
      </>
   );
};

export default AppRouter;
