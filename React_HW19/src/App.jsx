import { useState } from 'react';
import { Form, Input, Button, Card, Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setSubmittedData(values);
    form.resetFields();
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2} style={{ marginBottom: 10, fontWeight: 500 }}>
          Форма с использованием Ant Design
        </Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <Form.Item
            label="Имя"
            name="name"
            rules={[
              { required: true, message: 'Пожалуйста, введите имя!' },
              { whitespace: true, message: 'Имя не может состоять только из пробелов!' },
              { min: 2, message: 'Имя должно содержать минимум 2 символа!' }
            ]}
            style={{ marginBottom: 15 }}
          >
            <Input placeholder="Name" size="large" />
          </Form.Item>

          <Form.Item
            label="Описание"
            name="description"
            rules={[
              { required: true, message: 'Пожалуйста, введите описание!' },
              { whitespace: true, message: 'Описание не может состоять только из пробелов!' },
              { min: 2, message: 'Описание должно содержать минимум 2 символа!' }
            ]}
            style={{ marginBottom: 20 }}
          >
            <Input placeholder="Description" size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" style={{ padding: '0 25px' }}>
              Отправить
            </Button>
          </Form.Item>
        </Form>

        {submittedData && (
          <Card
            style={{
              borderRadius: 6,
              borderColor: '#f0f0f0',
              boxShadow: 'none',
              padding: '10px 0'
            }}
          >
            <Title level={4} style={{ marginTop: 0, marginBottom: 15, fontWeight: 500 }}>
              Отправленные данные:
            </Title>
            <Paragraph style={{ margin: '5px 0', fontSize: 15 }}>
              <strong>Имя:</strong> {submittedData.name}
            </Paragraph>
            <Paragraph style={{ margin: '5px 0', fontSize: 15 }}>
              <strong>Описание:</strong> {submittedData.description}
            </Paragraph>
          </Card>
        )}
      </Space>
    </div>
  );
};

export default App;
