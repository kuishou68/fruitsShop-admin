
<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="name" label="类别名称" required>
  <uni-easyinput placeholder="类别名称" v-model="formData.name" trim="both" />
</uni-forms-item>
<uni-forms-item name="sort" label="排序">
  <uni-easyinput placeholder="类别排序，越大越靠后" type="number" v-model="formData.sort" />
</uni-forms-item>
<uni-forms-item name="description" label="类别描述">
  <uni-easyinput placeholder="类别描述" v-model="formData.description" trim="both" />
</uni-forms-item>
<uni-forms-item name="icon" label="图标地址">
  <uni-easyinput placeholder="类别图标/图片地址" v-model="formData.icon" trim="both" />
</uni-forms-item>
<uni-forms-item name="is_hot_show" label="加入热门显示">
  <switch @change="binddata('is_hot_show', $event.detail.value)" :checked="formData.is_hot_show" />
</uni-forms-item>
<uni-forms-item name="is_index_show" label="首页显示">
  <switch @change="binddata('is_index_show', $event.detail.value)" :checked="formData.is_index_show" />
</uni-forms-item>
<uni-forms-item name="create_date" label="创建时间">
  <uni-datetime-picker return-type="timestamp" :value="formData.create_date" />
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
  import { validator } from '../../js_sdk/validator/opendb-mall-categories.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'opendb-mall-categories';

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
  "name": "",
  "sort": null,
  "description": "",
  "icon": "",
  "is_hot_show": null,
  "is_index_show": null,
  "create_date": null
},
        formOptions: {},
        rules: {
          ...getValidator(["name","sort","description","icon","is_hot_show","is_index_show","create_date"])
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
        db.collection(dbCollectionName).doc(id).field('name,sort,description,icon,is_hot_show,is_index_show,create_date').get().then((res) => {
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

