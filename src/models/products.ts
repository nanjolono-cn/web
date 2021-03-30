export default {
  namespace: 'products',
  state: [
    { name: 'dva', id: 1 },
    { name: 'antd', id: 2 }
  ],
  reducers: {
    delete(state: Array<any>, { payload: id }: { payload: number }) {
      return state.filter((item) => item.id !== id)
    },
  },
}
