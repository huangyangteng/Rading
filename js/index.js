import data from './data.js'
// import methods from './methods.js'



let vm=new Vue({
    el: '#app',
    data, 
    methods:{
        // `清空表单
        clearForm(){
            this.newBook = {
                name: '',
                page_all: null,
                each_read_page: 20,
                start_time: '',
                units: []
                // all_units:'',//一本书分为几个单元
            }
        },
        // ` 提交数据
        submitMsg(){
            this.newBook.units=this.bookUnits;
            this.books.push(this.newBook);
            this.clearForm();
        },
        // `打印的时候隐藏其他
        hideOther(){
            this.showForm=!this.showForm;
        }
    },
    computed:{
        // 全书分为几个单元
        unitsNum(){
            // 如果相除等于0,不用加1
            if(this.newBook.page_all % this.newBook.each_read_page===0){
                return Math.floor(this.newBook.page_all / this.newBook.each_read_page)
            }else{
                return Math.floor(this.newBook.page_all / this.newBook.each_read_page + 1)
            }
        },
        // 时间数组 一天 三天 
        timeArr(){
            let oneDayMs = 24 * 60 * 60 * 1000;
            let timeUnits=[];
            for (let i = 0; i < 5; i++) {
                timeUnits.push(oneDayMs * (Math.pow(2, i + 1) - 1))
            }
            return timeUnits;
        },
        // 一本书分为多少个单元，每个单元有哪些内容
        bookUnits(){
            let units=[],
                unit={
                    name:'',
                    one_day_time: '',
                    three_day_time: '',
                    seven_day_time: '',
                    fifteen_day_time: '',
                    thirty_day_time: ''
                };
            let startPage = 1,
                unitLength = this.newBook.each_read_page;//初始值
                // 开始时间
            let startTime = Date.parse(this.newBook.start_time);
            
            for (let i = 0; i < this.unitsNum; i++) {
                // 拼名字
                unit.name = `${this.newBook.name+startPage}-${parseInt(unitLength) + parseInt(startPage)-1}页`;
                startPage = startPage+unitLength;
                // 拼阅读日期
                unit.one_day_time=this.timeArr[0]+startTime;
                unit.three_day_time=this.timeArr[1]+startTime;
                unit.seven_day_time=this.timeArr[2]+startTime;
                unit.fifteen_day_time=this.timeArr[3]+startTime;
                unit.thirty_day_time=this.timeArr[4]+startTime;
                // 日期++
                startTime = startTime+24*60*60*1000;
                units.push(unit);
                unit = {
                    name: '',
                    one_day_time: null,
                    three_day_time: null,
                    seven_day_time: null,
                    fifteen_day_time: null,
                    thirty_day_time: null
                }
            }
            return units;
            
        },
        // 今天要完成的任务
        todaysWork(){
            let temp=[];
            this.books.forEach((item,index)=>{
                
                console.log(item.units)
                temp.push(...item.units)
            })
            console.log(temp);
            let work=temp.filter(item=>{
                return item.one_day_time===this.dateNow;
            });
            return work;

        },
        // 今天的时间
        dateNow(){
            let date=new Date();
            let now= new Date(`${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate()}`);
            return Date.parse(now)
        }
   


    },
    mounted(){
        console.log(this.unitsNum)
        console.log(this.bookUnits)
    },
    filters:{
        translateTime(val){
            // 格式化时间
            let date=new Date(val);
            return date.toLocaleString().split(' ')[0]
        },
        nameSplit(val){
            // 去除名字
            return val.replace(/.+(\d+-\d+)/g,'$1')
        }
    }
})


// let pageAll=328;
// let eachDayPage=20;
// let bookUnits=Math.floor(pageAll/eachDayPage+1);//总天数
// console.log(bookUnits)//17天读完  书分为17个部分

// //1天 3天 7天 15天 31天 
// // 2^i - 1 
// let timeArr=[];//累计要加的天数
// let oneDayMs=24*60*60*1000;
// for (let i = 0; i < 5; i++) {
//     timeArr.push(oneDayMs* (Math.pow(2, i + 1)-1))
// }
// console.log(timeArr);

// let startDay='',//开始时间
//     eachUnit={

//     },//每天的任务
//     book=[];//所有的任务

// let bookName='bookName';//书名字
// for (let i = 0; i < bookUnits.length; i++) {
//     eachUnit.name=bookName;
//     book.push(eachUnit)

    
// }
// console.log(book)




