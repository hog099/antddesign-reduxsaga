import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  ContainerSearch,
  ContainerTabs,
  ItemTab,
  TextItemTab,
  ContainerTabPanel,
  ContainerList
} from './styles';

import { FormGroup, Label, Input } from 'reactstrap';

import ListTableCompany from './listcompany/index';
import EditLicense from './editlicense/';

import { searchSponRequest } from '../../../../store/modules/painelMaster/sponsored/actions';


export default function License() {
  const dispatch = useDispatch();

  const [editmode, seteditmode] = useState(false);
  const [activeTab, setactiveTab] = useState(1);
  const [selectedItem, setselectedItem] = useState('');
  const [parbusca, setparbusca] = useState('');

  const token = useSelector(state => state.auth.token)


  function handleactivetab(index = 1) {
    setactiveTab(index);
  }

  function changeToEdit(item) {
    setselectedItem(item);
    seteditmode(true);
    setactiveTab(2);

  }

  useEffect(() => {
    if (parbusca.length > 3) {
      dispatch(searchSponRequest(parbusca, token))
    }

  }, [parbusca]);




  return (
    <Container>

      <ContainerTabs>
        <ItemTab onClick={() => setactiveTab(1)} color={activeTab === 1 ? '#6e6e6e' : '#6e6e6e10'}>
          <TextItemTab>Listagem</TextItemTab>
        </ItemTab>
        {activeTab === 2 &&
        <>
          <ItemTab onClick={() => setactiveTab(2)} color={activeTab === 2 ? '#6e6e6e' : '#6e6e6e10'} >
            <TextItemTab>Editar</TextItemTab>
          </ItemTab>
        </>
        }
      </ContainerTabs>

      <ContainerTabPanel>
        {activeTab === 1 &&
          <ContainerList>
            <ContainerSearch>
              <FormGroup>
                <Label for="inputsearch">Buscar Empresa</Label>
                <Input
                  type="text"
                  name="search"
                  id="inputsearch"
                  value={parbusca}
                  placeholder="Digite o nome da Empresa"
                  onChange={e => setparbusca(e.target.value)}
                />
              </FormGroup>
            </ContainerSearch>

            <ListTableCompany
              changeToedit={(item) => changeToEdit(item)}
            />
          </ContainerList>
        }


        {activeTab === 2 &&
          <EditLicense 
          handleactivetab={()=>handleactivetab()}
          data={selectedItem.license}
          />        
        }

      </ContainerTabPanel>
    </Container>
  );
}
