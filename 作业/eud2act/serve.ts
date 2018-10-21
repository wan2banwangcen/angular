import express from 'express';
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json());
//同步课
//声明一个类
export class Course{
    constructor(
            public id:number,
            public courseName:string,
            public images:string,
            public task:number,
            public person:number
        ){}
}
//创建数组
const courses=[
    new Course(1,'2016级混合应用',"http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    10,90),
    new Course(2,'2017级web开发（二）',"http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",
    11,100),
    new Course(3,'测试方向—Web系统测试',"http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",
    12,150),
    new Course(4,'HTML5与CSS3前端开发',"http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",
    13,50),
    new Course(5,'3、4班测试基础',"http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",
    5,100),
    new Course(6,'2018级信息素养',"http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",
    10,80),
    new Course(7,'2018级计算机导论',"http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    8,49),
    new Course(8,'2017级数据结构',"http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",
    10,50),
    new Course(9,'软件过程',"http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg?imageView2/1/w/230/h/130",
    15,30),
    new Course(10,'2017级网络原理',"http://usercontent.edu2act.cn/media/team/18-03-07/BGWzBhRgmujgPmLn4efeFd.png?imageView2/1/w/230/h/130",
    5,60),
    new Course(11,'JavaScript进阶',"http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130",
    4,56),
    new Course(12,'2016级操作系统',"http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130",
    7,398)
]

//课程
export class Lesson{
    constructor(
            public id:number,
            public lessonName:string,
            public images:string,
            public introduce:string,
            public hour:number,
            public person:number,
            public video:string,
            public kecheng:string,
            public shuoming:string,
            public jieshao:string
        ){}
}
const lessons=[
    new Lesson(1,'Github 开源之旅视频课程第一季：启程',"http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    '完成本课程之后，能够达到以下目标：-实名注册GitHub账户-能够在GitHub上搜索资料-能够评估人和',14,3735,'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4','基础知识&实用工具','课程说明（上）','Github是什么？学习Github的理由，以及课程安排等。'),
    new Lesson(2,'CSS3基础',"http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    'CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特点的用',12,2316,'http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4','WEB前端开发','CSS3边框','学习元素的边框的圆角、以及边框背景.'),
    new Lesson(3,'HTML5基础',"http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    'HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的Javascript API',12,1310,'http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4','WEB前端开发','地理位置定位','学习在html5中如何Geolocation实现地理位置定位'),
    new Lesson(4,'Selenium IDE WEB自动化测试入门视频课程（中）',"http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",
    '上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用',13,3794,'http://usercontent.edu2act.cn/media/cs/16-11-08/RD6KKJxUrAMJNkaQX9wBnN.mp4','软件测试','课程简介','说明了本课程的前置课程是Selenium IDE WEB自动化测试入门（上），建议大家完成上篇课程的学习并亲自动手完成上篇课程中演示的几个自动化测试案例.'),
    new Lesson(5,'扩展的ICONIX软件过程实践',"http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190",
    'ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的时间',12,2269,'http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4','基础知识&实用工具','愿景','扩展的ICONIX软件过程实践'),
    new Lesson(6,'Selenium IDE WEB自动化测试入门视频课程上',"http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190",
    '上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用',11,3135,'http://usercontent.edu2act.cn/media/cs/16-10-28/TSHTtAgU94rzHE4q49JeeW.mp4','软件测试','课程简介','介绍了课程开讲的背景，Selenium 相关的WEB自动化测试技术已经发展多年了，在很多公司都有应用，在网上有很多资料。'),
    new Lesson(7,'网页制作与开发',"http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190",
    '本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快',11,3135,'http://usercontent.edu2act.cn/media/cs/16-11-10/ZjH3sA2sSZhvj699c2MbyR.mp4','WEB前端开发','字体样式修饰','CSS中对于文字的字体、字号、粗细及是否倾斜的修饰方式'),
    new Lesson(8,'产品&交互设计那些事儿',"http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190",
    '本课程是和学院一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些具体',11,3135,'http://usercontent.edu2act.cn/media/cs/16-09-08/SQBTUxgWYUHeiVaFzXhJuQ.mp4','产品设计','产品&交互新人容易犯的n个错误','列举了作为产品新人和交互新人在做设计的时候容易犯的一些错误，让他们在工作中避免这些错误。'),
]
//社区
export class community{
    constructor(
            public id:number,
            public lessonName:string,
            public image1:string,
            public image2:string,
            public introduce:string,
            public author:string,
            public hour:string,
            public read:number,
            public suggection:number

        ){}
}
const communitys=[
    new community(1,'WEB开发(二)--函数','http://www.edu2act.net//static/img/m.png','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg',
    '(一)函数三要素函数的三要素为函数名、参数（形参，实参），返回值（二）函数定义与调用函数定义的关键字为function，不能省略，也不能简写','刘秀梅','2018-10-11 15:10',1199,4),
    new community(2,'类定义关键字详解','http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg',
    'JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来','3-张馨元','2018-10-9 19:21',42,3),
    new community(3,'一个java文件中可包含多个main方法','http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg',
    '一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main','3-张馨元','2018-10-9 17:19',34,1),
    new community(4,'数据结构--线性表的经典应用','http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg',
    '1. 一元多项式的表示和相加 在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。','杨伟彬','2018-10-8 13:14',48,2),
    new community(5,'栈和队列之间的相互转化','http://usercontent.edu2act.cn/media/userheader/18-03-11/H2v8Qhkq4DnS33dBbBYKMo.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg',
    '队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元','7-李建涛','2018-10-1 12:51',54,6),
    new community(6,'WEB开发(二)--字符串类型','http://www.edu2act.net//static/img/m.png','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/qrZ4o7jdDUfyqA96vEw74A.jpg',
    '在C语言中的数据类型中没有字符串类型，字符串是字符数组，那么字符串可以遍历。在前端JavaScript中数组和字符串是两种数据类型，也就是字符串类型是存在的，但是字符串仍然可以遍历，通过下标的方式获取。为什么？ 为甚么字符串还','刘秀梅','2018-9-29 14:22',209,4),
]

// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
app.get('/api/courses/:id',(req,res)=>{
    //console.log(req.params);
    res.json(courses.find((ele)=>ele.id==req.params.id));
});
app.get('/api/courses/',(req,res)=>{
    res.end(JSON.stringify(courses));//JSON.stringify()数组转字符串
})
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
})
app.get('/api/lessons/',(req,res)=>{
    res.end(JSON.stringify(lessons));
})
app.get('/api/lessons/:id',(req,res)=>{
    //console.log(req.params);
    res.json(lessons.find((ele)=>ele.id==req.params.id));
});
app.get('/api/community/',(req,res)=>{
    res.end(JSON.stringify(communitys));
})
app.get('/api/community/:id',(req,res)=>{
    //console.log(req.params);
    res.json(communitys.find((ele)=>ele.id==req.params.id));
});
app.listen(8080);