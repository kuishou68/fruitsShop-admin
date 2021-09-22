
// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema



const validator = {
  "name": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "类别名称"
  },
  "description": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "类别描述"
  },
  "create_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "defaultValue": {
      "$env": "now"
    },
    "label": "创建时间"
  }
}

const enumConverter = {}

export { validator, enumConverter }
