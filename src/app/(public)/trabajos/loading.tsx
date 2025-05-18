import LogoRevealLoader from '@/common/components/customize/Loader';

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="bg-thedooragency-negro absolute inset-0 z-50 flex h-screen items-center justify-center">
      <LogoRevealLoader />
    </div>
  );
}
