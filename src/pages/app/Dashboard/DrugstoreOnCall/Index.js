import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  ContainerTabs,
  ItemTab,
  TextItemTab,
  ContainerTabPanel,
  ContainerList
} from './styles';


import ListData from './listdata/index';
import EditItem from './editItem/index';

import { getDrugstoreOncallListRequest } from '../../../../store/modules/painelMaster/drugstoreoncall/actions';
import { getCompanyListRequest } from '../../../../store/modules/app/company/actions';


export default function DrugstoreOnCall() {
  const dispatch = useDispatch();

  const [ismounted, setismounted] = useState(false);
  const [editmode, seteditmode] = useState(false);
  const [activeTab, setactiveTab] = useState(1);
  const [selectedItem, setselectedItem] = useState('');
  // const [parbusca, setparbusca] = useState('');

  const token = useSelector(state => state.auth.token)
  const companyList = useSelector(state => state.company.companyList);
  const drugstoreoncallList = useSelector(state => state.drugstoreoncallPainelMaster.drugstoreoncallList)



  useEffect(() => {
    if (!ismounted) {
      dispatch(getDrugstoreOncallListRequest(token))
      dispatch(getCompanyListRequest(token))
    }
    // console.log('dataaaa', drugstoreoncallList)

  }, [ismounted]);



  function handleactivetab(index = 1) {
    setactiveTab(index);
  }


  function handlechangeMode() {
    seteditmode(false);
    setactiveTab(1);

  }


  function changeToEdit(item) {
    setselectedItem(item);
    seteditmode(true);
    setactiveTab(2);

  }





  return (
    <Container>

      <ContainerTabs>
        <ItemTab onClick={() => setactiveTab(1)} color={activeTab === 1 ? '#6e6e6e' : '#6e6e6e10'}>
          <TextItemTab>Listagem</TextItemTab>
        </ItemTab>
        <>
          <ItemTab onClick={() => setactiveTab(2)} color={activeTab === 2 ? '#6e6e6e' : '#6e6e6e10'} >
            <TextItemTab>{editmode ? 'Editar' : 'Novo'}</TextItemTab>
          </ItemTab>
        </>
      </ContainerTabs>

      <ContainerTabPanel>
        {activeTab === 1 &&
          <ContainerList>
            <ListData
              changeToedit={(item) => changeToEdit(item)}
              data={drugstoreoncallList}
              />
          </ContainerList>
        }


        {activeTab === 2 &&
          <EditItem 
          handleactivetab={()=>handleactivetab()}
          editmode={editmode}
          handlechangeMode={() => handlechangeMode()}
          data={selectedItem}
          companies={companyList}
          />        
        }

      </ContainerTabPanel>
    </Container>
  );
}
