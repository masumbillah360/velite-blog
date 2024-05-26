import { navMenu, sectionIds } from '@/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const NavItemsList = ({ isMobile }: { isMobile: boolean }) => {
    const pathname = usePathname();
    function getInitialActiveSection() {
        return pathname === '/blogs' ? 'blogs' : 'home';
    }
  const [activeSection, setActiveSection] = useState(getInitialActiveSection());
  const handleScroll = () => {
      const targetHeight = window.innerHeight / 2;
      for (const [section, id] of Object.entries(sectionIds)) {
          const sectionElement = document?.getElementById(id);
          const rect = sectionElement?.getBoundingClientRect();
          if (
              rect?.top &&
              rect?.top <= targetHeight &&
              rect?.bottom &&
              rect?.bottom >= targetHeight
          ) {
              setActiveSection(section);
              break;
          }
      }
  };

  useEffect(() => {
      const handleLocationChange = () => {
          setActiveSection(pathname === '/blogs' ? 'blogs' : 'home');
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('popstate', handleLocationChange);

      return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('popstate', handleLocationChange);
      };
  }, [pathname]);


    return (
        <div
            className={`flex justify-between  gap-5 ${
                isMobile ? 'flex-col items-start' : 'items-center'
            }`}>
            {navMenu.map((menu) => (
                <Link
                    className="font-semibold"
                    key={menu.label}
                    href={
                        pathname === '/'
                            ? `#${sectionIds[menu.route]}`
                            : `/#${sectionIds[menu.route]}`
                    }>
                    {menu.label}
                </Link>
            ))}
        </div>
    );
};

export default NavItemsList;
