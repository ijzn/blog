// react 事务   开始的时候做某件事，结束的时候做某件事

const perfrom = (anyMethed, wrappers) =>{
    wrappers.forEach(element => {
        element.init()
    });
    anyMethed();
    wrappers.forEach(element => {
        element.close()
    });
}

perfrom(()=>{
    console.log('说话');
},[
    {
        init(){
            console.log('你好');
        },
        close() {
            console.log('bye');
        }
    },
    {
        init(){
            console.log('Hi,1');
        },
        close(){
            console.log('bye, 1');
        }
    }
])


