
// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema



const validator = {
  "shop_id": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "门店ID"
  },
  "name": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "门店名称"
  },
  "type": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "门店类型"
  },
  "address": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "门店位置"
  },
  "city": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "所在城市"
  },
  "geohash": {
    "rules": [],
    "label": "经纬度"
  },
  "latitude": {
    "rules": [],
    "label": "纬度"
  },
  "longitude": {
    "rules": [],
    "label": "经度"
  }
}

const enumConverter = {}

export { validator, enumConverter }
