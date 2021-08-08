
// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema



const validator = {
  "parent_id": {
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
    "label": "类别名称"
  },
  "icon": {
    "rules": [
      {
        "format": "string"
      },
      {
        "pattern": "^(http://|https://|/|./|@/)\\S"
      }
    ],
    "label": "图标地址"
  },
  "sort": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "排序"
  },
  "description": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "类别描述"
  },
  "is_hot_show": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "label": "加入热门显示"
  },
  "is_index_show": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "label": "首页显示"
  },
  "create_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "defaultValue": {
      "$env": "now"
    }
  }
}

const enumConverter = {}

export { validator, enumConverter }
