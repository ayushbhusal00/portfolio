export default function LoadingPlayground() {
  return (
    <section className='min-h-[70vh] w-full flex items-center justify-center'>
      <div className='flex flex-col items-center gap-3 text-text-subtle'>
        <span className='h-8 w-8 rounded-full border-2 border-border-base border-t-text-subtle animate-spin' />
        <p className='text-sm'>Loading playground project…</p>
      </div>
    </section>
  );
}
