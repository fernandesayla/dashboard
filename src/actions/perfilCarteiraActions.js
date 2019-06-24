import {
  CLIENTES_ATIVOS_CHART,
  CLIENTES_IMPORTADOR_EXPORTADOR,
  SEGMENTO_CLIENTE,
  SEGMENTO_ECONOMICO,
  LIMITE_DE_CREDITO
} from './types';

import axios from 'axios';
export const clientesImportadorExportador = (
  prefixo,
  visao
) => async dispatch => {
  const data = {};

  dispatch({ type: CLIENTES_IMPORTADOR_EXPORTADOR, payload: data });
};

export const segmentoCliente = (prefixo, visao) => async dispatch => {
  const data = [
    {
      country: 'AD',
      'hot dog': 84,
      'hot dogColor': 'hsl(275, 70%, 50%)',
      burger: 25,
      burgerColor: 'hsl(284, 70%, 50%)',
      sandwich: 159,
      sandwichColor: 'hsl(117, 70%, 50%)',
      kebab: 27,
      kebabColor: 'hsl(233, 70%, 50%)',
      fries: 39,
      friesColor: 'hsl(346, 70%, 50%)',
      donut: 200,
      donutColor: 'hsl(264, 70%, 50%)'
    },
    {
      country: 'AE',
      'hot dog': 42,
      'hot dogColor': 'hsl(104, 70%, 50%)',
      burger: 151,
      burgerColor: 'hsl(47, 70%, 50%)',
      sandwich: 101,
      sandwichColor: 'hsl(134, 70%, 50%)',
      kebab: 140,
      kebabColor: 'hsl(185, 70%, 50%)',
      fries: 186,
      friesColor: 'hsl(339, 70%, 50%)',
      donut: 158,
      donutColor: 'hsl(317, 70%, 50%)'
    },
    {
      country: 'AF',
      'hot dog': 21,
      'hot dogColor': 'hsl(47, 70%, 50%)',
      burger: 119,
      burgerColor: 'hsl(328, 70%, 50%)',
      sandwich: 41,
      sandwichColor: 'hsl(242, 70%, 50%)',
      kebab: 100,
      kebabColor: 'hsl(28, 70%, 50%)',
      fries: 133,
      friesColor: 'hsl(0, 70%, 50%)',
      donut: 78,
      donutColor: 'hsl(185, 70%, 50%)'
    },
    {
      country: 'AG',
      'hot dog': 185,
      'hot dogColor': 'hsl(236, 70%, 50%)',
      burger: 198,
      burgerColor: 'hsl(312, 70%, 50%)',
      sandwich: 186,
      sandwichColor: 'hsl(298, 70%, 50%)',
      kebab: 38,
      kebabColor: 'hsl(102, 70%, 50%)',
      fries: 68,
      friesColor: 'hsl(18, 70%, 50%)',
      donut: 0,
      donutColor: 'hsl(331, 70%, 50%)'
    },
    {
      country: 'AI',
      'hot dog': 112,
      'hot dogColor': 'hsl(299, 70%, 50%)',
      burger: 190,
      burgerColor: 'hsl(102, 70%, 50%)',
      sandwich: 121,
      sandwichColor: 'hsl(88, 70%, 50%)',
      kebab: 141,
      kebabColor: 'hsl(178, 70%, 50%)',
      fries: 181,
      friesColor: 'hsl(258, 70%, 50%)',
      donut: 17,
      donutColor: 'hsl(157, 70%, 50%)'
    },
    {
      country: 'AL',
      'hot dog': 10,
      'hot dogColor': 'hsl(52, 70%, 50%)',
      burger: 14,
      burgerColor: 'hsl(195, 70%, 50%)',
      sandwich: 47,
      sandwichColor: 'hsl(275, 70%, 50%)',
      kebab: 172,
      kebabColor: 'hsl(85, 70%, 50%)',
      fries: 79,
      friesColor: 'hsl(354, 70%, 50%)',
      donut: 198,
      donutColor: 'hsl(139, 70%, 50%)'
    },
    {
      country: 'AM',
      'hot dog': 129,
      'hot dogColor': 'hsl(232, 70%, 50%)',
      burger: 96,
      burgerColor: 'hsl(25, 70%, 50%)',
      sandwich: 109,
      sandwichColor: 'hsl(263, 70%, 50%)',
      kebab: 139,
      kebabColor: 'hsl(309, 70%, 50%)',
      fries: 49,
      friesColor: 'hsl(312, 70%, 50%)',
      donut: 110,
      donutColor: 'hsl(354, 70%, 50%)'
    }
  ];

  dispatch({ type: SEGMENTO_CLIENTE, payload: data });
};

export const segmentoEconomico = (prefixo, visao) => async dispatch => {
  const data = {};

  dispatch({ type: SEGMENTO_ECONOMICO, payload: data });
};

export const limiteDeCredito = (prefixo, visao) => async dispatch => {
  const data = {};

  dispatch({ type: LIMITE_DE_CREDITO, payload: data });
};

export const clientesAtivosChart = (prefixo, visao) => async dispatch => {
  const data = [
    {
      id: 'elixir',
      label: 'elixir',
      value: 569,
      color: 'hsl(350, 70%, 50%)'
    },
    {
      id: 'go',
      label: 'go',
      value: 137,
      color: 'hsl(136, 70%, 50%)'
    },
    {
      id: 'haskell',
      label: 'haskell',
      value: 477,
      color: 'hsl(334, 70%, 50%)'
    },
    {
      id: 'rust',
      label: 'rust',
      value: 262,
      color: 'hsl(299, 70%, 50%)'
    },
    {
      id: 'lisp',
      label: 'lisp',
      value: 320,
      color: 'hsl(340, 70%, 50%)'
    }
  ];
  dispatch({ type: CLIENTES_ATIVOS_CHART, payload: data });
};
