jest.mock('./util');
import { demoFn } from './demo';
import { Util } from './util';

test('测试 demoFn', () => {
    // 因为 a b 方法异常复杂，真正运行的时候会比较耗费性能， 我们只要知道他执行过这个方法就好了，不需要真正的让他执行。
    demoFn();
    expect(Util).toHaveBeenCalled()
    console.log(Util.mock.instances[0]);
    expect(Util.mock.instances[0].a).toHaveBeenCalled()
    expect(Util.mock.instances[0].b).toHaveBeenCalled()
});