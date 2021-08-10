import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Form, Input, Button, Upload, Modal, Row, Col, Statistic, Comment, Tooltip, List } from 'antd'
import { PlusOutlined, LikeOutlined } from '@ant-design/icons'
import moment from 'moment'
const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

const Item: React.FC = () => {
  const [form] = Form.useForm()
  const [previewImage, setPreviewImage] = useState('')
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState([])

  const handleChange = ({ fileList }: any) => setFileList(fileList)
  const handlePreview = async (file:any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }
  const handleCancel = () => setPreviewVisible(!previewVisible)
  return (
    <>
      <Row>
        <Col xs={24} md={12}>
           <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8
                ? null
                : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
                  )}
            </Upload>
        </Col>
        <Col xs={24} md={12}>
          <Form
            form={form}
            layout="vertical"
          >
            <Form.Item label="Name" required >
              <Input placeholder="name" />
            </Form.Item>
            <Form.Item
              label="Price"
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label={'Description'}>
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </Row>
      <Row>
        <Col span={12}>
          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </Col>
        <Col span={12}>
          <Statistic title="Unmerged" value={93} suffix="/ 100" />
        </Col>
        <Col xs={24}>
            <List
              className="comment-list"
              header={`${data.length} replies`}
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <li>
                  <Comment
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                  />
                </li>
              )}
            />
        </Col>
      </Row>
    </>
  )
}
const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    )
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    )
  }
]

export default Item
