import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-info-develop profile-card': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'background': '#2f7bb3',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.4 }],
    'textShadow': [{ 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.4)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.4)' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-info-develop profile-image': {
    'height': [{ 'unit': 'px', 'value': 100 }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'borderRadius': '50%',
    'WebkitBorderRadius': '50%',
    'backgroundColor': 'black',
    'boxShadow': [{ 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'WebkitBoxShadow': 'rgba(0, 0, 0, 0.2) 0px 2px 0px 0px'
  },
  'page-info-develop profile-name': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '600',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'page-info-develop profile-id': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'opacity': '0.6'
  },
  'page-info-develop profile-desc': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'opacity': '0.6',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'page-info-develop info-col': {
    'height': [{ 'unit': 'px', 'value': 60 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 4 }]
  },
  'page-info-develop info-num': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '500',
    'opacity': '0.8'
  },
  'page-info-develop info-unit': {
    'marginTop': [{ 'unit': 'px', 'value': 6 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'opacity': '0.4'
  }
});