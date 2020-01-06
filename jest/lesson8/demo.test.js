import { generrateConfig, generrateAnotherConfig } from "./demo";

// test('测试 generrateConfig', () => {
//     expect(generrateConfig()).toMatchSnapshot({
//         time: expect.any(Date)
//     })
// })

// test('测试 generrateAnotherConfig', () => {
//     expect(generrateAnotherConfig()).toMatchSnapshot({
//         time: expect.any(Date)
//     })
// })

test("测试 generrateAnotherConfig", () => {
  expect(generrateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "damain": "baidu",
      "port": 8080,
      "server": "http://www.baidu.com",
      "time": Any<Date>,
    }
  `
  );
});
