import dva from 'dva'

const app = dva()

app.model(require('./products'))
