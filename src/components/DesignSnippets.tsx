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
          <img 
            src="/lovable-uploads/ff110188-aef9-4a58-bc1b-d70ec6eb0928.png" 
            alt="Design preview 1"
            className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform opacity-30 drop-shadow-[0_0_10px_rgba(234,56,76,6.7)]"
          />
          <img 
            src="/lovable-uploads/b788e620-6521-4f63-9a60-842861aab1fd.png" 
            alt="Design preview 2"
            className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform opacity-30 drop-shadow-[0_0_10px_rgba(234,56,76,6.7)]"
          />
          <img 
            src="/lovable-uploads/064d2cf9-29e9-4d5d-9a60-1162ef553193.png" 
            alt="Design preview 3"
            className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform opacity-30 drop-shadow-[0_0_10px_rgba(234,56,76,6.7)]"
          />
          <img 
            src="/lovable-uploads/6e428849-f3ab-4d42-b3d1-a057fb893206.png" 
            alt="Design preview 4"
            className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform opacity-30 drop-shadow-[0_0_10px_rgba(234,56,76,6.7)]"
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DesignSnippets;
