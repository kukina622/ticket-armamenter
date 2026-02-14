import type { PlatformAdapter } from '@/types/platform-form/adapter'
import type { TixcraftTaskConfig } from './config'
import { tixcraftSections } from './schema'

export const tixcraftAdapter: PlatformAdapter<TixcraftTaskConfig> = {
  id: 'tixcraft',
  label: 'tixCraft',

  getDefaultConfig() {
    return {
      eventUrl: '',
      eventName: '',
      eventDate: '',
      startTime: '',
      targetArea: '',
      quantity: 2,
      maxPrice: 0,

      autoFill: true,
      buyerName: '',
      buyerPhone: '',
      buyerEmail: '',
      buyerId: '',

      refreshInterval: 500,
      maxRetries: 100,
    }
  },

  getSections() {
    return tixcraftSections
  },
}
