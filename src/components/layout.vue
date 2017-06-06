<style scoped lang="sass">
    .layout {
       

        display: flex;
        min-height: 100vh;
        flex-direction: column;

        .layout-header {
            box-shadow: 0 1px 1px rgba(0,0,0,.1);
            
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
            height: 60px;
            width: 100%;
            display: flex;
            // align-items: center;
            background: #464c5b;
            .layout-logo {
                width: 200px;
             
                align-self: center;
                text-align:center;
                color: #fff;
                font-size: 24px;

               
            }

            .layout-nav {
                flex: 1;
                background: #fff;
                display: flex;
                justify-content: space-between;
                .ivu-menu {
                        
                        .ivu-menu-item {
                            border-color: #fff;
                            &.ivu-menu-item-active,
                            &:hover {
                                border-bottom: 2px solid #3399ff;
                                a {
                                    color: #3399ff;
                                }
                            }
                            a {
                                color: #657180;
                            }
                        }

                        .ivu-menu-submenu {
                            border-color: #fff;
                            &.ivu-menu-item-active,
                            &:hover {
                                border-bottom: 2px solid #3399ff;
                                
                            }
                            .ivu-menu-item {
                                &.ivu-menu-item-active,
                                &:hover {
                                    border-bottom: 0;
                                    a {
                                        color: #3399ff;
                                    }
                                }
                            }
                        }

                    }
            }

        }

        .layout-main {
            flex:1;
            
            display: flex;
            .layout-left {
                width: 200px;
                background: #464c5b;
                position:fixed;
                left:0;
                top:60;
                min-height: 100vh;
                margin-top: 60px;
                flex: 0 0 200px;
            }    
            .layout-right {
                flex:1;
                margin-top: 60px;
                width: 100%;
                
                .layout-content {
                    flex:1;
                    padding: 15px 15px 15px 215px;
                }   
                .layout-footer {
                    box-shadow: 0 1px 1px rgba(0,0,0,.1);
                    background: #eee;
                    padding-right: 200px;
                    align-self:center;
                    position: fixed;
                    bottom: 0;
                    left: 200px;
                    z-index: 10;
                    height: 40px;
                    line-height: 40px;
                    width: 100%;
                    text-align:center;
                    

                }
            }
            

        }

                
    }



    

   
</style>
<template>
    <div class="layout">
        <div class="layout-header">
            <div class="layout-logo">
                <Icon type="ios-photos" ></Icon>
                <span>wila consoles</span>
            </div>
            <div class="layout-nav">

                    
                <Menu mode="horizontal" theme="light"  >
                    <Menu-item name="1">
                        <Icon type="ios-paper"></Icon>
                        
                        <router-link to="/admin/add" >内容</router-link>
                    </Menu-item>
                    <Menu-item name="2">
                        <Icon type="ios-people"></Icon>
                        <router-link to="/admin/index" >用户</router-link>
                    </Menu-item>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="chatbubble-working"></Icon>
                            微信
                        </template>
                        
                            <Menu-item name="3-1">新增和启动</Menu-item>
                            
                        
                    </Submenu>
                    
                </Menu>
                <Menu mode="horizontal" theme="light"  >
                    <Menu-item name="1">
                        <router-link to="/" >首页</router-link>
                    </Menu-item>
                    <Menu-item name="2">
                        缓存
                    </Menu-item>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="person"></Icon>
                            管理员
                        </template>
                        <Menu-group title="使用">
                            <Menu-item name="3-1">新增和启动</Menu-item>
                            <Menu-item name="3-2">活跃分析</Menu-item>
                            <Menu-item name="3-3">时段分析</Menu-item>
                        </Menu-group>
                        <Menu-group title="留存">
                            <Menu-item name="3-4">用户留存</Menu-item>
                            <Menu-item name="3-5">流失用户</Menu-item>
                        </Menu-group>
                        <Menu-item name="3-1">
                            <Icon type="android-exit"></Icon>
                            <router-link to="/login">退出</router-link>
                        </Menu-item>
                    </Submenu>
                    
                </Menu>
            </div>
        </div>
        <div class="layout-main">
            <div class="layout-left">
                <Menu theme="dark" width="200">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </template>
                    <Menu-item name="1-1">文章管理</Menu-item>
                    <Menu-item name="1-2">评论管理</Menu-item>
                    <Menu-item name="1-3">举报管理</Menu-item>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <Menu-item name="2-1">新增用户</Menu-item>
                    <Menu-item name="2-2">活跃用户</Menu-item>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <Menu-group title="使用">
                        <Menu-item name="3-1">新增和启动</Menu-item>
                        <Menu-item name="3-2">活跃分析</Menu-item>
                        <Menu-item name="3-3">时段分析</Menu-item>
                    </Menu-group>
                    <Menu-group title="留存">
                        <Menu-item name="3-4">用户留存</Menu-item>
                        <Menu-item name="3-5">流失用户</Menu-item>
                    </Menu-group>
                </Submenu>
            </Menu>
                
                    
            </div>
            <div class="layout-right">
                
                <div class="layout-content"  ref="contents">
                   
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                            
                        
                
                </div>
                <div class="layout-footer">
                    2017-2099 © wiladog
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            // this.contentStyle.marginLeft = document.getElementById('fixed').offsetWidth+'px';
            window.addEventListener('resize', this.handlewResize, false);
            // this.$refs.aa.reset();
        },
        data () {
            return {
                contentStyle: {

                    marginLeft: '15px'
                },
                tab0: true,
                tab1: true,
                tab2: true,
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            },
            handlewResize () {
                
                this.$nextTick(() => {
                    // this.$refs.aa.tableWidth = this.$refs.contents.getBoundingClientRect().width -30;
                    
                    // console.info(document.getElementById('tb-001').offsetWidth);
                    // console.info(document.offsetWidth);
                    // this.$refs.aa.handleResize();

                    // console.info(this.$refs.fixed);
                    // console.info(document.getElementById('fixed').offsetWidth);

                    // this.contentStyle.marginLeft = document.getElementById('fixed').offsetWidth+'px';
                });
                
                // console.info(this.$refs.contents.getBoundingClientRect().width);
                // console.info(this.$refs.aa.tableWidth);
                
            }
        }
    }
</script>
