
// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema



const validator = {
  "order_id": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "订单ID"
  },
  "order_number": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "订单号"
  },
  "mobile": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "下单会员手机号"
  },
  "name": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "商品名称1"
  },
  "name2": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "商品名称2"
  },
  "name3": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "商品名称3"
  },
  "name4": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "商品名称4"
  },
  "count": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "商品数量"
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
    "label": "缩略图地址1"
  },
  "goods_thumb2": {
    "rules": [
      {
        "format": "string"
      },
      {
        "pattern": "^(http://|https://|/|./|@/)\\S"
      }
    ],
    "label": "缩略图地址2"
  },
  "goods_thumb3": {
    "rules": [
      {
        "format": "string"
      },
      {
        "pattern": "^(http://|https://|/|./|@/)\\S"
      }
    ],
    "label": "缩略图地址3"
  },
  "goods_thumb4": {
    "rules": [
      {
        "format": "string"
      },
      {
        "pattern": "^(http://|https://|/|./|@/)\\S"
      }
    ],
    "label": "缩略图地址4"
  },
  "type": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "订单类型"
  },
  "shop_name": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "服务门店"
  },
  "distribution_Mode": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "配送方式"
  },
  "pay_type": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "支付方式"
  },
  "commodity_fee": {
    "rules": [
      {
        "format": "double"
      }
    ],
    "label": "商品总额"
  },
  "coupon_fee": {
    "rules": [
      {
        "format": "double"
      }
    ],
    "label": "优惠金额"
  },
  "refund_fee": {
    "rules": [
      {
        "format": "double"
      }
    ],
    "label": "退款金额"
  },
  "total_fee": {
    "rules": [
      {
        "format": "double"
      }
    ],
    "label": "订单总金额"
  },
  "comment": {
    "rules": [],
    "label": "备注"
  },
  "status": {
    "rules": [
      {
        "format": "int"
      },
      {
        "minimum": -3,
        "maximum": 5
      }
    ],
    "label": "订单状态"
  },
  "create_time": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "label": "订单创建时间"
  },
  "update_time": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "label": "订单更新时间"
  },
  "transaction_id": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "微信或支付宝交易单号"
  },
  "info": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "自定义的订单拓展信息"
  },
  "is_refund": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "label": "是否是退款订单"
  },
  "refund_amount": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "退款金额"
  },
  "refund_count": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "总退款笔数"
  },
  "paid_time": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "label": "订单付款时间"
  },
  "refund_time": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "label": "订单完成退款时间"
  },
  "refund_desc": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "退款原因"
  }
}

const enumConverter = {}

export { validator, enumConverter }
