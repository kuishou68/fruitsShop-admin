
<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="order_id" label="订单ID">
  <uni-easyinput placeholder="系统自动生成" v-model="formData.order_id" />
</uni-forms-item>
<uni-forms-item name="order_number" label="订单号">
  <uni-easyinput placeholder="订单号" v-model="formData.order_number" />
</uni-forms-item>
<uni-forms-item name="mobile" label="下单会员手机号">
  <uni-easyinput placeholder="参考会员手机号" v-model="formData.mobile" />
</uni-forms-item>
<uni-forms-item name="name" label="商品名称1">
  <uni-easyinput placeholder="名称1" v-model="formData.name" trim="both" />
</uni-forms-item>
<uni-forms-item name="name2" label="商品名称2">
  <uni-easyinput placeholder="名称2" v-model="formData.name2" trim="both" />
</uni-forms-item>
<uni-forms-item name="name3" label="商品名称3">
  <uni-easyinput placeholder="名称3" v-model="formData.name3" trim="both" />
</uni-forms-item>
<uni-forms-item name="name4" label="商品名称4">
  <uni-easyinput placeholder="名称4" v-model="formData.name4" trim="both" />
</uni-forms-item>
<uni-forms-item name="count" label="商品数量">
  <uni-easyinput type="number" v-model="formData.count" />
</uni-forms-item>
<uni-forms-item name="goods_thumb" label="缩略图地址1">
  <uni-easyinput placeholder="商品缩略图1，对应唯一的商品名称" v-model="formData.goods_thumb" trim="both" />
</uni-forms-item>
<uni-forms-item name="goods_thumb2" label="缩略图地址2">
  <uni-easyinput placeholder="商品缩略图2，对应唯一的商品名称" v-model="formData.goods_thumb2" trim="both" />
</uni-forms-item>
<uni-forms-item name="goods_thumb3" label="缩略图地址3">
  <uni-easyinput placeholder="商品缩略图3，对应唯一的商品名称" v-model="formData.goods_thumb3" trim="both" />
</uni-forms-item>
<uni-forms-item name="goods_thumb4" label="缩略图地址4">
  <uni-easyinput placeholder="商品缩略图4，对应唯一的商品名称" v-model="formData.goods_thumb4" trim="both" />
</uni-forms-item>
<uni-forms-item name="type" label="订单类型">
  <uni-easyinput placeholder="小程序订单，拼团订单，预售订单、门店订单" v-model="formData.type" />
</uni-forms-item>
<uni-forms-item name="shop_name" label="服务门店">
  <uni-easyinput placeholder="在那个门店下的单" v-model="formData.shop_name" />
</uni-forms-item>
<uni-forms-item name="distribution_Mode" label="配送方式">
  <uni-easyinput placeholder="门店自提 | 送货上门(满39元3公里免运费)" v-model="formData.distribution_Mode" />
</uni-forms-item>
<uni-forms-item name="pay_type" label="支付方式">
  <uni-easyinput placeholder="微信零钱 | 会员卡 | 支付宝" v-model="formData.pay_type" />
</uni-forms-item>
<uni-forms-item name="commodity_fee" label="商品总额">
  <uni-easyinput placeholder="商品总额" type="number" v-model="formData.commodity_fee" />
</uni-forms-item>
<uni-forms-item name="coupon_fee" label="优惠金额">
  <uni-easyinput placeholder="优惠金额" type="number" v-model="formData.coupon_fee" />
</uni-forms-item>
<uni-forms-item name="refund_fee" label="退款金额">
  <uni-easyinput placeholder="退款金额" type="number" v-model="formData.refund_fee" />
</uni-forms-item>
<uni-forms-item name="total_fee" label="订单总金额">
  <uni-easyinput placeholder="单位：分" type="number" v-model="formData.total_fee" />
</uni-forms-item>
<uni-forms-item name="status" label="订单状态">
  <uni-easyinput placeholder="1：待付款，2：待提货，3：已完成，4：退款中，5：已退款，-1已取消付款/退款，-2：退款拒绝，-3：退款失败" type="number" v-model="formData.status" />
</uni-forms-item>
<uni-forms-item name="create_time" label="订单创建时间">
  <uni-datetime-picker return-type="timestamp" :value="formData.create_time" />
</uni-forms-item>
<uni-forms-item name="update_time" label="订单更新时间">
  <uni-datetime-picker return-type="timestamp" :value="formData.update_time" />
</uni-forms-item>
<uni-forms-item name="transaction_id" label="微信或支付宝交易单号">
  <uni-easyinput placeholder="微信或支付宝交易单号" v-model="formData.transaction_id" />
</uni-forms-item>
<uni-forms-item name="info" label="自定义的订单拓展信息">
  <uni-easyinput placeholder="自定义的订单拓展信息，如商品信息、会员卡种类信息等" v-model="formData.info" />
</uni-forms-item>
<uni-forms-item name="is_refund" label="是否是退款订单">
  <switch @change="binddata('is_refund', $event.detail.value)" :checked="formData.is_refund" />
</uni-forms-item>
<uni-forms-item name="refund_amount" label="退款金额">
  <uni-easyinput placeholder="单位：分" type="number" v-model="formData.refund_amount" />
</uni-forms-item>
<uni-forms-item name="refund_count" label="总退款笔数">
  <uni-easyinput placeholder="非退款订单有" type="number" v-model="formData.refund_count" />
</uni-forms-item>
<uni-forms-item name="paid_time" label="订单付款时间">
  <uni-datetime-picker return-type="timestamp" :value="formData.paid_time" />
</uni-forms-item>
<uni-forms-item name="refund_time" label="订单完成退款时间">
  <uni-datetime-picker return-type="timestamp" :value="formData.refund_time" />
</uni-forms-item>
<uni-forms-item name="refund_desc" label="退款原因">
  <uni-easyinput placeholder="退款原因" v-model="formData.refund_desc" />
</uni-forms-item>

      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
            <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/uni-id-base-order.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'uni-id-base-order';

  function getValidator(fields) {
    let reuslt = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        reuslt[key] = validator[key]
      }
    }
    return reuslt
  }

  export default {
    data() {
      return {
        formData: {
  "order_id": "",
  "order_number": "",
  "mobile": "",
  "name": "",
  "name2": "",
  "name3": "",
  "name4": "",
  "count": null,
  "goods_thumb": "",
  "goods_thumb2": "",
  "goods_thumb3": "",
  "goods_thumb4": "",
  "type": "",
  "shop_name": "",
  "distribution_Mode": "",
  "pay_type": "",
  "commodity_fee": null,
  "coupon_fee": null,
  "refund_fee": null,
  "total_fee": null,
  "comment": null,
  "status": null,
  "create_time": null,
  "update_time": null,
  "transaction_id": "",
  "info": "",
  "is_refund": null,
  "refund_amount": null,
  "refund_count": null,
  "paid_time": null,
  "refund_time": null,
  "refund_desc": ""
},
        formOptions: {},
        rules: {
          ...getValidator(["order_id","order_number","mobile","name","name2","name3","name4","count","goods_thumb","goods_thumb2","goods_thumb3","goods_thumb4","type","shop_name","distribution_Mode","pay_type","commodity_fee","coupon_fee","refund_fee","total_fee","comment","status","create_time","update_time","transaction_id","info","is_refund","refund_amount","refund_count","paid_time","refund_time","refund_desc"])
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      /**
       * 触发表单提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.submit().then((res) => {
          this.submitForm(res)
        }).catch((errors) => {
          uni.hideLoading()
        })
      },

      submitForm(value) {
        // 使用 clientDB 提交数据
        db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      }
    }
  }
</script>
