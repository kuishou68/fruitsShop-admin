
<template>
  <view>
    <view class="uni-header">
      <view class="uni-group">
        <view class="uni-title"></view>
        <view class="uni-sub-title"></view>
      </view>
      <view class="uni-group">
        <input class="uni-search" type="text" v-model="query" @confirm="search" placeholder="请输入搜索内容" />
        <button class="uni-button" type="default" size="mini" @click="search">搜索</button>
        <button class="uni-button" type="default" size="mini" @click="navigateTo('./add')">新增</button>
        <button class="uni-button" type="default" size="mini" :disabled="!selectedIndexs.length" @click="delTable">批量删除</button>
      </view>
    </view>
    <view class="uni-container">
      <unicloud-db ref="udb" collection="uni-id-memberInfo" field="member_id,nickname,password,gender,status,mobile,mobile_confirmed,email,email_confirmed,avatar,wx_unionid,wx_openid,ali_openid,realname_auth,last_login_date,last_login_ip,token,inviter_uid,my_invite_code,register_ip,register_date" :where="where" page-data="replace"
        :orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
        v-slot:default="{data,pagination,loading,error,options}" :options="options">
        <uni-table :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe type="selection" @selection-change="selectionChange">
          <uni-tr>
              <uni-th align="center">会员ID</uni-th>  <uni-th align="center">昵称</uni-th>  <uni-th align="center">密码</uni-th>  <uni-th align="center">性别</uni-th>  <uni-th align="center">会员状态</uni-th>  <uni-th align="center">手机号码</uni-th>  <uni-th align="center">手机号验证状态</uni-th>  <uni-th align="center">邮箱</uni-th>  <uni-th align="center">邮箱验证状态</uni-th>  <uni-th align="center">头像地址</uni-th>  <uni-th align="center">微信unionid</uni-th>  <uni-th align="center">微信各个平台openid</uni-th>  <uni-th align="center">支付宝平台openid</uni-th>  <uni-th align="center">实名认证信息</uni-th>  <uni-th align="center">最后登录时间</uni-th>  <uni-th align="center">最后登录时</uni-th>  <uni-th align="center">会员token</uni-th>  <uni-th align="center">会员上级邀请者码</uni-th>  <uni-th align="center">会员自身邀请码</uni-th>  <uni-th align="center">注册时 IP 地址</uni-th>  <uni-th align="center">注册时间</uni-th>  
            <uni-th width="204" align="center">操作</uni-th>
          </uni-tr>
          <uni-tr v-for="(item,index) in data" :key="index">
               <uni-td align="center"> {{item.member_id}} </uni-td>    <uni-td align="center"> {{item.nickname}} </uni-td>    <uni-td align="center"> {{item.password}} </uni-td>    <uni-td align="center"> {{options.gender_valuetotext[item.gender]}} </uni-td>    <uni-td align="center"> {{options.status_valuetotext[item.status]}} </uni-td>    <uni-td align="center"> {{item.mobile}} </uni-td>    <uni-td align="center"> {{options.mobile_confirmed_valuetotext[item.mobile_confirmed]}} </uni-td>    <uni-td align="center"> <uni-link :href="'mailto:'+item.email" :text="item.email"></uni-link> </uni-td>    <uni-td align="center"> {{options.email_confirmed_valuetotext[item.email_confirmed]}} </uni-td>    <uni-td align="center"> {{item.avatar}} </uni-td>    <uni-td align="center"> {{item.wx_unionid}} </uni-td>    <uni-td align="center"> {{item.wx_openid}} </uni-td>    <uni-td align="center"> {{item.ali_openid}} </uni-td>    <uni-td align="center"> {{item.realname_auth}} </uni-td>    <uni-td align="center">     <uni-dateformat :date="item.last_login_date" :threshold="[0, 0]" /> </uni-td>    <uni-td align="center"> {{item.last_login_ip}} </uni-td>    <uni-td align="center"> {{item.token}} </uni-td>    <uni-td align="center"> {{item.inviter_uid}} </uni-td>    <uni-td align="center"> {{item.my_invite_code}} </uni-td>    <uni-td align="center"> {{item.register_ip}} </uni-td>    <uni-td align="center">     <uni-dateformat :date="item.register_date" :threshold="[0, 0]" /> </uni-td>   
            <uni-td align="center">
              <view class="uni-group">
                <button @click="navigateTo('./edit?id='+item._id, false)" class="uni-button" size="mini" type="primary">修改</button>
                <button @click="confirmDelete(item._id)" class="uni-button" size="mini" type="warn">删除</button>
              </view>
            </uni-td>
          </uni-tr>
        </uni-table>
        <view class="uni-pagination-box">
          <uni-pagination show-icon :page-size="pagination.size" v-model="pagination.current" :total="pagination.count"
            @change="onPageChanged" />
        </view>
      </unicloud-db>
    </view>
  </view>
</template>

<script>
  import { enumConverter } from '../../js_sdk/validator/uni-id-memberInfo.js';

  const db = uniCloud.database()
  // 表查询配置
  const dbOrderBy = '' // 排序字段
  const dbSearchFields = [] // 模糊搜索字段，支持模糊搜索的字段列表
  // 分页配置
  const pageSize = 20
  const pageCurrent = 1

  export default {
    data() {
      return {
        query: '',
        where: '',
        orderby: dbOrderBy,
        selectedIndexs: [],
        options: {
          pageSize,
          pageCurrent,
          ...enumConverter
        },
        imageStyles: {
          width: 64,
          height: 64
        }
      }
    },
    methods: {
      getWhere() {
        const query = this.query.trim()
        if (!query) {
          return ''
        }
        const queryRe = new RegExp(query, 'i')
        return dbSearchFields.map(name => queryRe + '.test(' + name + ')').join(' || ')
      },
      search() {
        const newWhere = this.getWhere()
        const isSameWhere = newWhere === this.where
        this.where = newWhere
        if (isSameWhere) { // 相同条件时，手动强制刷新
          this.loadData()
        }
      },
      loadData(clear = true) {
        this.$refs.udb.loadData({
          clear
        })
      },
      onPageChanged(e) {
        this.$refs.udb.loadData({
          current: e.current
        })
      },
      navigateTo(url, clear) {
        // clear 表示刷新列表时是否清除页码，true 表示刷新并回到列表第 1 页，默认为 true
        uni.navigateTo({
          url,
          events: {
            refreshData: () => {
              this.loadData(clear)
            }
          }
        })
      },
      // 多选处理
      selectedItems() {
        var dataList = this.$refs.udb.dataList
        return this.selectedIndexs.map(i => dataList[i]._id)
      },
      // 批量删除
      delTable() {
        this.$refs.udb.remove(this.selectedItems())
      },
      // 多选
      selectionChange(e) {
        this.selectedIndexs = e.detail.index
      },
      confirmDelete(id) {
        this.$refs.udb.remove(id)
      }
    }
  }
</script>
<style>
</style>
