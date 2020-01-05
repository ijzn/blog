import { Conter } from './conter';

let conter = null;

describe('conter test', () => {


    console.log('discribe 1');
    beforeAll(() => {
        console.log('beforeAll');
    })
    
    afterAll(() => {
        console.log('afterAll');
    })
    
    // 每次执行测试用例前都会执行此钩子函数
    beforeEach(() => {
        conter = new Conter();
        console.log('beforeEach');
    })
    
    // 每次执行测试用例前都会执行此钩子函数
    afterEach(() => {
        console.log('afterEach');
    })


    describe('加法相关', () => {
        console.log('discribe 2');

        beforeEach(() =>{
            console.log('beforeEach test add');
        })
        // test.only('+1', () => {
        //     console.log("+1");
        //     conter.addOne()
        //     expect(conter.number).toBe(1)
        // })

        test('+1', () => {
            console.log("+1");
            conter.addOne()
            expect(conter.number).toBe(1)
        })
        test('+2', () => {
            console.log("+2");
            conter.addTwo()
            expect(conter.number).toBe(2)
        })
    })
    
    describe('减法相关', () => {
        console.log('discribe 3');

        test('-1', () => {
            console.log('-1');
            conter.minuOne();
            expect(conter.number).toBe(-1)
        })
        test('-2', () => {
            console.log('-2');
            conter.minuTwo();
            expect(conter.number).toBe(-2)
        })
    })
})

