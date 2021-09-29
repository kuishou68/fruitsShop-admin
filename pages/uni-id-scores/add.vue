
<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="user_id" label="" required>
  <uni-easyinput placeholder="用户id，参考uni-id-users表" v-model="formData.user_id" />
</uni-forms-item>
<uni-forms-item name="score" label="" required>
  <uni-easyinput placeholder="本次变化的积分" type="number" v-model="formData.score" />
</uni-forms-item>
<uni-forms-item name="type" label="">
  <uni-data-checkbox v-model="formData.type" :localdata="formOptions.type_localdata" />
</uni-forms-item>
<uni-forms-item name="balance" label="" required>
  <uni-easyinput placeholder="变化后的积分余额" type="number" v-model="formData.balance" />
</uni-forms-item>
<uni-forms-item name="comment" label="">
  <uni-easyinput placeholder="备注，说明积分新增、消费的缘由" v-model="formData.comment" trim="both" />
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
  import { validator } from '../../js_sdk/validator/uni-id-scores.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'uni-id-scores';

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
  "score": null,
  "type": null,
  "balance": null,
  "comment": ""
},
        formOptions: {
  "type_localdata": [
    1,
    2
  ]
},
        rules: {
          ...getValidator(["user_id","score","type","balance","comment"])
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
