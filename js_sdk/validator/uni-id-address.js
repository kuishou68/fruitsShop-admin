
// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema



const validator = {
  "user_id": {
    "rules": [
      {
        "format": "string"
      }
    ]
  },
  "name": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "收货人"
  },
  "alias": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "地址别名"
  },
  "mobile": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      },
      {
        "pattern": "^\\+?[0-9-]{3,20}$"
      }
    ],
    "label": "手机号"
  },
  "mobile_area_code": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "国际区号"
  },
  "province_code": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "省"
  },
  "city_code": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "市"
  },
  "area_code": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "省市区"
  },
  "address": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "详细住址"
  },
  "formatted_address": {
    "rules": [
      {
        "format": "string"
      }
    ]
  },
  "zip_code": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "邮编"
  },
  "email": {
    "rules": [
      {
        "format": "string"
      },
      {
        "format": "email"
      }
    ],
    "label": "邮箱"
  },
  "is_default": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "defaultValue": false,
    "label": "默认地址"
  }
}

const enumConverter = {}

export { validator, enumConverter }
