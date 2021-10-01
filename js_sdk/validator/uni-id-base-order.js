
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
  "type": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "订单类型"
  },
  "pay_type": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "支付渠道"
  },
  "total_fee": {
    "rules": [
      {
        "format": "double"
      }
    ],
    "label": "订单总金额"
  },
  "platform": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "下单平台类型"
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
