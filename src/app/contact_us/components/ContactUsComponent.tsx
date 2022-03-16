import React from 'react'
import { Input, Button, Form } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next'

const ContactUsComponent = () => {

	const submitForm = () => {
		console.log("123");
	}

	const [ form ] = Form.useForm();
	const { TextArea } = Input;
	const { t } = useTranslation('common')
  return (
    <div>
			<div>
				<h1>{t('ContactUsComponent.title')}</h1>
				<br />
				<Form form={form} onFinish={submitForm} >
					<Form.Item
						name="Your name"
						rules={[ { required: true, }, ]}
					>
    			<Input size="large" placeholder={t('ContactUsComponent.yourName')} prefix={<UserOutlined />} />
					</Form.Item>
					<Form.Item
						name="Your email"
						rules={[ { required: true, }, ]}
					>
    				<Input size="large" placeholder={t('ContactUsComponent.email')} prefix={<MailOutlined />} />
					</Form.Item>

					<Form.Item
						name="Complaint text"
						rules={[ { required: true, }, ]}
					>
    				<TextArea rows={4} size="large" placeholder={t('ContactUsComponent.textField')} maxLength={1000} />
					</Form.Item>
					<Button type="primary" htmlType="submit">
						{t('ContactUsComponent.button')}
					</Button>
				</Form>
			</div>
  	</div>
  )
}
// {t('SearchComponent.inputSearchWord')}

export default ContactUsComponent
