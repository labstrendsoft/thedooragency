// components/TopLoaderControl.tsx

import TopLoader from 'nextjs-toploader';

// interface Props {
//   includeRoutes: string[];
// }

export default function TopLoaderControl() {
  // const pathname = usePathname();

  // const shouldShow = includeRoutes.includes(pathname);

  // if (!shouldShow) return null;
  return <TopLoader color="#1447e6" height={1.5} showSpinner={false} easing="ease-in-out" />;
}
