import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import Pie from '../../charts/Pie';
import { connect } from 'react-redux';
import {
  clientesAtivosChart,
  segmentoEconomico,
  segmentoCliente
} from '../../../actions/perfilCarteiraActions';
import Bar from '../../charts/Bar';
import Kpi from '../../charts/Kpi';

function PerfilCarteira({
  clientesAtivosChart,
  perfilCarteira,
  segmentoCliente,
  segmentoEconomico
}) {
  const { clientes_ativos_chart, segmento_cliente } = perfilCarteira;
  useEffect(() => {
    clientesAtivosChart();
    segmentoCliente();
  }, [clientesAtivosChart, segmentoCliente]);

  return (
    <Box
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridAutoRows: 'minmax(100px, 250px)',
        gridGap: '1em',
        justifyItem: 'center'
      }}
    >
      {clientes_ativos_chart && <Pie data={clientes_ativos_chart} />}
      {segmento_cliente && <Bar data={segmento_cliente} />}
      <Pie data={clientes_ativos_chart} />
      <Pie data={clientes_ativos_chart} />
      <Kpi
        data={{ infor: 678, title: 'Volume de Crédito', time: '12 meses' }}
      />
    </Box>
  );
}

const mapStateToProps = state => ({
  perfilCarteira: state.perfilCarteira
});
export default connect(
  mapStateToProps,
  { clientesAtivosChart, segmentoCliente, segmentoEconomico }
)(PerfilCarteira);
