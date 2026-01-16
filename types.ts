import React from 'react';

export type TemplateType = 'minimalist' | 'futuristic' | 'corporate';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}