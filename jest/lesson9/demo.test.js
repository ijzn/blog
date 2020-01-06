jest.mock('./demo1.js')
import { fetchData } from './demo1';
const { getNumber } = jest.requireActual('./demo1.js')
test('fetchData 测试', async() => {
  return fetchData().then(res => {
    expect(res).toEqual('123')
  });
})

test('测试 getNumber', () => {
  expect(getNumber()).toEqual(123)
})