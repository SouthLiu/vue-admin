import type { ServerResult } from '#/public';
import { request } from '@/utils/request';

enum API {
  URL = '/platform/partner',
}

interface ResultData {
  id: string;
  name: string;
}

/**
 * 获取公司数据
 * @param data - 请求数据
 */
export function getPartner(data?: unknown) {
  return request.get(
    `${API.URL}`,
    { params: data }
  ) as Promise<ServerResult<ResultData[]>>;
}
