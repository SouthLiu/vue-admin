/**
 * @description: 配置项
 */
export const TITLE_SUFFIX = 'South Admin'; // 标题后缀
export const TOKEN = 'admin_token'; // token名称
export const WATERMARK_PREFIX = 'admin'; // 水印前缀
export const EMPTY_VALUE = '-'; // 空值显示

// 公共组件默认值
export const PLEASE_ENTER = '请输入'; // 输入框默认文字
export const PLEASE_SELECT = '请选择';// 选择框默认文字
export const MAX_TAG_COUNT: number | 'responsive' = 'responsive'; // 最多显示多少个标签，responsive：自适应
export const FORM_REQUIRED = [{ required: true }]; // 表单必填校验

// 日期格式化
export const DATE_FORMAT = 'YYYY/MM/DD';
export const TIME_FORMAT = 'YYYY/MM/DD hh:mm:ss';

// 环境判断
const ENV = import.meta.env.VITE_ENV as string;
// 生成环境所用的接口
const URL = import.meta.env.VITE_BASE_URL as string;
// 上传地址
export const FILE_API = `${ENV === 'development' ? '/api' : URL}/authority/file/upload-file`;

// 新增/编辑标题
export const ADD_TITLE = '新增';
export const EDIT_TITLE = (name: string, title?: string) => `编辑${ title ?? '' }${ name ? `(${name})` : '' }`;

// 密码规则
export const PASSWORD_RULE = {
  pattern: /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*+\.\_\-*]{6,30}$/,
  message: '密码为6-30位必须包含字母和数字!'
};

// 生成路由排除内容，不带后缀名转换成“/文件名/”格式
export const ROUTER_EXCLUDE = [
  '/login',
  '/components',
  '/utils',
  '/lib',
  '/hooks',
  '/model',
  '/403',
  '/404',
];

