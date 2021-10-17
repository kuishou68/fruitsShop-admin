
<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="member_id" label="会员ID">
  <uni-easyinput placeholder="会员id，参考会员信息表" v-model="formData.member_id" />
</uni-forms-item>
<uni-forms-item name="nickname" label="昵称">
  <uni-easyinput placeholder="会员昵称" v-model="formData.nickname" trim="both" />
</uni-forms-item>
<uni-forms-item name="mobile" label="手机号码" required>
  <uni-easyinput placeholder="手机号码" v-model="formData.mobile" trim="both" />
</uni-forms-item>
<uni-forms-item name="score" label="积分余额" required>
  <uni-easyinput placeholder="积分余额" type="number" v-model="formData.score" />
</uni-forms-item>
<uni-forms-item name="comment" label="备注">
  <uni-easyinput placeholder="手动修改积分需说明积分变动的缘由" v-model="formData.comment" trim="both" />
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
  "member_id": "",
  "nickname": "",
  "mobile": "",
  "score": null,
  "comment": ""
},
        formOptions: {},
        rules: {
          ...getValidator(["member_id","nickname","mobile","score","comment"])
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
