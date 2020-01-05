import {fetchData} from './fetchData';

test('异步 成功', async () => {
    const res = await fetchData();
    expect(res.data).toEqual({
        success: true
    })
})

test('异步 404', async() => {
    expect.assertions(1)
    try {
        await fetchData();
    } catch (e) {
        expect(e.toString().includes('404')).toBeTruthy()
    }
})