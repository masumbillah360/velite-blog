'use client'

import React from 'react'
import { MenuIcon } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import NavItemsList from '../NavItems';


const Navbar = () => {
  return (
      <div className="sticky top-0 p-3 shadow-lg bg-white">
          <div className="flex justify-between items-center">
              <div>
                  <h4 className="font-bold text-xl">Masum</h4>
              </div>
              <div className="hidden sm:block">
                  <NavItemsList isMobile={false} />
              </div>
              <Sheet>
                  <SheetTrigger className="sm:hidden">
                      <MenuIcon />
                  </SheetTrigger>
                  <SheetContent>
                      <NavItemsList isMobile={true} />
                  </SheetContent>
              </Sheet>
          </div>
      </div>
  );
}

export default Navbar