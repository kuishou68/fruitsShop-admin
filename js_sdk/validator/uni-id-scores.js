
// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema



const validator = {
  "user_id": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ]
  },
  "score": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "int"
      }
    ]
  },
  "type": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          1,
          2
        ]
      }
    ]
  },
  "balance": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "int"
      }
    ]
  },
  "comment": {
    "rules": [
      {
        "format": "string"
      }
    ]
  }
}

const enumConverter = {}

export { validator, enumConverter }
