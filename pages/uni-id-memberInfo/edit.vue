
<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="member_id" label="会员ID">
  <uni-easyinput placeholder="系统自动生成" v-model="formData.member_id" />
</uni-forms-item>
<uni-forms-item name="nickname" label="昵称" required>
  <uni-easyinput placeholder="会员昵称" v-model="formData.nickname" trim="both" />
</uni-forms-item>
<uni-forms-item name="password" label="密码" required>
  <uni-easyinput placeholder="密码，加密存储" v-model="formData.password" trim="both" />
</uni-forms-item>
<uni-forms-item name="gender" label="性别">
  <uni-data-checkbox v-model="formData.gender" :localdata="formOptions.gender_localdata" />
</uni-forms-item>
<uni-forms-item name="status" label="会员状态">
  <uni-data-checkbox v-model="formData.status" :localdata="formOptions.status_localdata" />
</uni-forms-item>
<uni-forms-item name="mobile" label="手机号码" required>
  <uni-easyinput placeholder="手机号码" v-model="formData.mobile" trim="both" />
</uni-forms-item>
<uni-forms-item name="mobile_confirmed" label="手机号验证状态">
  <uni-data-checkbox v-model="formData.mobile_confirmed" :localdata="formOptions.mobile_confirmed_localdata" />
</uni-forms-item>
<uni-forms-item name="email" label="邮箱">
  <uni-easyinput placeholder="邮箱地址" v-model="formData.email" trim="both" />
</uni-forms-item>
<uni-forms-item name="email_confirmed" label="邮箱验证状态">
  <uni-data-checkbox v-model="formData.email_confirmed" :localdata="formOptions.email_confirmed_localdata" />
</uni-forms-item>
<uni-forms-item name="avatar" label="头像地址">
  <uni-easyinput placeholder="头像地址" v-model="formData.avatar" trim="both" />
</uni-forms-item>
<uni-forms-item name="wx_unionid" label="微信unionid">
  <uni-easyinput placeholder="微信unionid" v-model="formData.wx_unionid" />
</uni-forms-item>
<uni-forms-item name="ali_openid" label="支付宝平台openid">
  <uni-easyinput placeholder="支付宝平台openid" v-model="formData.ali_openid" />
</uni-forms-item>
<uni-forms-item name="register_date" label="注册时间">
  <uni-datetime-picker return-type="timestamp" :value="formData.register_date" />
</uni-forms-item>
<uni-forms-item name="register_ip" label="注册时 IP 地址">
  <uni-easyinput placeholder="注册时 IP 地址" v-model="formData.register_ip" />
</uni-forms-item>
<uni-forms-item name="last_login_date" label="最后登录时间">
  <uni-datetime-picker return-type="timestamp" :value="formData.last_login_date" />
</uni-forms-item>
<uni-forms-item name="last_login_ip" label="最后登录时">
  <uni-easyinput placeholder="IP 地址" v-model="formData.last_login_ip" />
</uni-forms-item>
<uni-forms-item name="token" label="会员token">
  <uni-easyinput placeholder="会员token" v-model="formData.token" />
</uni-forms-item>
<uni-forms-item name="inviter_uid" label="会员上级邀请者码">
  <uni-easyinput placeholder="会员上级邀请者码" v-model="formData.inviter_uid" trim="both" />
</uni-forms-item>
<uni-forms-item name="my_invite_code" label="会员自身邀请码">
  <uni-easyinput placeholder="可自定义" v-model="formData.my_invite_code" />
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
  import { validator } from '../../js_sdk/validator/uni-id-memberInfo.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'uni-id-memberInfo';

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
  "password": "",
  "gender": 0,
  "status": 0,
  "mobile": "",
  "mobile_confirmed": 0,
  "email": "",
  "email_confirmed": 0,
  "avatar": "",
  "wx_unionid": "",
  "wx_openid": null,
  "ali_openid": "",
  "realname_auth": null,
  "register_date": null,
  "register_ip": "",
  "last_login_date": null,
  "last_login_ip": "",
  "token": "",
  "inviter_uid": "",
  "my_invite_code": ""
},
        formOptions: {
  "gender_localdata": [
    {
      "text": "未知",
      "value": 0
    },
    {
      "text": "男",
      "value": 1
    },
    {
      "text": "女",
      "value": 2
    }
  ],
  "status_localdata": [
    {
      "text": "正常",
      "value": 0
    },
    {
      "text": "禁用",
      "value": 1
    },
    {
      "text": "审核中",
      "value": 2
    },
    {
      "text": "审核拒绝",
      "value": 3
    }
  ],
  "mobile_confirmed_localdata": [
    {
      "text": "未验证",
      "value": 0
    },
    {
      "text": "已验证",
      "value": 1
    }
  ],
  "email_confirmed_localdata": [
    {
      "text": "未验证",
      "value": 0
    },
    {
      "text": "已验证",
      "value": 1
    }
  ]
},
        rules: {
          ...getValidator(["member_id","nickname","password","gender","status","mobile","mobile_confirmed","email","email_confirmed","avatar","wx_unionid","wx_openid","ali_openid","realname_auth","last_login_date","last_login_ip","token","inviter_uid","my_invite_code","register_ip","register_date"])
        }
      }
    },
    onLoad(e) {
      const id = e.id
      this.formDataId = id
      this.getDetail(id)
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
        db.collection(dbCollectionName).doc(this.formDataId).update(value).then((res) => {
          uni.showToast({
            title: '修改成功'
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
      },

      /**
       * 获取表单数据
       * @param {Object} id
       */
      getDetail(id) {
        uni.showLoading({
          mask: true
        })
        db.collection(dbCollectionName).doc(id).field('member_id,nickname,password,gender,status,mobile,mobile_confirmed,email,email_confirmed,avatar,wx_unionid,wx_openid,ali_openid,realname_auth,last_login_date,last_login_ip,token,inviter_uid,my_invite_code').get().then((res) => {
          const data = res.result.data[0]
          if (data) {
            this.formData = data
          }
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

