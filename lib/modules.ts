export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const modules: { name: string; items: Item[] }[] = [
  {
    name: 'Supply Chain Management',
    items: [
      {
        name: 'Product Catalogue',
        slug: 'product-catalogue',
        description:
          'Create product catalogue to promote pharmaceutical products.',
      },
      {
        name: 'Register Stakeholder',
        slug: 'register',
        description: 'Review and update order status.',
      },
      {
        name: 'Order ',
        slug: 'order',
        description: 'Manage order.',
      },
    ],
  },
  {
    name: 'Blockchain',
    items: [
      {
        name: 'Trace Pharmaceutical Products',
        slug: 'trace',
        description: 'Trace pharmaceutical produtcs powered by Ethereum',
      },
    ],
  },
  {
    name: 'More',
    items: [
      {
        name: 'My Profile',
        slug: 'profile',
        description: 'Review and update profile details.',
      },
    ],
  },
];
