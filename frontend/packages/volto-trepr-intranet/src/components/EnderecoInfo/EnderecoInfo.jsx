import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@plone/components';

const EnderecoInfo = ({ content }) => {
  const { endereco, complemento, cidade, estado, cep } = content;

  return (
    <Container narrow className="contato">
      <h2>Endereço:</h2>
      <Container className="telefone">
        <span>Endereço</span>: <span>{endereco}</span>
      </Container>
      <Container className="email">
        <span>Complemento</span>: <span>{complemento}</span>
      </Container>
      <Container className="email">
        <span>Cidade</span>: <span>{cidade}</span>
      </Container>
      <Container className="email">
        <span>Estado</span>: <span>{estado}</span>
      </Container>
      <Container className="email">
        <span>CEP</span>: <span>{cep}</span>
      </Container>
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
EnderecoInfo.propTypes = {
  content: PropTypes.shape({
    email: PropTypes.string,
    telefone: PropTypes.string,
    enderco: PropTypes.string,
    complemento: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    cep: PropTypes.string,
  }).isRequired,
};

export default EnderecoInfo;
