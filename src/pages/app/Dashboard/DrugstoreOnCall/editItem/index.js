import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, ContainerForm } from './styles';
import { Form, Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';

import { createDrugstoreoncallRequest, updateDrugstoreoncallRequest } from '../../../../../store/modules/painelMaster/drugstoreoncall/actions';
import { getListCities } from '../../../../../store/modules/app/welcome/actions';
import { changeLoadingOn } from '../../../../../store/modules/components/loading/actions';


export default function EditItem({ editmode, handlechangeMode, data, companies, handleactivetab }) {
  const dispatch = useDispatch();

  const [ismounted, setismounted] = useState(false);
  const [company, setcompany] = useState('');
  const [city, setcity] = useState('');
  const [descricao, setdescricao] = useState('');
  const [date_start, setdate_start] = useState('');
  const [date_end, setdate_end] = useState('');

  const token = useSelector(state => state.auth.token);
  const citiesList = useSelector(state => state.welcome.citiesList);


  useEffect(() => {
    if (!ismounted) {
      dispatch(getListCities());
      setismounted(true);
    }
  }, [ismounted]);


  useEffect(() => {
    if (data) {
      // console.log(format(new Date(data.date_start), "MM-dd-yyyy"), format(new Date(data.date_end), "MM-dd-yyyy"))
      // console.log(data.date_end)
      // console.log(format(new Date(data.date_end), "yyyy-dd-MM"))
      
      // let datai = format(new Date(data.date_start), "yyyy-dd-MM")
      // let dataf = format(new Date(data.date_end), "yyyy-dd-MM")
      // console.log(datai, dataf)
          
      setcity(data.city);
      setdescricao(data.descricao);
      // setdate_start(datai);
      // setdate_end(dataf);
    }
  }, [data]);



  function handleCancelform() {
    setcity('');
    setdescricao('');
    setdate_start('');
    setdate_end('');
    handlechangeMode()
    handleactivetab()
  }


  function handleSubmit() {
    if(!editmode){
      //Create
      const values = {
        id_company: company,
        city: city,
        descricao: descricao,
        date_start: date_start,
        date_end: date_end,
        status: 1
      }
      
      
      // console.log('onSubmit', values)
      dispatch(changeLoadingOn());
      dispatch(createDrugstoreoncallRequest(values, token));
      
    }else{
      
      //Update
      const values = {
        descricao: descricao,
        date_start: date_start,
        date_end: date_end,
        status: 1
      }
      
      // console.log('onSubmit', values)
      dispatch(changeLoadingOn());
      dispatch(updateDrugstoreoncallRequest(data.id, values, token));
    }

  }




  return (
    <Container>

      <ContainerForm>

        <Form>
          <Row form>
            {!editmode && 
            <>
            <Col md={4}>
              <FormGroup>
                <Label for="companySelect">Empresa</Label>
                <Input type="select" name="company" id="companySelect"
                  onChange={(e) => setcompany(e.target.value)}
                  value={company}
                  placeholder="Selecione uma Empresa"
                >
                  <option value="">Selecione uma Empresa</option>
                  {companies && companies.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>{item.name}</option>
                    );
                  })
                  }
                </Input>
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Label for="categorySelect">Cidades</Label>
                <Input type="select" name="city" id="citySelect"
                  onChange={(e) => setcity(e.target.value)}
                  value={city}
                  placeholder="Selecione uma Cidade"
                >
                  <option value="">Selecione uma Cidade</option>
                  {citiesList && citiesList.map((item, index) => {
                    return (
                      <option key={index} value={item.name}>{item.name}</option>
                    );
                  })
                  }
                </Input>
              </FormGroup>
            </Col>
            </>
            }

            <Col md={editmode ? 12 : 4}>
              <FormGroup>
                <Label for="inputdescricao">Descrição</Label>
                <Input type="text"
                  name="descricao"
                  value={descricao}
                  id="inputdescricao"
                  placeholder="Descrição - Referência"
                  onChange={e => setdescricao(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="inputdate_start">Data Início</Label>
                <Input type="date"
                  name="date_start"
                  value={date_start}
                  id="inputdate_start"
                  placeholder="Data Início"
                  onChange={e => setdate_start(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="inputdate_end">Data Final</Label>
                <Input type="date"
                  name="date_end"
                  value={date_end}
                  id="inputdate_end"
                  placeholder="Data Final"
                  onChange={e => setdate_end(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>


          <Button className="buttonform" color="success" size="md" block onClick={() => handleSubmit()} >Salvar</Button>
          <Button className="buttonform" color="secondary" size="md" block onClick={() => handleCancelform()} >Cancelar</Button>

        </Form>
      </ContainerForm>

    </Container>
  );
}