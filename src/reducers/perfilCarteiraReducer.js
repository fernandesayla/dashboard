import {
  CLIENTES_ATIVOS_CHART,
  CLIENTES_IMPORTADOR_EXPORTADOR,
  SEGMENTO_CLIENTE,
  SEGMENTO_ECONOMICO,
  LIMITE_DE_CREDITO
} from '../actions/types';

const initialState = {
  clientes_ativos_chart: null,
  cliente_importador_exportador: null,
  segmento_cliente: null,
  segmento_economico: null,
  limite_credito: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLIENTES_IMPORTADOR_EXPORTADOR:
      return { ...state, cliente_importador_exportador: action.payload };

    case SEGMENTO_CLIENTE:
      return { ...state, segmento_cliente: action.payload };

    case SEGMENTO_ECONOMICO:
      return { ...state, segmento_economico: action.payload };

    case LIMITE_DE_CREDITO:
      return { ...state, limite_credito: action.payload };

    case CLIENTES_ATIVOS_CHART:
      return { ...state, clientes_ativos_chart: action.payload };
    default:
      return state;
  }
}
