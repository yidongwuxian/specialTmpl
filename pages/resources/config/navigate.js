// 定义左侧导航
const prefix = 'XUI';
const list = {
  components: [
    {
      type: 'Basic',
      title: '基础',
      children: [
        {
          title: 'Grid 栅格 Row',
          name: 'Row',
          icon: 'ios-grid-view-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Grid 栅格 Col',
          name: 'Col',
          icon: 'ios-grid-view-outline',
          nest: {
            enable: true,
            parent: {
              allow: ['Row'],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Button 按钮',
          name: 'Button',
          icon: 'social-youtube-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Icon 图标',
          name: 'Icon',
          icon: 'ios-heart-outline',
          nest: {
            enable: false,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        }
      ]
    },
    {
      type: 'Form',
      title: '表单',
      children: [
        {
          title: 'Input 输入框',
          name: prefix + 'Input',
          icon: 'ios-compose-outline',
          nest: {
            enable: false,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Radio 单选框',
          name: 'Radio',
          icon: 'ios-circle-filled',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'RadioGroup 单选框组',
          name: 'RadioGroup',
          icon: 'ios-circle-filled',
          nest: {
            enable: false,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: ['Radio'],
              deny: []
            }
          }
        },
        {
          title: 'Checkbox 多选框',
          name: 'Checkbox',
          icon: 'android-checkbox-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'CheckboxGroup 多选框组',
          name: 'CheckboxGroup',
          icon: 'android-checkbox-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: ['Checkbox'],
              deny: []
            }
          }
        },
        {
          title: 'Switch 开关',
          name: 'Switch',
          icon: 'toggle',
          nest: {
            enable: false,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Table 表格',
          name: 'Table',
          icon: 'ios-grid-view',
          nest: {
            enable: false,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Select 选择器',
          name: 'Select',
          icon: 'ios-arrow-down',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: ['Option', 'OptionGroup'],
              deny: []
            }
          }
        },
        {
          title: 'Option 选择器选项',
          name: 'Option',
          icon: 'ios-arrow-down',
          nest: {
            enable: false,
            parent: {
              allow: ['Select', 'OptionGroup'],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'OptionGroup 选择器选项组',
          name: 'OptionGroup',
          icon: 'ios-arrow-down',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: ['Option'],
              deny: []
            }
          }
        },
        {
          title: 'Slider 滑块',
          name: 'Slider',
          icon: 'minus-round',
          nest: {
            enable: false,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'InputNumber 数字输入框',
          name: prefix + 'InputNumber',
          icon: 'ios-calculator',
          nest: {
            enable: false,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Upload 上传',
          name: 'Upload',
          icon: 'ios-cloud-upload-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'ColorPicker 颜色选择器',
          name: 'ColorPicker',
          icon: 'android-color-palette',
          nest: {
            enable: false,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Form 表单',
          name: 'Form',
          icon: 'ios-list-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'FormItem 表单域',
          name: 'FormItem',
          icon: 'ios-list-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        }
      ]
    },
    {
      type: 'View',
      title: '视图',
      children: [
        {
          title: 'Alert 警告提示',
          name: 'Alert',
          icon: 'alert',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Card 卡片',
          name: 'Card',
          icon: 'ios-browsers-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Message 全局提示',
          name: 'Message',
          icon: 'ios-information-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Modal 对话框',
          name: 'Modal',
          icon: 'ios-chatbubble-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Progress 进度条',
          name: 'Progress',
          icon: 'android-remove',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Avatar 头像',
          name: 'Avatar',
          icon: 'person',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Collapse 折叠面板',
          name: 'Collapse',
          icon: 'ios-albums-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Panel 面板',
          name: 'Panel',
          icon: 'ios-albums-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Carousel 走马灯',
          name: prefix + 'Carousel',
          icon: 'ios-film-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'SwiperBox 轮播图',
          name: 'SwiperBox',
          icon: 'ios-film-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Tree 树形控件',
          name: 'Tree',
          icon: 'network',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        }
      ]
    },
    {
      type: 'Navigation',
      title: '导航',
      children: [
        {
          title: 'Tabs 标签页',
          name: prefix + 'Tabs',
          icon: 'social-windows-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Tabs 标签页面板',
          name:  prefix + 'TabPane',
          icon: 'social-windows-outline',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Dropdown 下拉菜单',
          name: 'Dropdown',
          icon: 'arrow-down-b',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'DropdownMenu 下拉菜单容器',
          name: 'DropdownMenu',
          icon: 'arrow-down-b',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'DropdownItem 下拉菜单项',
          name: 'DropdownItem',
          icon: 'arrow-down-b',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'LoadingBar 加载进度条',
          name: 'LoadingBar',
          icon: 'ios-minus-empty',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        }
      ]
    },
    {
      type: 'Other',
      title: '其它',
      children: [
        {
          title: 'BackTop 返回顶部',
          name: 'BackTop',
          icon: 'ios-arrow-up',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        },
        {
          title: 'Scroll 无限滚动',
          name: 'Scroll',
          icon: 'ios-more',
          nest: {
            enable: true,
            parent: {
              allow: [],
              deny: []
            },
            children: {
              allow: [],
              deny: []
            }
          }
        }
      ]
    }
  ]
}

export default list
