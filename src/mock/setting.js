import Mock from 'mockjs';

Mock.mock('/api/setting', 'get', {
    code: 0,
    msg: "",
    data: {
        avatar: "https://img0.baidu.com/it/u=4148793634,1871875356&fm=26&fmt=auto&gp=0.jpg",
        siteTitle: "个人博客",
        github: "https://github.com/",
        qq: "765645296",
        qqQrCode: "https://riyugo.com/i/2021/04/27/sa8u2w.png",
        weixin: "Dra-demo",
        weixinQrCode: "https://riyugo.com/i/2021/04/27/s9joi5.png",
        mail: "wbl111@aliyun.com",
        icp: "黑ICP备17001719号",
        githubName: "Dra-99",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    }
})