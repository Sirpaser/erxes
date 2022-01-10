export const FIELDS_GROUPS_CONTENT_TYPES = {
  CUSTOMER: 'customer',
  COMPANY: 'company',
  PRODUCT: 'product',
  CONVERSATION: 'conversation',
  DEVICE: 'device',
  USER: 'user',
  ALL: ['customer', 'company', 'product', 'conversation', 'device', 'user']
};

const PROPERTY_GROUPS = [
  {
    label: 'Contacts',
    value: 'contact',
    types: [
      { value: 'customer', label: 'Customers' },
      { value: 'company', label: 'Companies' },
      { value: 'conversation', label: 'Conversation details' },
      { value: 'device', label: 'Device properties' }
    ]
  },
  {
    label: 'Tickets',
    value: 'ticket',
    types: [{ value: 'ticket', label: 'Tickets' }]
  },
  { label: 'Tasks', value: 'task', types: [{ value: 'task', label: 'Tasks' }] },
  {
    label: 'Sales pipeline',
    value: 'deal',
    types: [
      { value: 'deal', label: 'Sales pipeline' },
      { value: 'product', label: 'Products & services' }
    ]
  },
  {
    label: 'Team member',
    value: 'user',
    types: [{ value: 'user', label: 'Team member' }]
  }
];

export const getPropertiesGroups = () => {
  const pluginProperties = JSON.parse(
    localStorage.getItem('plugins_properties') || '[]'
  );

  return PROPERTY_GROUPS.concat(pluginProperties);
};

export const COLUMN_CHOOSER_EXCLUDED_FIELD_NAMES = {
  LIST: [
    'state',
    'avatar',
    'ownerId',
    'status',
    'integrationId',
    'categoryId',
    'vendorId',
    'emailValidationStatus',
    'phoneValidationStatus',
    'location.countryCode',
    'tagIds'
  ],

  IMPORT: [
    'state',
    'avatar',
    'ownerId',
    'status',
    'integrationId',
    'categoryId',
    'vendorId',
    'emailValidationStatus',
    'phoneValidationStatus',
    'location.countryCode',
    'tagIds',
    'createdAt',
    'modifiedAt',
    'isOnline',
    'lastSeenAt',
    'sessionCount',
    'profileScore',
    'leadStatus',
    'relatedIntegrationIds',
    'hasAuthority',
    'isSubscribed',
    'stageChangedDate',
    'productsData.quantity',
    'productsData.unitPrice',
    'productsData.taxPercent',
    'productsData.tax',
    'productsData.discountPercent',
    'productsData.discount',
    'productsData.amount',
    'productsData.tickUsed',
    'stageId',
    'userId',
    'modifiedBy',
    'assignedUserIds',
    'watchedUserIds',
    'productsData.productId',
    'productsData.assignUserId',
    'productsData.uom',
    'productsData.currency'
  ]
};
