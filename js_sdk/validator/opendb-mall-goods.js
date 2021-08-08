
// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema



const validator = {
  "category_id": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "分类ID"
  },
  "goods_sn": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "货号"
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
    "label": "名称"
  },
  "keywords": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "关键字"
  },
  "goods_desc": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "详细描述"
  },
  "goods_thumb": {
    "rules": [
      {
        "format": "string"
      },
      {
        "pattern": "^(http://|https://|/|./|@/)\\S"
      }
    ],
    "label": "缩略图地址"
  },
  "goods_banner_imgs": {
    "rules": [
      {
        "format": "array"
      },
      {
        "arrayType": "file"
      },
      {
        "maxLength": 3
      }
    ],
    "label": "banner图地址"
  },
  "goods_newPrice": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "double"
      }
    ],
    "label": "最新优惠价"
  },
  "goods_price": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "double"
      }
    ],
    "label": "价格"
  },
  "remain_count": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "int"
      }
    ],
    "label": "库存数量"
  },
  "month_sell_count": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "int"
      }
    ],
    "label": "月销量"
  },
  "total_sell_count": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "int"
      }
    ],
    "label": "总销量"
  },
  "comment_count": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "累计评论数"
  },
  "is_real": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "bool"
      }
    ],
    "label": "是否为实物"
  },
  "is_on_sale": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "bool"
      }
    ],
    "label": "是否上架"
  },
  "is_alone_sale": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "label": "是否单独销售"
  },
  "is_best": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "label": "是否精品"
  },
  "is_new": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "label": "是否新品"
  },
  "is_hot": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "label": "是否热销"
  },
  "add_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "defaultValue": {
      "$env": "now"
    },
    "label": "上架时间"
  },
  "last_modify_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "defaultValue": {
      "$env": "now"
    },
    "label": "最后修改时间"
  },
  "seller_note": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "商家备注"
  }
}

const enumConverter = {}

export { validator, enumConverter }
