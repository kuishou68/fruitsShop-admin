
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
      <unicloud-db ref="udb" collection="uni-id-base-order" field="title,type,pay_type,total_fee,platform,status,is_refund,refund_amount,refund_count,create_time,update_time,paid_time,refund_time,refund_desc,transaction_id,info,user_id" :where="where" page-data="replace"
        :orderby="orderby" :getcount="true" :page-size="options.pageSize" :page-current="options.pageCurrent"
        v-slot:default="{data,pagination,loading,error,options}" :options="options">
        <uni-table :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe type="selection" @selection-change="selectionChange">
          <uni-tr>
              <uni-th align="center">商品标题</uni-th>  <uni-th align="center">订单类型</uni-th>  <uni-th align="center">支付渠道</uni-th>  <uni-th align="center">订单总金额</uni-th>  <uni-th align="center">下单平台类型</uni-th>  <uni-th align="center">订单状态</uni-th>  <uni-th align="center">is_refund</uni-th>  <uni-th align="center">退款金额</uni-th>  <uni-th align="center">总退款笔数</uni-th>  <uni-th align="center">订单创建时间</uni-th>  <uni-th align="center">订单更新时间</uni-th>  <uni-th align="center">订单付款时间</uni-th>  <uni-th align="center">订单完成退款时间</uni-th>  <uni-th align="center">退款原因</uni-th>  <uni-th align="center">微信或支付宝交易单号</uni-th>  <uni-th align="center">自定义的订单拓展信息</uni-th>  <uni-th align="center">user_id</uni-th>  
            <uni-th width="204" align="center">操作</uni-th>
          </uni-tr>
          <uni-tr v-for="(item,index) in data" :key="index">
               <uni-td align="center"> {{item.title}} </uni-td>    <uni-td align="center"> {{item.type}} </uni-td>    <uni-td align="center"> {{item.pay_type}} </uni-td>    <uni-td align="center"> {{item.total_fee}} </uni-td>    <uni-td align="center"> {{item.platform}} </uni-td>    <uni-td align="center"> {{item.status}} </uni-td>    <uni-td align="center"> {{item.is_refund == true ? '✅' : '❌'}} </uni-td>    <uni-td align="center"> {{item.refund_amount}} </uni-td>    <uni-td align="center"> {{item.refund_count}} </uni-td>    <uni-td align="center">     <uni-dateformat :date="item.create_time" :threshold="[0, 0]" /> </uni-td>    <uni-td align="center">     <uni-dateformat :date="item.update_time" :threshold="[0, 0]" /> </uni-td>    <uni-td align="center">     <uni-dateformat :date="item.paid_time" :threshold="[0, 0]" /> </uni-td>    <uni-td align="center">     <uni-dateformat :date="item.refund_time" :threshold="[0, 0]" /> </uni-td>    <uni-td align="center"> {{item.refund_desc}} </uni-td>    <uni-td align="center"> {{item.transaction_id}} </uni-td>    <uni-td align="center"> {{item.info}} </uni-td>    <uni-td align="center"> {{item.user_id}} </uni-td>   
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
  import { enumConverter } from '../../js_sdk/validator/uni-id-base-order.js';

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
