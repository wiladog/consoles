<style scoped lang="sass">
    .layout {
       





        display: flex;
        flex-direction: row;
        .layout-left {
            
            width: 200px;
            // margin-right: 10px;
            
            display: flex; 
            min-height: 100vh;   
            display: flex;
            flex-direction: column;
            

            .layout-logo{
                width: 90%;
                height: 30px;
                background: #5b6270;
                border-radius: 3px;
                margin: 15px auto;
            }
            .layout-nav {
                flex: 1;
                background: #464c5b;
            }

        }

        .layout-right {
            flex: 1;
            // background:#eee;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            .layout-header {
                display: flex;
                box-shadow: 0 1px 1px rgba(0,0,0,.1);
                background: #fff;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 10;
                // overflow: hidden;
                 height: 60px;
                 width: 100%;
                // .layout-header-nav {
                //     flex:1;
                // }
                .layout-header-icon {

                }
                .layout-header-nav {
                    display: flex;
                    flex: 1;
                    
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

            .layout-content {
                flex: 1;
            }
        }
    }


    

   
</style>
<template>
    <div class="layout">
        <div class="layout-left">
            <div class="layout-logo"></div>
                
            
            <div class="layout-nav">
            
                
            </div>
        </div>
        <div class="layout-right" >
        
                <div class="layout-header">
                    <div class="layout-header-icon">
                        <Button type="text" style="margin:6.5px 0;">
                            <Icon type="navicon" size="32"></Icon>
                        </Button>
                    </div>
                    <div class="layout-header-nav">
                        

                        <Menu mode="horizontal" theme="light"  >
                            <Menu-item name="1">
                                <Icon type="ios-paper"></Icon>
                                内容管理
                            </Menu-item>
                            <Menu-item name="2">
                                <Icon type="ios-people"></Icon>
                                用户管理
                            </Menu-item>
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="stats-bars"></Icon>
                                    统计分析
                                </template>
                                
                                    <Menu-item name="3-1">新增和启动</Menu-item>
                                    
                                
                            </Submenu>
                            
                        </Menu>

                        <Menu mode="horizontal" theme="light"  >
                            <Menu-item name="1">
                                <Icon type="ios-paper"></Icon>
                                内容管理
                            </Menu-item>
                            <Menu-item name="2">
                                <Icon type="ios-people"></Icon>
                                用户管理
                            </Menu-item>
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
                </div>
            
       
            
            <div class="layout-content">
                <div style="height:2000px;">
                    <div style="height:20px;"></div>
                    <Form :model="formItem" :label-width="80">
        <Form-item label="输入框">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="选择器">
            <Select v-model="formItem.select" placeholder="请选择">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
        </Form-item>
        <Form-item label="日期控件">
            <Row>
                <Col span="11">
                    <Date-picker type="date" placeholder="选择日期" v-model="formItem.date"></Date-picker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <Time-picker type="time" placeholder="选择时间" v-model="formItem.time"></Time-picker>
                </Col>
            </Row>
        </Form-item>
        <Form-item label="单选框">
            <Radio-group v-model="formItem.radio">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="多选框">
            <Checkbox-group v-model="formItem.checkbox">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="开关">
            <Switch v-model="formItem.switch" size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
            </Switch>
        </Form-item>
        <Form-item label="滑块">
            <Slider v-model="formItem.slider" range></Slider>
        </Form-item>
        <Form-item label="文本域">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
        <Form-item>
            <Button type="primary">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </Form-item>
    </Form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>
