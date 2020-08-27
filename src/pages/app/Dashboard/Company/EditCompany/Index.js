import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Title, DividerHeader, ButtonAction } from './styles';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { getAllCategoriesRequest, sponUpdateRequest } from '../../../../../store/modules/app/company/actions';
import { changeLoadingOn } from '../../../../../store/modules/components/loading/actions';



export default function EditCompany({data, handleactivetab}) {
  const dispatch = useDispatch();

  const [ismounted, setismounted] = useState();

  const [category, setcategory] = useState('');
  const [id, setid] = useState('');
  const [name, setname] = useState('');
  const [razao_social, setrazao_social] = useState('');
  const [documento, setdocumento] = useState('');
  const [email, setemail] = useState('');
  const [responsavel, setresponsavel] = useState('');
  const [telefone01, settelefone01] = useState('');
  const [telefone02, settelefone02] = useState('');
  const [numerowhatsapp, setnumerowhatsapp] = useState('');
  const [logradouro, setlogradouro] = useState('');
  const [numero, setnumero] = useState('');
  const [bairro, setbairro] = useState('');
  const [cep, setcep] = useState('');
  const [estado, setestado] = useState('');
  const [cidade, setcidade] = useState('');

  const userToken = useSelector(state => state.auth.token);
  const allCategoriesList = useSelector(state => state.company.allCategoriesList);
  const loading = useSelector(state => state.loading.loading);


  useEffect(() => {
    if (!ismounted) {
      dispatch(getAllCategoriesRequest());
      setismounted(true);
    }
    // console.log('dataaa', companyData.id_categoria)
    window.addEventListener('keydown', function (e) {
      var code = e.which || e.keyCode;
      if (code == 116) e.preventDefault();
      else return true;
      // fazer algo aqui para quando a tecla F5 for premida
    });

  }, [ismounted]);

  useEffect(() => {
    if (data) {
      setid(data.id);
      setcategory(data.id_categoria);
      setname(data.name ? data.name : '');
      setrazao_social(data.razao_social ? data.razao_social : '');
      setdocumento(data.documento ? data.documento : '');
      setemail(data.email ? data.email : '');
      setresponsavel(data.responsavel ? data.responsavel : '');
      settelefone01(data.telefone01 ? data.telefone01 : '');
      settelefone02(data.telefone02 ? data.telefone02 : '');
      setnumerowhatsapp(data.numerowhatsapp ? data.numerowhatsapp : '');
      setlogradouro(data.logradouro ? data.logradouro : '');
      setnumero(data.numero ? data.numero : '');
      setbairro(data.bairro ? data.bairro : '');
      setcep(data.cep ? data.cep : '');
      setestado(data.estado ? data.estado : '');
      setcidade(data.cidade ? data.cidade : '');
    }
  }, [data]);



  function handleCancelform() {
    setname('');
    setrazao_social('');
    setdocumento('');
    setemail('');
    setresponsavel('');
    settelefone01('');
    settelefone02('');
    setnumerowhatsapp('');
    setlogradouro('');
    setnumero('');
    setbairro('');
    setcep('');
    setestado('');
    setcidade('');
    handleactivetab()
  }


  function handleSubmit(e) {
    dispatch(changeLoadingOn());
    e.preventDefault();
    const values = {
      id_categoria: category,
      name: name,
      razao_social: razao_social,
      documento: documento,
      email: email,
      responsavel: responsavel,
      telefone01: telefone01,
      telefone02: telefone02,
      numerowhatsapp: numerowhatsapp,
      logradouro: logradouro,
      numero: numero,
      bairro: bairro,
      cep: cep,
      estado: estado,
      cidade: cidade,
    }

    // console.log('submit', values);
    dispatch(sponUpdateRequest(id, userToken, values));
  }



  return (
    <Container>
      <Form>
        <Row form>

          <Col md={6}>
            <FormGroup>
              <Label for="nameinput">Nome | Fantasia</Label>
              <Input type="text" name="name" id="nameinput"
                placeholder="Nome Fantasia"
                value={name} readOnly={false}
                onChange={(e) => setname(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="razaosocialinput">Razão Social</Label>
              <Input type="text" name="razao_social" id="razaosocialinput"
                placeholder="Razão Social"
                value={razao_social} readOnly={false}
                onChange={(e) => setrazao_social(e.target.value)}
              />
            </FormGroup>
          </Col>

        </Row>


        <FormGroup>
          <Label for="categorySelect">Categoria</Label>
          <Input type="select" name="categoria" id="categorySelect"
            onChange={(e) => setcategory(e.target.value)}
            onBlur={(e) => setcategory(e.target.value)}
            value={category}
            placeholder="Selecione uma Categoria"
          >
            <option value="">Selecione uma Categoria</option>
            {allCategoriesList && allCategoriesList.map((item, index) => {
              return (
              <option key={index} value={item.id}>{item.name}</option>
              );
            })
            }
          </Input>
        </FormGroup>


        <Row form>

          <Col md={4}>
            <FormGroup>
              <Label for="documentoinput">Documento</Label>
              <Input type="text" name="documento" id="documentoinput"
                placeholder="Documento"
                value={documento} readOnly={false}
                onChange={(e) => setdocumento(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label for="emailinput">Email</Label>
              <Input type="email" name="email" id="emailinput"
                placeholder="E-mail"
                value={email} readOnly={false}
                onChange={(e) => setemail(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label for="respinput">Responsável</Label>
              <Input type="text" name="responsavel" id="respinput"
                placeholder="Responsável"
                value={responsavel} readOnly={false}
                onChange={(e) => setresponsavel(e.target.value)}
              />
            </FormGroup>
          </Col>

        </Row>



        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="telefone01input">Telefone 01</Label>
              <Input type="text" name="telefone01" id="telefone01input"
                placeholder="Telefone 01"
                value={telefone01} readOnly={false}
                onChange={(e) => settelefone01(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label for="telefone02input">Telefone 02</Label>
              <Input type="text" name="telefone02" id="telefone02input"
                placeholder="Telefone 02"
                value={telefone02} readOnly={false}
                onChange={(e) => settelefone02(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label for="numerowhatsappinput">Número Whatsapp</Label>
              <Input type="text" name="numerowhatsapp" id="numerowhatsappinput"
                placeholder="Número Whatsapp"
                value={numerowhatsapp} readOnly={false}
                onChange={(e) => setnumerowhatsapp(e.target.value)}
              />
            </FormGroup>
          </Col>

        </Row>


        <Row form>

          <Col md={4}>
            <FormGroup>
              <Label for="logradouroinput">Logradouro</Label>
              <Input type="text" name="logradouro" id="logradouroinput"
                placeholder="Logradouro"
                value={logradouro} readOnly={false}
                onChange={(e) => setlogradouro(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label for="numeroinput">Número</Label>
              <Input type="text" name="numero" id="numeroinput"
                placeholder="Número"
                value={numero} readOnly={false}
                onChange={(e) => setnumero(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label for="bairroinput">Bairro</Label>
              <Input type="text" name="bairro" id="bairroinput"
                placeholder="Bairro"
                value={bairro} readOnly={false}
                onChange={(e) => setbairro(e.target.value)}
              />
            </FormGroup>
          </Col>

        </Row>


        <Row form>

          <Col md={4}>
            <FormGroup>
              <Label for="cepinput">CEP</Label>
              <Input type="text" name="cep" id="cepinput"
                placeholder="CEP"
                value={cep} readOnly={true}
                onChange={(e) => setcep(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label for="estadoinput">Estado</Label>
              <Input type="text" name="estado" id="estadoinput"
                placeholder="Estado"
                value={estado} readOnly={true}
                onChange={(e) => setestado(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label for="cidadeinput">Cidade</Label>
              <Input type="text" name="cidade" id="cidadeinput"
                placeholder="Cidade"
                value={cidade} readOnly={true}
                onChange={(e) => setcidade(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>


          {/* <ButtonAction onClick={handleSubmit} color="#009cd8" >{loading ? 'Carregando...' : 'Atualizar'}</ButtonAction> */}
          <Button className="buttonform" color="success" size="md" block onClick={handleSubmit} >{loading ? 'Carregando...' : 'Salvar'}</Button>
          <Button className="buttonform" color="secondary" size="md" block onClick={() => handleCancelform()} >Cancelar</Button>
      </Form>


    </Container>
  );
}
