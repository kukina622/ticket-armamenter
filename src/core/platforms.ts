import type { TicketPlatform } from '@/types/platform'
import type { PlatformAdapter } from '@/types/platform-form/adapter'
import { tixcraftAdapter } from './tixcraft/adapter'

export const platforms: TicketPlatform[] = [
  {
    id: 'tixcraft',
    name: 'tixCraft',
    url: 'https://tixcraft.com',
    description: '演唱會、音樂節、舞台劇等大型活動售票平台',
    category: '綜合售票',
    features: ['演唱會', '音樂節', '舞台劇', '體育賽事'],
    logo: 'T',
    color: '199 89% 48%',
  },
]

export const platformAdapterMapping: Record<string, PlatformAdapter<any>> = {
  tixcraft: tixcraftAdapter,
}
