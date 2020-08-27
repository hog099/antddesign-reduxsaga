import React from 'react';

import { Container, ButtonAction } from './styles';
import { Table } from 'reactstrap';


export default function ListagemCompany({ data, changeToedit }) {

  
  return (
    <Container>     

      <Table responsive hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Data Início</th>
            <th>Data Fim</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>

          {data.length > 0 ?
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.company.name}</td>
                  <td>{item.date_start}</td>
                  <td>{item.date_end}</td>
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