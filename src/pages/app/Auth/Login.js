import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox, Card } from 'antd';


import { signInRequest } from '../../../store/modules/auth/actions';
import { changeLoadingOn, changeLoadingOff } from '../../../store/modules/components/loading/actions';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function Login() {
  const dispatch = useDispatch();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const loading = useSelector(state => state.loading.loading);

  // function wait(timeout) {
  //   return new Promise(resolve => {
  //     setTimeout(resolve, timeout);
  //   });
  // }


  function handleSubmit(e) {
    e.preventDefault();
    // console.log(email, password)
    dispatch(changeLoadingOn());
    dispatch(signInRequest(email, password));

  }


  const onFinish = values => {
    // console.log('Success:', values);
    dispatch(changeLoadingOn());
    dispatch(signInRequest(values.email, values.password));
  };
  
  const onFinishFailed = errorInfo => {
    dispatch(changeLoadingOff());
    // console.log('Failed:', errorInfo);
  };

  return (
    <div className="site-card-border-less-wrapper">
       <Card title="Login" bordered={false} style={{ width: 400, marginTop: 60 }}>
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Insira seu e-mail!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Insira sua senha secreta!' }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {loading ? "Carregando..." : "Acessar"}
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </div>
  );


  // return (
  //   <Card>
  //     <CardBody>

  //       <CardImg className="logologin" src={logo} alt="logo alt" />

  //       <Form>

  //         <InputGroup className="mb-3">
  //           <Input type="email" placeholder="Email de Acesso" autoComplete="email"
  //             onChange={e => setemail(e.target.value)}
  //             value={email}
  //           />
  //         </InputGroup>

  //         <InputGroup className="mb-3">
  //           <Input type="password" placeholder="Senha Secreta" autoComplete="current-password"
  //             onChange={e => setpassword(e.target.value)}
  //             value={password}
  //           />
  //         </InputGroup>

  //         <Row>
  //           <Col xs="12">
  //             <Button type="submit" color="danger" className="px-4" onClick={handleSubmit}>{loading ? 'Carregando...' : 'Entrar'}</Button>
  //           </Col>
  //           {/* <Col xs="6" className="text-right">
  //             <Button color="secondary" className="px-0">Forgot password?</Button>
  //           </Col> */}
  //         </Row>

  //         {/* <Row>
  //           <Link to="/recoverypassword">
  //             <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
  //             <p>Recuperar Senha</p>
  //           </Link>
  //         </Row> */}

  //       </Form>

  //     </CardBody>
  //   </Card>
  // );


}
