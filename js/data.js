export default {
    date: '',
    // ` 全部的书
    books:[
        { "name": "小王子", "page_all": 100, "each_read_page": 20, "start_time": "2018-05-15", "units": [{ "name": "小王子1-20页", "one_day_time": 1526428800000, "three_day_time": 1526601600000, "seven_day_time": 1526947200000, "fifteen_day_time": 1527638400000, "thirty_day_time": 1529020800000 }, { "name": "小王子21-40页", "one_day_time": 1526515200000, "three_day_time": 1526688000000, "seven_day_time": 1527033600000, "fifteen_day_time": 1527724800000, "thirty_day_time": 1529107200000 }, { "name": "小王子41-60页", "one_day_time": 1526601600000, "three_day_time": 1526774400000, "seven_day_time": 1527120000000, "fifteen_day_time": 1527811200000, "thirty_day_time": 1529193600000 }, { "name": "小王子61-80页", "one_day_time": 1526688000000, "three_day_time": 1526860800000, "seven_day_time": 1527206400000, "fifteen_day_time": 1527897600000, "thirty_day_time": 1529280000000 }, { "name": "小王子81-100页", "one_day_time": 1526774400000, "three_day_time": 1526947200000, "seven_day_time": 1527292800000, "fifteen_day_time": 1527984000000, "thirty_day_time": 1529366400000 }] },
        { "name": "小王子", "page_all": 100, "each_read_page": 20, "start_time": "2018-05-15", "units": [{ "name": "小王子1-20页", "one_day_time": 1526428800000, "three_day_time": 1526601600000, "seven_day_time": 1526947200000, "fifteen_day_time": 1527638400000, "thirty_day_time": 1529020800000 }, { "name": "小王子21-40页", "one_day_time": 1526515200000, "three_day_time": 1526688000000, "seven_day_time": 1527033600000, "fifteen_day_time": 1527724800000, "thirty_day_time": 1529107200000 }, { "name": "小王子41-60页", "one_day_time": 1526601600000, "three_day_time": 1526774400000, "seven_day_time": 1527120000000, "fifteen_day_time": 1527811200000, "thirty_day_time": 1529193600000 }, { "name": "小王子61-80页", "one_day_time": 1526688000000, "three_day_time": 1526860800000, "seven_day_time": 1527206400000, "fifteen_day_time": 1527897600000, "thirty_day_time": 1529280000000 }, { "name": "小王子81-100页", "one_day_time": 1526774400000, "three_day_time": 1526947200000, "seven_day_time": 1527292800000, "fifteen_day_time": 1527984000000, "thirty_day_time": 1529366400000 }] },
    ],
    // ` 一本书的对象
    newBook:{
        name:'',
        page_all:100,
        each_read_page:20,
        start_time:'',
        units:[]
        // all_units:'',//一本书分为几个单元
    },
    // ` 当前循环的数组，里面有所有书的单元
    currentList:[

    ],
    // ` 除了表格其他的是否显示
    showForm:true
    
}