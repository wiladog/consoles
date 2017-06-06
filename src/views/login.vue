<style lang="sass" scoped>

    .login {
        background: url(../assets/images/login-bg.jpg) top center no-repeat;
        width: 100%;
        min-height: 100vh;
        background-size: cover;

        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        
        .fm {
            // width: 320px;
            height: 100%;
            border: 1px solid #dedede;
            background: #fff;
            align-self: center;
            text-align: center;
            border-radius: 3px;
            // flex: 1;

            
            
            .login-header {
                display: flex;
                
                justify-content: space-between;
                .login-header-left {
                    width: 47px;
                }
                .login-header-center {
                    height: 47px;
                    line-height: 47px;
                    font-size: 18px;
                    font-weight: bold;
                }
                .login-header-right {
                    width: 47px;
                    cursor: pointer;
                }
            }

            .login-contents {
                padding: 20px 20px 20px 20px;
                
                // 
                .login-form {
                    // border: 1px solid #eee;
                    // padding: 5px;
                    width: 250px;
                    height: 250px;
                    // background: red;
                    .login-oths,.login-btns {
                        display: flex;
                        justify-content:space-between;
                        margin-bottom: 10px;
                    }

                    .icon {
                        width: 30px;
                        padding: 0px;
                    }

                    #captcha {
                        margin: -7px -7px -9px -7px;
                        cursor: pointer;
                        border-bottom-right-radius: 5px;
                        border-top-right-radius: 5px;
                    }
                    // margin-bottom: 20px;

                }
                .login-qrcode {
                    border: 1px dashed #eee;
                    padding: 5px;
                    text-align: center;
                    width: 250px;
                    height: 250px;

                    #login-qr {
                        width: 180px;
                        height: 180px;
                        text-align: center;
                    }
                    
                }
            }
          
            
        }
        
    }

</style>
<template>
    <div class="login">
        
        <div class="fm">
            
            <div class="login-header">
                <div class="login-header-left"></div>
                <div class="login-header-center">{{ headers.title }}登录</div>
                <div class="login-header-right" >
                    <Tooltip :content="headers.tips" placement="top-end" :delay="500">
                     <img :src="headers.rtimg" height="47" width="47" @click="switchLoginType()">
                    </Tooltip>
                </div>
            </div>
            <div class="login-contents">
                <div class="login-form" v-show="headers.title == '密码'">
                    <Form :model="loginData"  :rules="ruleValidate" ref="formLogin" >
                    <Form-item prop="account">
                        <Input type="text" v-model="loginData.account" placeholder="账号" @on-enter="handleSubmit('formLogin')">
                            <Icon type="ios-person-outline"  slot="prepend" class="icon"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item prop="password">
                        <Input type="password" v-model="loginData.password" placeholder="密码" @on-enter="handleSubmit('formLogin')">
                            <Icon type="ios-locked-outline" slot="prepend" class="icon"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item prop="captcha" >
                        <Input type="text" v-model="loginData.captcha" placeholder="验证码" @on-enter="handleSubmit('formLogin')">
                            <Icon type="ios-barcode-outline" slot="prepend" class="icon"></Icon>
                            <img  src="http://n.api.admin.hdpfans.dev/captcha/default" slot="append" width="80" height="30" title="刷新验证码" @click="refreshCaptcha()" ref="captcha"  id="captcha"/>
                        </Input>
                    </Form-item>
                    <div class="login-oths">
                        <div class="oths-keep-login">
                            <Poptip  trigger="hover" placement="right">
                                <Checkbox>十天内免登录</Checkbox>
                                <div slot="content">
                                    <p>为了您的信息安全，请不要在网吧</p>
                                    <p>或公用电脑上使用此功能</p>
                                </div>
                            </Poptip>
                        </div>
                        <div class="oths-forget-password">
                            <router-link to="/findpwd">忘记密码？</router-link>
                        </div>
                    </div>

                    <div class="login-btns">
                        <div class="btns-login">
                            <Button type="primary"  :loading="loading" @click="handleSubmit('formLogin')">登录
                            <span v-show="loading">...</span>
                        </Button>
                        </div>
                        <div class="btns-register">
                            <Button  @click="handleSubmit('formLogin')">注册
                        </Button>
                        </div>
                    </div>
                </Form>
                </div>
                <div class="login-qrcode" v-show="headers.title == '扫码'">
                    <img src="../assets/images/qrcode.jpg" id="login-qr">
                    <p>打开手机 <Icon type="qr-scanner"></Icon> 登录 更安全的登录方式</p>
                </div>
            </div>
            
        </div>
                
    </div>
</template>
<script>
import Util from '../libs/util';
    export default {
        data () {
            return {
                loginData: {
                    account:'',
                    password:'',
                    captcha:''
                },
                loading: false,
                headers: {
                    title: '密码',
                    rtimg: 'src/assets/images/qr-login.png',
                    tips:'扫码登录更安全'
                },
                a:{
                    title: '密码',
                    rtimg: 'src/assets/images/qr-login.png',
                    tips:'扫码登录更安全'
                },
                b:{
                    title: '扫码',
                    rtimg: 'src/assets/images/ac-login.png',
                    tips:'密码登录在这里'
                },
                ruleValidate: {
                    account: [
                        { required: true, message: '账号不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ],
                    captcha: [
                        { required: true, message: '验证码不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    
                    if (valid) {
                        this.loading = true;
                        let that = this;
                        // Util.ajax.get('/apis/cps',{
                         Util.ajax.get('/apis/cps',{    
                            params:{
                                captcha:this.loginData.captcha
                            }
                        })
                      .then(function (response) {
                        if(response.data.status) {
                            that.$router.push({ name: 'admin', params: { userId: 123 }});
                        } else {
                            that.$Message.error({
                                content: response.data.message,
                                duration: 3
                            });
                            that.refreshCaptcha();
                        }
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                        // console.info(this.Util);
                        // this.loading = true;
                        // let that = this;
                        // setTimeout(function() {
                        //     that.$Message.success("登陆成功");
                        //     that.$router.push({ name: 'admin', params: { userId: 123 }});
                        // }, 1000);
                    } else {
                        return false;
                    }
                })
            },
            refreshCaptcha() {
                this.$refs.captcha.src = 'http://n.api.admin.hdpfans.dev/captcha/default?'+Math.random();
            },
            switchLoginType() {
                console.info(this.headers.title);
                if(this.headers.title == '密码') {
                    this.headers = this.b;
                    
                } else {
                    this.headers = this.a;
                    
                }
            }
        }
    }
</script>
