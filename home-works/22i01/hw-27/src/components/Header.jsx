import * as React from 'react';
import {Link} from "react-router-dom";
import { Flex, Layout } from 'antd';


const { Header } = Layout;
const headerStyle = {
  textAlign: 'left',
  color: '#000',
  width: '100%',
  height: 84,
  paddingInline: 48,
  lineHeight: '84px',
  backgroundColor: 'lightgray',
}; 

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};

const App = () => (
  <Flex gap="middle" wrap>
    
      <Header style={headerStyle}>Header</Header>
    
</Flex>
);
export default App;