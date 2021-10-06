
<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="shop_id" label="门店ID">
  <uni-easyinput placeholder="门店id，参考uni-id-shop表" v-model="formData.shop_id" />
</uni-forms-item>
<uni-forms-item name="shop_name" label="门店名称">
  <uni-easyinput placeholder="门店名称" v-model="formData.shop_name" />
</uni-forms-item>
<uni-forms-item name="shop_type" label="门店类型">
  <uni-easyinput placeholder="门店类型 1:自营 2:加盟" v-model="formData.shop_type" trim="both" />
</uni-forms-item>
<uni-forms-item name="shop_address" label="门店位置">
  <uni-easyinput placeholder="门店位置" v-model="formData.shop_address" trim="both" />
</uni-forms-item>
<uni-forms-item name="shop_city" label="所在城市">
  <uni-easyinput placeholder="所在城市" v-model="formData.shop_city" />
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
  import { validator } from '../../js_sdk/validator/uni-id-shop.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'uni-id-shop';

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
  "shop_id": "",
  "shop_name": "",
  "shop_type": "",
  "shop_address": "",
  "shop_city": "",
  "geohash": null,
  "latitude": null,
  "longitude": null
},
        formOptions: {},
        rules: {
          ...getValidator(["shop_id","shop_name","shop_type","shop_address","shop_city","geohash","latitude","longitude"])
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
