import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

const DesignSnippets = () => {
  return (
    <Collapsible className="w-full max-w-md">
      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-brand-white hover:text-brand-red transition-colors">
        <span>View Design Snippets</span>
        <ChevronDown className="h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-2">
        <div className="grid grid-cols-2 gap-4 p-4 bg-black/50 rounded-lg backdrop-blur-sm">
          <div className="bg-[#F2FCE2] h-24 rounded-lg animate-pulse"></div>
          <div className="bg-[#FEF7CD] h-24 rounded-lg animate-pulse"></div>
          <div className="bg-[#FEC6A1] h-24 rounded-lg animate-pulse"></div>
          <div className="bg-[#E5DEFF] h-24 rounded-lg animate-pulse"></div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DesignSnippets;