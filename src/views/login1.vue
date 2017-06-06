<style lang="sass" scoped>
    /**
 * Created by truncate on 2017/5/18.
 * Author: 带鞋拖地
 * QQ: 327056088
 *
 * 《相思》· 王维
 * 红豆生南国，春来发几枝。
 * 愿君多采撷，此物最相思。
 */
body,html,.container{
    height: 100%;
    background: url(../assets/images/bg.jpg) top center no-repeat;
    background-size: cover;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    text-align: center;
}
.container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;


    .login {
        display: flex;
        flex-direction: row;
        width: 600px;
        height: 350px;
        max-height: 400px;
        border: 1px solid #dedede;
        background: #FFFFFF;

        .left {
            width: 320px;
            height: 100%;
            max-height: 100%;
            border-right: 1px solid #dedede;
            .welcome {
                text-align: center;
                height: 60px;
                line-height: 60px;
                font-size: 18px;
                font-weight: bold;
            }
            .form {
                padding-top: 1px;
                padding-left: 30px;
                padding-right: 30px;

            }
            .code-img {
                position: absolute;
                top: 0;
                right: 0;
                width: 120px;
                height: 50px;
                cursor: pointer;
            }
        }

        .scan {
            flex: 1;
            flex-direction: column;

            .qr-code{
                width: 100%;
                padding: 0;
                align-content: center;
                text-align: center;

                img {
                    width: 250px;
                    margin-top: 15px;
                    border: 1px dashed #dedede;
                }
            }

            .notice {
                font-size: 14px;
                padding-top: 10px;
                text-align: center;
            }
            .tel {
                font-size: 14px;
                padding-top: 12px;
                text-align: center;
            }
        }
    }
}

.container {
    .ivu-form-inline .ivu-form-item {
        display: block;
        margin-right: 0;
    }

}
.icon {
    width: 30px;
    padding: 0px;
}

</style>
<template>
    <div class="container merchant-login">
        <div class="login">
            <div class="left">
                <div class="welcome">欢迎登陆代码兔商户管理平台</div>
                <Form ref="formLogin" :model="formLogin" :rules="ruleValidate" inline class="form">
                    <Form-item prop="account">
                        <Input type="text" v-model="formLogin.account" placeholder="帐号 / 手机号" @on-enter="handleSubmit('formLogin')">
                        <Icon type="person" slot="prepend" class="icon"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item prop="password">
                        <Input type="password" v-model="formLogin.password" placeholder="请填写密码" >
                        <Icon type="locked" slot="prepend" class="icon"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item prop="code">
                        <Input type="text" v-model="formLogin.code" placeholder="请填写验证码" @on-enter="handleSubmit('formLogin')"></Input>
                        <img :src="verifyUrl" @click="refreshVerify()" class="code-img" title="点击切换验证码">
                    </Form-item>
                    <Form-item>
                        <Button type="primary" @click="handleSubmit('formLogin')">登录</Button>
                    </Form-item>
                </Form>
            </div>
            <div class="scan">
                <div class="qr-code"><img src="../assets/images/qrcode.jpg" alt=""></div>
                <div class="notice">微信扫描登陆更快捷</div>
                <div class="tel">客服电话:400-8181909</div>
            </div>
        </div>
    </div>
    

</template>
<script>

    export default{
        //watch 监听不到用它来
        //https://router.vuejs.org/zh-cn/advanced/navigation-guards.html 文档地址 标记组件内的钩子
        beforeRouteEnter (to, from, next) {
            next(vm => {
                // 通过 `vm` 访问组件实例'
                //解决进入路由不刷新验证码问题
                vm.verifyUrl = '/api/login/code?v=' + Math.random() * 1000
            })
        },
        data(){
            return{
                formLogin: {
                    account: '',
                    password: '',
                    code: ''
                },
                ruleValidate: {
                    account: [
                        { required: true, message: '请填写帐号', trigger: 'blur' },
                        { type: 'string', min: 3, message: '帐号长度不能低于3位', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '验证码不能为空', trigger: 'blur' },
                        { type: 'string', message: '验证码只能英文数字', trigger: 'blur', pattern: /^[a-z0-9A-Z]+$/ }
                    ]
                },
                verifyUrl: '',
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.request('MerchantLogin', this.formLogin).then((res) => {
                            if (res.status) {
                                this.$Message.success("登陆成功")
                                window.localStorage.setItem('merchantLogin', JSON.stringify(res.data.info))
                                window.localStorage.setItem('merchantToken', JSON.stringify(res.data.info.token))
                                this.$router.push({path: '/'})
                            } else {
                                this.$Message.error(res.msg)
                            }
                        })
                    } else {
                        this.$Message.error('表单验证失败!')
                    }
                })
            },
            //刷新切换验证码
            refreshVerify() {
                this.verifyUrl = ''
                setTimeout(() => {
                    this.verifyUrl = '/api/login/code?v=' + Math.random() * 1000
                }, 500)
            }
        },
        watch: {

        },
        components:{

        }
    }
</script>
