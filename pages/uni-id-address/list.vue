
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
      <unicloud-db ref="udb" collection="uni-id-address,opendb-city-china" field="user_id,name,alias,mobile,mobile_area_code,province_code,city_code,area_code{name},address,formatted_address,zip_code,email,is_default" :where="where" page-data="replace"
        :orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
        v-slot:default="{data,pagination,loading,error,options}" :options="options">
        <uni-table :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe type="selection" @selection-change="selectionChange">
          <uni-tr>
              <uni-th align="center">user_id</uni-th>  <uni-th align="center">收货人</uni-th>  <uni-th align="center">地址别名</uni-th>  <uni-th align="center">手机号</uni-th>  <uni-th align="center">国际区号</uni-th>  <uni-th align="center">省</uni-th>  <uni-th align="center">市</uni-th>  <uni-th align="center">省市区</uni-th>  <uni-th align="center">详细住址</uni-th>  <uni-th align="center">formatted_address</uni-th>  <uni-th align="center">邮编</uni-th>  <uni-th align="center">邮箱</uni-th>  <uni-th align="center">默认地址</uni-th>  
            <uni-th width="204" align="center">操作</uni-th>
          </uni-tr>
          <uni-tr v-for="(item,index) in data" :key="index">
               <uni-td align="center"> {{item.user_id}} </uni-td>    <uni-td align="center"> {{item.name}} </uni-td>    <uni-td align="center"> {{item.alias}} </uni-td>    <uni-td align="center"> {{item.mobile}} </uni-td>    <uni-td align="center"> {{item.mobile_area_code}} </uni-td>    <uni-td align="center"> {{item.province_code}} </uni-td>    <uni-td align="center"> {{item.city_code}} </uni-td>    <uni-td align="center"> {{item.area_code[0] && item.area_code[0].name}} </uni-td>    <uni-td align="center"> {{item.address}} </uni-td>    <uni-td align="center"> {{item.formatted_address}} </uni-td>    <uni-td align="center"> {{item.zip_code}} </uni-td>    <uni-td align="center"> <uni-link :href="'mailto:'+item.email" :text="item.email"></uni-link> </uni-td>    <uni-td align="center"> {{item.is_default == true ? '✅' : '❌'}} </uni-td>   
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
  import { enumConverter } from '../../js_sdk/validator/uni-id-address.js';

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
