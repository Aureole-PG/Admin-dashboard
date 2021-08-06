import React from 'react'
import { Row, Col, Card } from 'antd'
const Dashboard: React.FC = () => {
  return (
        <Row gutter={[16, 16]} >
          <Col xs= {24} md={12} >
            <Card style={{ width: '100%' }} title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs= {24} md={12} >
            <Card style={{ width: '100%' }} title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>

        </Row>
  )
}

export default Dashboard
