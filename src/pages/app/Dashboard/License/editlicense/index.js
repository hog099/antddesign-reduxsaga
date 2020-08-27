import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, ContainerForm } from './styles';
import { Form, Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';

import { updateLicenseRequest } from '../../../../../store/modules/painelMaster/sponsored/actions';
import { changeLoadingOn } from '../../../../../store/modules/components/loading/actions';


export default function EditLicense({ data, handleactivetab }) {
  const dispatch = useDispatch();

  const [products, setproducts] = useState('');
  const [offers, setoffers] = useState('');
  const [ads, setads] = useState('');
  const [posts, setposts] = useState('');
  const [selectedPoints, setselectedPoints] = useState(false);
  const [points_rescue, setpoints_rescue] = useState('');
  const [points_expired, setpoints_expired] = useState('');
  const [selectedPayments, setselectedPayments] = useState(false);
  const [selectedOpenHours, setselectedOpenHours] = useState(false);
  const [selectedSocialIcons, setselectedSocialIcons] = useState(false);
  const [selectedAvaliation, setselectedAvaliation] = useState(false);
  const [selectedhighlightwhatsdo, setselectedhighlightwhatsdo] = useState(false);
  const [selectedadbanner, setselectedadbanner] = useState(false);
  const [selectedInfoIcons, setselectedInfoIcons] = useState(false);
  const [selectedUseSchedule, setselectedUseSchedule] = useState(false);
  const [selectedAcceptDelivery, setselectedAcceptDelivery] = useState(false);
  const [selectedUseDelivery, setselectedUseDelivery] = useState(false);

  const token = useSelector(state => state.auth.token);
  // const operationFlagSucessful = useSelector(state => state.productpainel.operationFlagSucessful);


  // useEffect(() => {
  //   if (operationFlagSucessful) {
  //     handleCancelform();
  //   }
  // }, [operationFlagSucessful]);


  useEffect(() => {
    if (data) {
      setproducts(data.products);
      setoffers(data.offers);
      setads(data.ads);
      setposts(data.posts);
      setselectedPoints(data.points);
      setpoints_rescue(data.points_rescue);
      setpoints_expired(data.points_expired);
      setselectedPayments(data.payments);
      setselectedOpenHours(data.openhours);
      setselectedSocialIcons(data.socialicons);
      setselectedAvaliation(data.avaliation);
      setselectedhighlightwhatsdo(data.highlightwhatsdo);
      setselectedadbanner(data.adbanner);
      setselectedInfoIcons(data.infoicons);
      setselectedUseSchedule(data.useschedule);
      setselectedAcceptDelivery(data.acceptdelivery);
      setselectedUseDelivery(data.usedelivery);
    }
  }, [data]);



  function handleCancelform() {
    setproducts('');
    setoffers('');
    setads('');
    setposts('');
    setselectedPoints(false);
    setpoints_rescue('');
    setpoints_expired('');
    setselectedPayments(false);
    setselectedOpenHours(false);
    setselectedSocialIcons(false);
    setselectedAvaliation(false);
    setselectedhighlightwhatsdo(false);
    setselectedadbanner(false);
    setselectedInfoIcons(false);
    setselectedUseSchedule(false);
    setselectedAcceptDelivery(false);
    setselectedUseDelivery(false);
    handleactivetab()
  }


  function handleSubmit() {
    //Update
    const values = {
      products: parseInt(products),
      offers: parseInt(offers),
      ads: parseInt(ads),
      posts: parseInt(posts),
      points: selectedPoints,
      points_rescue: parseInt(points_rescue),
      points_expired: parseInt(points_expired),
      payments: selectedPayments,
      openhours: selectedOpenHours,
      socialicons: selectedSocialIcons,
      avaliation: selectedAvaliation,
      highlightwhatsdo: selectedhighlightwhatsdo,
      adbanner: selectedadbanner,
      infoicons: selectedInfoIcons,
      useschedule: selectedUseSchedule,
      acceptdelivery: selectedAcceptDelivery,
      usedelivery: selectedUseDelivery,
    }

    dispatch(changeLoadingOn());
    dispatch(updateLicenseRequest(data.id, values, token));

  }




  return (
    <Container>

      <ContainerForm>

        <Form>
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="inputproducts">Produtos</Label>
                <Input type="number"
                  name="products"
                  value={products}
                  id="inputproducts"
                  placeholder="Qtd de Produtos"
                  onChange={e => setproducts(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="inputoffers">Ofertas</Label>
                <Input type="number"
                  name="offers"
                  value={offers}
                  id="inputoffers"
                  placeholder="Qtd de Ofertas"
                  onChange={e => setoffers(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="inputads">Anúncios</Label>
                <Input type="number"
                  name="ads"
                  value={ads}
                  id="inputads"
                  placeholder="Qtd de Anúncios"
                  onChange={e => setads(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="inputposts">Postagens</Label>
                <Input type="number"
                  name="posts"
                  value={posts}
                  id="inputposts"
                  placeholder="Qtd de Postagens"
                  onChange={e => setposts(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={4}>
              <FormGroup row className="selectmargin">
                <Label for="selectpoints" sm={12}>Pontos</Label>
                <Col sm={12}>
                  <Input type="select"
                    name="selectedPoints"
                    id="selectpoints"
                    value={selectedPoints}
                    onChange={e => setselectedPoints(e.target.value)}
                  >
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="inputpoints_rescue">Pontos Resgate</Label>
                <Input type="number"
                  name="points_rescue"
                  value={points_rescue}
                  id="inputpoints_rescue"
                  placeholder="Qtd Resgate"
                  onChange={e => setpoints_rescue(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="inputpoints_expired">Pontos Expirar</Label>
                <Input type="number"
                  name="points_expired"
                  value={points_expired}
                  id="inputpoints_expired"
                  placeholder="Dias para Expirar"
                  onChange={e => setpoints_expired(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={4}>
              <FormGroup row className="selectmargin">
                <Label for="selectpayments" sm={12}>Forma Pagamento</Label>
                <Col sm={12}>
                  <Input type="select"
                    name="selectedPayments"
                    id="selectpayments"
                    value={selectedPayments}
                    onChange={e => setselectedPayments(e.target.value)}
                  >
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup row className="selectmargin">
                <Label for="selectopenhours" sm={12}>Horário Funcionamento</Label>
                <Col sm={12}>
                  <Input type="select"
                    name="selectedOpenHours"
                    id="selectopenhours"
                    value={selectedOpenHours}
                    onChange={e => setselectedOpenHours(e.target.value)}
                  >
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup row className="selectmargin">
                <Label for="selectsocialicons" sm={12}>Redes Sociais</Label>
                <Col sm={12}>
                  <Input type="select"
                    name="selectedSocialIcons"
                    id="selectsocialicons"
                    value={selectedSocialIcons}
                    onChange={e => setselectedSocialIcons(e.target.value)}
                  >
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>

          </Row>


          <Row form>
            <Col md={4}>
              <FormGroup row className="selectmargin">
                <Label for="selectavaliation" sm={12}>Notas Avaliação</Label>
                <Col sm={12}>
                  <Input type="select"
                    name="selectedAvaliation"
                    id="selectavaliation"
                    value={selectedAvaliation}
                    onChange={e => setselectedAvaliation(e.target.value)}
                  >
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup row className="selectmargin">
                <Label for="selecthighlightwhatsdo" sm={12}>O que Fazer</Label>
                <Col sm={12}>
                  <Input type="select"
                    name="selectedhighlightwhatsdo"
                    id="selecthighlightwhatsdo"
                    value={selectedhighlightwhatsdo}
                    onChange={e => setselectedhighlightwhatsdo(e.target.value)}
                  >
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup row className="selectmargin">
                <Label for="selectadbanner" sm={12}>Banner Anúncio</Label>
                <Col sm={12}>
                  <Input type="select"
                    name="selectedadbanner"
                    id="selectadbanner"
                    value={selectedadbanner}
                    onChange={e => setselectedadbanner(e.target.value)}
                  >
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
          </Row>


          <Row form>
            <Col md={4}>
              <FormGroup row className="selectmargin">
                <Label for="selectinfoicons" sm={12}>Icones Info</Label>
                <Col sm={12}>
                  <Input type="select"
                    name="selectedInfoIcons"
                    id="selectinfoicons"
                    value={selectedInfoIcons}
                    onChange={e => setselectedInfoIcons(e.target.value)}
                  >
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup row className="selectmargin">
                <Label for="selectuseschedule" sm={12}>Usa Agendamento</Label>
                <Col sm={12}>
                  <Input type="select"
                    name="selectedUseSchedule"
                    id="selectuseschedule"
                    value={selectedUseSchedule}
                    onChange={e => setselectedUseSchedule(e.target.value)}
                  >
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup row className="selectmargin">
                <Label for="selectacceptdelivery" sm={12}>Aceita Delivery</Label>
                <Col sm={12}>
                  <Input type="select"
                    name="selectedAcceptDelivery"
                    id="selectacceptdelivery"
                    value={selectedAcceptDelivery}
                    onChange={e => setselectedAcceptDelivery(e.target.value)}
                  >
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
          </Row>


          <Row form>
            <Col md={6}>
              <FormGroup row className="selectmargin">
                <Label for="selectusedelivery" sm={12}>Usa Delivery</Label>
                <Col sm={12}>
                  <Input type="select"
                    name="selectedUseDelivery"
                    id="selectusedelivery"
                    value={selectedUseDelivery}
                    onChange={e => setselectedUseDelivery(e.target.value)}
                  >
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </Input>
                </Col>
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