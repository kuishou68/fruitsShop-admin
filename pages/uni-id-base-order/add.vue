
<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="title" label="商品标题">
  <uni-easyinput placeholder="商品标题" v-model="formData.title" />
</uni-forms-item>
<uni-forms-item name="type" label="订单类型">
  <uni-easyinput placeholder="订单类型，如商品订单，会员订单，充值订单等" v-model="formData.type" />
</uni-forms-item>
<uni-forms-item name="pay_type" label="支付渠道">
  <uni-easyinput placeholder="支付渠道，wxpay | alipay" v-model="formData.pay_type" />
</uni-forms-item>
<uni-forms-item name="total_fee" label="订单总金额">
  <uni-easyinput placeholder="订单总金额，单位：分。" type="number" v-model="formData.total_fee" />
</uni-forms-item>
<uni-forms-item name="status" label="订单状态">
  <uni-easyinput placeholder="订单状态，1：待付款，2：已付款，3：退款审核中，4：退款中，5：已退款，-1已取消付款/退款，-2：退款拒绝，-3：退款失败" type="number" v-model="formData.status" />
</uni-forms-item>
<uni-forms-item name="is_refund" label="">
  <switch @change="binddata('is_refund', $event.detail.value)" :checked="formData.is_refund" />
</uni-forms-item>
<uni-forms-item name="refund_amount" label="退款金额">
  <uni-easyinput placeholder="退款金额（非退款订单表示已退款总金额，退款订单表示该笔退款的退款金额），单位：分" type="number" v-model="formData.refund_amount" />
</uni-forms-item>
<uni-forms-item name="refund_count" label="总退款笔数">
  <uni-easyinput placeholder="总退款笔数（非退款订单有值）" type="number" v-model="formData.refund_count" />
</uni-forms-item>
<uni-forms-item name="create_time" label="订单创建时间">
  <uni-datetime-picker return-type="timestamp" :value="formData.create_time" />
</uni-forms-item>
<uni-forms-item name="update_time" label="订单更新时间">
  <uni-datetime-picker return-type="timestamp" :value="formData.update_time" />
</uni-forms-item>
<uni-forms-item name="paid_time" label="订单付款时间">
  <uni-datetime-picker return-type="timestamp" :value="formData.paid_time" />
</uni-forms-item>
<uni-forms-item name="refund_time" label="订单完成退款时间">
  <uni-datetime-picker return-type="timestamp" :value="formData.refund_time" />
</uni-forms-item>
<uni-forms-item name="info" label="自定义的订单拓展信息">
  <uni-easyinput placeholder="自定义的订单拓展信息，如商品信息、会员卡种类信息等" v-model="formData.info" />
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
  "title": "",
  "type": "",
  "pay_type": "",
  "total_fee": null,
  "user_id": null,
  "platform": null,
  "status": null,
  "is_refund": null,
  "refund_amount": null,
  "refund_count": null,
  "create_time": null,
  "update_time": null,
  "paid_time": null,
  "refund_time": null,
  "refund_desc": null,
  "transaction_id": null,
  "info": ""
},
        formOptions: {},
        rules: {
          ...getValidator(["title","type","pay_type","total_fee","platform","status","is_refund","refund_amount","refund_count","create_time","update_time","paid_time","refund_time","refund_desc","transaction_id","info","user_id"])
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
