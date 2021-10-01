
// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema



const validator = {
  "member_id": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "会员ID"
  },
  "nickname": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "昵称"
  },
  "password": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      },
      {
        "minLength": 6
      }
    ],
    "label": "密码"
  },
  "gender": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
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
        ]
      }
    ],
    "defaultValue": 0,
    "label": "性别"
  },
  "status": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
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
        ]
      }
    ],
    "defaultValue": 0,
    "label": "会员状态"
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
    "label": "手机号码"
  },
  "mobile_confirmed": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "text": "未验证",
            "value": 0
          },
          {
            "text": "已验证",
            "value": 1
          }
        ]
      }
    ],
    "defaultValue": 0,
    "label": "手机号验证状态"
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
  "email_confirmed": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "text": "未验证",
            "value": 0
          },
          {
            "text": "已验证",
            "value": 1
          }
        ]
      }
    ],
    "defaultValue": 0,
    "label": "邮箱验证状态"
  },
  "avatar": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "头像地址"
  },
  "wx_unionid": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "微信unionid"
  },
  "wx_openid": {
    "rules": [
      {
        "format": "object"
      }
    ],
    "label": "微信各个平台openid"
  },
  "ali_openid": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "支付宝平台openid"
  },
  "realname_auth": {
    "rules": [
      {
        "format": "object"
      }
    ],
    "label": "实名认证信息"
  },
  "register_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "label": "注册时间"
  },
  "register_ip": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "注册时 IP 地址"
  },
  "last_login_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "label": "最后登录时间"
  },
  "last_login_ip": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "最后登录时"
  },
  "token": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "会员token"
  },
  "inviter_uid": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "会员上级邀请者码"
  },
  "my_invite_code": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "会员自身邀请码"
  }
}

const enumConverter = {
  "gender_valuetotext": {
    "0": "未知",
    "1": "男",
    "2": "女"
  },
  "status_valuetotext": {
    "0": "正常",
    "1": "禁用",
    "2": "审核中",
    "3": "审核拒绝"
  },
  "mobile_confirmed_valuetotext": {
    "0": "未验证",
    "1": "已验证"
  },
  "email_confirmed_valuetotext": {
    "0": "未验证",
    "1": "已验证"
  }
}

export { validator, enumConverter }
