import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

import MenuTabs from '../MenuTabs/MenuTabs';

function App() {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col lg={10}>
          <div className='py-4'>
            <MenuTabs />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
