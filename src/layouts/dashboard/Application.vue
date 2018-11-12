<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
</style>

<template>
    <div class="layout" >
        <Layout :style="{height: '100vh'}">
            <MyHeader/>
            <Layout>
                <Content :style="{padding: '0 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{height: '80vh'}">
                            <MySidebar/>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                             <router-view></router-view>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <MyFooter/>
        </Layout>
    </div>
</template>

<script>
import MyHeader from './Header';
import MySidebar from './Sidebar';
import MyFooter from './Footer';

  export default {
    components: {
        MyHeader,
        MySidebar,
        MyFooter
    }
  }
</script>
