import React, { useState, useEffect, useMemo } from 'react';
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

import ListData from './listdata/index';
import EditData from './EditCompany/Index';

// import { searchSponRequest } from '../../../../store/modules/painelMaster/sponsored/actions';
import { getCompanyListRequest } from '../../../../store/modules/app/company/actions';


export default function CompanyIndex() {
  const dispatch = useDispatch();

  const [ismounted, setismounted] = useState(false);
  const [editmode, seteditmode] = useState(false);
  const [activeTab, setactiveTab] = useState(1);
  const [selectedItem, setselectedItem] = useState('');
  const [parbusca, setparbusca] = useState('');
  const [DataCompaniesSearch, setDataCompaniesSearch] = useState([]);
  const [initialData, setinitialData] = useState([]);

  
  const companyList = useSelector(state => state.company.companyList);
  // const token = useSelector(state => state.auth.token)


  useEffect(() => {
    if (!ismounted) {
      dispatch(getCompanyListRequest());
      setismounted(true);
    }

  }, [ismounted]);


  function handleactivetab(index = 1) {
    setactiveTab(index);
  }

  function changeToEdit(item) {
    setselectedItem(item);
    seteditmode(true);
    setactiveTab(2);

  }

  // useEffect(() => {
  //   if (parbusca.length > 3) {
  //     dispatch(searchSponRequest(parbusca, token))
  //   }

  // }, [parbusca]);

  function loadingInitialCompanies() {
    if (companyList.length > 0 && ismounted) {
      let min = Math.ceil(0);
      let max = companyList.length;
      let random = Math.floor(Math.random() * (max - min));
      if (random < 0) {
        random = 0
      }
      let parte01 = companyList.slice(0, random);
      let parte02 = companyList.slice(random, companyList.length);
      let newArray = parte02.concat(parte01);

      let NewDataArray = newArray.slice(0, 25);

      setinitialData(NewDataArray)
    }
  }

  useMemo(() => {
    loadingInitialCompanies();
  }, [companyList]);


  useMemo(() => {
    if (parbusca.length >= 2) {
      let data = companyList.filter(item => {

        return item.name.toLowerCase().indexOf(parbusca.toLowerCase()) >= 0;


      });
      setDataCompaniesSearch(data);
    } else {
      setDataCompaniesSearch([]);
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

            <ListData
              changeToEdit={(item)=>changeToEdit(item)}
              data={DataCompaniesSearch.length > 0 ? DataCompaniesSearch : initialData}
            />
          </ContainerList>
        }


        {activeTab === 2 &&
          <EditData 
          handleactivetab={()=>handleactivetab()}
          data={selectedItem}
          />        
        }

      </ContainerTabPanel>
    </Container>
  );
}
