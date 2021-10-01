
<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="user_id" label="会员ID">
  <uni-easyinput placeholder="会员id，参考会员信息表" v-model="formData.user_id" />
</uni-forms-item>
<uni-forms-item name="name" label="收货人" required>
  <uni-easyinput placeholder="收货人" v-model="formData.name" trim="both" />
</uni-forms-item>
<uni-forms-item name="alias" label="地址别名">
  <uni-easyinput placeholder="例如：家、公司、学校" v-model="formData.alias" trim="both" />
</uni-forms-item>
<uni-forms-item name="mobile" label="手机号" required>
  <uni-easyinput placeholder="手机号码，加密存储" v-model="formData.mobile" trim="both" />
</uni-forms-item>
<uni-forms-item name="area_code" label="省市区" required>
  <uni-data-picker self-field="code" parent-field="parent_code" v-model="formData.area_code" collection="opendb-city-china" orderby="value asc" field="code as value, name as text, eq(type, 2) as isleaf"></uni-data-picker>
</uni-forms-item>
<uni-forms-item name="address" label="详细住址" required>
  <uni-easyinput placeholder="省市区后面的详细住址，包含街道小区房间号" v-model="formData.address" trim="both" />
</uni-forms-item>
<uni-forms-item name="zip_code" label="邮编">
  <uni-easyinput placeholder="邮编" v-model="formData.zip_code" trim="both" />
</uni-forms-item>
<uni-forms-item name="email" label="邮箱">
  <uni-easyinput placeholder="邮箱" v-model="formData.email" trim="both" />
</uni-forms-item>
<uni-forms-item name="is_default" label="默认地址">
  <switch @change="binddata('is_default', $event.detail.value)" :checked="formData.is_default" />
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
  import { validator } from '../../js_sdk/validator/uni-id-address.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'uni-id-address';

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
  "user_id": "",
  "name": "",
  "alias": "",
  "mobile": "",
  "area_code": "",
  "address": "",
  "zip_code": "",
  "email": "",
  "is_default": false
},
        formOptions: {},
        rules: {
          ...getValidator(["user_id","name","alias","mobile","area_code","address","zip_code","email","is_default"])
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
