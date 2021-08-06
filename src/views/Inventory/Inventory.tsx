import React from 'react'
import { Row, Col, Button } from 'antd'
import { InventoryTable } from './Table'
import { useHistory } from 'react-router'
const Inventory:React.FC = () => {
  const history = useHistory()
  const createnew = () => {
    history.push('/admin/inventory/item', { id: false })
  }
  return (
      <>
        <Row>
          <Col xs={24} >
            <Button type="primary" onClick={createnew}>
              Create New
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={24} >
            <InventoryTable />
          </Col>
        </Row>
      </>
  )
}
export default Inventory
