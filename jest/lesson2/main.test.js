// const math = require('./main.js')
// const { add } = math;
import { add } from './main';

test('加法 3 + 7', () => {
    expect(add(3,7)).toBe(10)
})


