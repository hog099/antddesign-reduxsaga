import React from 'react';

import { ButtonAction, SpanLoading } from './styles';

export default function ListData({ data, changeToEdit }) {
  if (data.length === 0) {
    return (
      <tr><td colSpan="6"><SpanLoading>Carregando....</SpanLoading></td></tr>
    );
  } else {
    return (
      data.map((item, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index}</th>
            <td className="thnone">{item.codregistro}</td>
            <td>{item.name.substr(0,25)}...</td>
            <td className="thnone">{item.email}</td>
            <td className="thnone">{item.documento}</td>
            <td>
                <ButtonAction onClick={() => changeToEdit(item)} color="#009cd8" ><i className="fas fa-edit"></i></ButtonAction>
              {/* <ButtonAction onClick={() => { }} color="#FF3B79" ><i className="fas fa-trash"></i></ButtonAction> */}

            </td>
          </tr>
        );

      })
    );
  }
}
