import React from 'react';
import { Table } from 'reactstrap';

import { Container} from './styles';
import ListData from './listData';


export default function ListagemData({ data, changeToEdit }) {


  return (
    <Container>

      <Table responsive hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th className="thnone">Registro</th>
            <th>Nome</th>
            <th className="thnone">E-mail</th>
            <th className="thnone">Documento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
            <ListData data={data} changeToEdit={(item)=>changeToEdit(item)} />
        </tbody>
      </Table>

    </Container>
  );
}
