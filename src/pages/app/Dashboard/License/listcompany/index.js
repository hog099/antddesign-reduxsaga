import React from 'react';
import { useSelector } from 'react-redux';


import { Container, ButtonAction } from './styles';
import { Table } from 'reactstrap';


export default function ListagemCompany({ changeToedit }) {

  const sponsList = useSelector(state=>state.sponPainelMaster.sponsList)


  return (
    <Container>     

      <Table responsive hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Registro</th>
            <th>Nome</th>
            <th>Licensa</th>
          </tr>
        </thead>
        <tbody>

          {sponsList.length > 0 ?
            sponsList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.codregistro}</td>
                  <td>{item.name}</td>
                  <td>
                    <ButtonAction color="#009cd8" onClick={() => changeToedit(item)} ><i className="fas fa-edit"></i></ButtonAction>
                  </td>
                </tr>
              );
            })
            :
            <tr><td colSpan="8">Sem Dados Listados</td></tr>
          }

        </tbody>
      </Table>
    </Container>
  );
}