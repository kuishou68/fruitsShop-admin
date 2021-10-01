<template>
  <view class="container">
    <unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" :options="options" collection="uni-id-base-order" field="order_id,order_number,type,pay_type,total_fee,platform,status,create_time,update_time,transaction_id,info,is_refund,refund_amount,refund_count,paid_time,refund_time,refund_desc,member_id" :where="queryWhere" :getone="true" :manual="true">
      <view v-if="error">{{error.message}}</view>
      <view v-else-if="loading">
        <uni-load-more :contentText="loadMore" status="loading"></uni-load-more>
      </view>
      <view v-else-if="data">
           <view>
     <text>订单ID:</text>
                     <text>{{data.order_id}}</text>            
   </view> 
    <view>
     <text>订单号:</text>
                     <text>{{data.order_number}}</text>            
   </view> 
    <view>
     <text>订单类型:</text>
                     <text>{{data.type}}</text>            
   </view> 
    <view>
     <text>支付渠道:</text>
                     <text>{{data.pay_type}}</text>            
   </view> 
    <view>
     <text>订单总金额:</text>
                     <text>{{data.total_fee}}</text>            
   </view> 
    <view>
     <text>下单平台类型:</text>
                     <text>{{data.platform}}</text>            
   </view> 
    <view>
     <text>订单状态:</text>
                     <text>{{data.status}}</text>            
   </view> 
    <view>
     <text>订单创建时间:</text>
     <uni-dateformat :date="data.create_time" :threshold="[0, 0]" />     
   </view> 
    <view>
     <text>订单更新时间:</text>
     <uni-dateformat :date="data.update_time" :threshold="[0, 0]" />     
   </view> 
    <view>
     <text>微信或支付宝交易单号:</text>
                     <text>{{data.transaction_id}}</text>            
   </view> 
    <view>
     <text>自定义的订单拓展信息:</text>
                     <text>{{data.info}}</text>            
   </view> 
    <view>
     <text>是否是退款订单:</text>
                     <text>{{data.is_refund == true ? '✅' : '❌'}}</text>            
   </view> 
    <view>
     <text>退款金额:</text>
                     <text>{{data.refund_amount}}</text>            
   </view> 
    <view>
     <text>总退款笔数:</text>
                     <text>{{data.refund_count}}</text>            
   </view> 
    <view>
     <text>订单付款时间:</text>
     <uni-dateformat :date="data.paid_time" :threshold="[0, 0]" />     
   </view> 
    <view>
     <text>订单完成退款时间:</text>
     <uni-dateformat :date="data.refund_time" :threshold="[0, 0]" />     
   </view> 
    <view>
     <text>退款原因:</text>
                     <text>{{data.refund_desc}}</text>            
   </view> 
    <view>
     <text>下单会员ID:</text>
                     <text>{{data.member_id}}</text>            
   </view> 
  
      </view>
    </unicloud-db>
    <view class="btns">
      <button type="primary" @click="handleUpdate">修改</button>
      <button type="warn" class="btn-delete" @click="handleDelete">删除</button>
    </view>
  </view>
</template>

<script>
  // 由schema2code生成，包含校验规则和enum静态数据
  import { enumConverter } from '../../js_sdk/validator/uni-id-base-order.js';

  export default {
    data() {
      return {
        queryWhere: '',
        loadMore: {
          contentdown: '',
          contentrefresh: '',
          contentnomore: ''
        },
        options: {
          // 将scheme enum 属性静态数据中的value转成text
          ...enumConverter
        }
      }
    },
    onLoad(e) {
      this._id = e.id
    },
    onReady() {
      if (this._id) {
        this.queryWhere = '_id=="' + this._id + '"'
      }
    },
    methods: {
      handleUpdate() {
        // 打开修改页面
        uni.navigateTo({
          url: './edit?id=' + this._id,
          events: {
            // 监听修改页面成功修改数据后, 刷新当前页面数据
            refreshData: () => {
              this.$refs.udb.loadData({
                clear: true
              })
            }
          }
        })
      },
      handleDelete() {
        this.$refs.udb.remove(this._id, {
          success: (res) => {
            // 删除数据成功后跳转到list页面
            uni.navigateTo({
              url: './list'
            })
          }
        })
      }
    }
  }
</script>

<style>
  .container {
    padding: 10px;
  }

  .btns {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
  }

  .btns button {
    flex: 1;
  }

  .btn-delete {
    margin-left: 10px;
  }
</style>
